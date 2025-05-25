import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import type {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler
} from 'express';
import { A2AError, AgentCard } from '@dexwox/a2a-core';
import { RequestHandler } from './request-handler';

export class A2AServer {
  private readonly app: ReturnType<typeof express>;
  private wss: WebSocketServer | null = null;
  private readonly agentCard: AgentCard;
  private readonly requestHandler: RequestHandler;

  constructor(
    agentCard: AgentCard, 
    requestHandler: RequestHandler,
    private readonly contextMiddleware?: (req: Request, res: Response, next: NextFunction) => void
  ) {
    this.app = express();
    this.agentCard = agentCard;
    this.requestHandler = requestHandler;
    
    this.configureMiddleware();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddleware(): void {
    this.app.use(json() as express.RequestHandler);
    this.app.use(cors({
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }) as express.RequestHandler);
    
    // Add context middleware if provided, otherwise use default
    if (this.contextMiddleware) {
      this.app.use(this.contextMiddleware);
    } else {
      this.app.use(require('./agent-execution/context-middleware').contextMiddleware(this.agentCard.id));
    }
  }

  private configureRoutes(): void {
    // Agent card endpoint
    this.app.get('/.well-known/agent.json', (_: Request, res: Response) => {
      res.json(this.agentCard);
    });

    // API routes
    this.app.use('/api/v1', this.requestHandler.router);
  }

  private configureErrorHandling(): void {
    const errorHandler: ErrorRequestHandler = (
      err: unknown,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (err instanceof Error && 'code' in err && 'message' in err) {
        const a2aError = err as A2AError;
        res.status(400).json({
          jsonrpc: '2.0',
          error: {
            code: a2aError.code,
            message: a2aError.message,
            ...(a2aError.data && { data: a2aError.data })
          }
        });
      }
      console.error(err);
      res.status(500).json({ 
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal server error'
        }
      });
    };
    this.app.use(errorHandler);
  }

  public start(port: number = 3000): void {
    const server = this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    // Create WebSocket server
    this.wss = new WebSocketServer({ server });

    this.wss.on('connection', (ws) => {
      console.log('New WebSocket connection');
      
      ws.on('message', async (data) => {
        try {
          const message = JSON.parse(data.toString());
          if (message.method === 'streamMessage') {
            for await (const part of this.requestHandler.handleStreamMessage(
              message.params.parts,
              message.params.agentId
            )) {
              ws.send(JSON.stringify(part));
            }
          }
        } catch (err) {
          ws.send(JSON.stringify(
            this.requestHandler.normalizeError(err)
          ));
        }
      });

      ws.on('close', () => {
        console.log('WebSocket connection closed');
      });
    });
  }
}
