# A2A Integration Guide

This guide provides instructions for integrating the A2A (Agent-to-Agent) platform with other systems and frameworks.

## Table of Contents

- [Integration with Express](#integration-with-express)
- [Integration with Next.js](#integration-with-nextjs)
- [Integration with React](#integration-with-react)
- [Integration with LLM Providers](#integration-with-llm-providers)
- [Integration with Databases](#integration-with-databases)
- [Integration with Message Queues](#integration-with-message-queues)
- [Integration with Authentication Systems](#integration-with-authentication-systems)
- [Integration with Monitoring Tools](#integration-with-monitoring-tools)

## Integration with Express

You can easily integrate A2A with an existing Express application:

```javascript
import express from 'express';
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';

// Create Express app
const app = express();

// Configure Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create A2A agent
const agent = {
  id: 'my-agent',
  name: 'My Agent',
  description: 'A simple agent',
  version: '1.0.0',
  capabilities: ['text-processing'],
  endpoint: 'http://localhost:3000'
};

// Create A2A server
const requestHandler = new DefaultRequestHandler([agent]);
const a2aServer = new A2AServer(agent, requestHandler);

// Mount A2A routes on a specific path
app.use('/a2a', a2aServer.router);

// Add your own routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Integration with Next.js

For integrating with Next.js, you can create API routes:

```javascript
// pages/api/a2a/[...path].js
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';

// Create A2A agent
const agent = {
  id: 'my-agent',
  name: 'My Agent',
  description: 'A simple agent',
  version: '1.0.0',
  capabilities: ['text-processing'],
  endpoint: process.env.NEXT_PUBLIC_API_URL
};

// Create A2A server
const requestHandler = new DefaultRequestHandler([agent]);
const a2aServer = new A2AServer(agent, requestHandler);

// Create API handler
export default async function handler(req, res) {
  // Extract path from the URL
  const path = req.query.path || [];
  const fullPath = '/' + path.join('/');
  
  // Forward the request to A2A router
  return a2aServer.handleRequest(req, res, fullPath);
}
```

## Integration with React

Create a React component for interacting with A2A agents:

```jsx
// A2AChat.jsx
import React, { useState, useEffect } from 'react';
import { AgentClient, MessageClient } from '@dexwox/a2a-node';

const A2AChat = ({ serverUrl }) => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Initialize clients
  const agentClient = new AgentClient({ baseUrl: serverUrl });
  const messageClient = new MessageClient({ baseUrl: serverUrl });
  
  // Load available agents
  useEffect(() => {
    const loadAgents = async () => {
      try {
        const availableAgents = await agentClient.getAgents();
        setAgents(availableAgents);
      } catch (error) {
        console.error('Failed to load agents:', error);
      }
    };
    
    loadAgents();
  }, []);
  
  // Send message to agent
  const sendMessage = async () => {
    if (!selectedAgent || !message.trim()) return;
    
    setLoading(true);
    
    try {
      // Add user message to conversation
      setConversation(prev => [...prev, { role: 'user', content: message }]);
      
      // Send message to agent
      const messageId = await messageClient.sendMessage(selectedAgent.id, [
        { type: 'text', content: message }
      ]);
      
      // Get response
      const response = await messageClient.getMessage(messageId);
      
      // Add agent response to conversation
      setConversation(prev => [
        ...prev, 
        { 
          role: 'agent', 
          content: response.parts
            .filter(part => part.type === 'text')
            .map(part => part.content)
            .join('\n') 
        }
      ]);
      
      // Clear message input
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="a2a-chat">
      <div className="agent-selector">
        <select 
          value={selectedAgent?.id || ''} 
          onChange={(e) => setSelectedAgent(agents.find(a => a.id === e.target.value))}
        >
          <option value="">Select an agent</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id}>{agent.name}</option>
          ))}
        </select>
      </div>
      
      <div className="conversation">
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      
      <div className="message-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={!selectedAgent || loading}
        />
        <button 
          onClick={sendMessage} 
          disabled={!selectedAgent || !message.trim() || loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default A2AChat;
```

## Integration with LLM Providers

Integrate A2A with large language model providers:

```javascript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an agent that uses OpenAI
const llmAgent = {
  id: 'llm-agent',
  name: 'LLM Agent',
  description: 'An agent powered by OpenAI',
  version: '1.0.0',
  capabilities: ['text-generation', 'question-answering'],
  endpoint: 'http://localhost:3000'
};

// Custom request handler for LLM integration
class LLMRequestHandler extends DefaultRequestHandler {
  async handleSendMessage(parts, agentId) {
    if (agentId !== 'llm-agent') {
      return super.handleSendMessage(parts, agentId);
    }
    
    // Extract text from message parts
    const text = parts
      .filter(part => part.type === 'text')
      .map(part => part.content)
      .join('\n');
    
    try {
      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: text }],
        temperature: 0.7,
      });
      
      // Create artifact from response
      const responseText = response.choices[0].message.content;
      return this.createArtifact([{ type: 'text', content: responseText }]);
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw new Error('Failed to process message with LLM');
    }
  }
}

// Create and start the server
const requestHandler = new LLMRequestHandler([llmAgent]);
const server = new A2AServer(llmAgent, requestHandler);
server.start(3000);
```

## Integration with Databases

Connect A2A with databases for persistent storage:

```javascript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';
import { Pool } from 'pg';

// Create database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Database utility functions
const db = {
  async query(text, params) {
    const client = await pool.connect();
    try {
      return await client.query(text, params);
    } finally {
      client.release();
    }
  },
  
  async getAgent(agentId) {
    const result = await this.query('SELECT * FROM agents WHERE id = $1', [agentId]);
    return result.rows[0];
  },
  
  async saveMessage(message) {
    const { id, sender, recipient, parts } = message;
    await this.query(
      'INSERT INTO messages (id, sender_id, recipient_id, parts, created_at) VALUES ($1, $2, $3, $4, NOW())',
      [id, sender.id, recipient.id, JSON.stringify(parts)]
    );
    return id;
  }
};

// Create a custom request handler with database integration
class DatabaseRequestHandler extends DefaultRequestHandler {
  async handleSendMessage(parts, agentId) {
    // Get agent from database
    const agent = await db.getAgent(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }
    
    // Process message with default handler
    const artifactId = await super.handleSendMessage(parts, agentId);
    
    // Save message to database
    await db.saveMessage({
      id: artifactId,
      sender: { id: 'client', type: 'client' },
      recipient: { id: agentId, type: 'agent' },
      parts
    });
    
    return artifactId;
  }
}

// Create and start the server
const agent = {
  id: 'db-agent',
  name: 'Database Agent',
  description: 'An agent with database integration',
  version: '1.0.0',
  capabilities: ['data-storage'],
  endpoint: 'http://localhost:3000'
};

const requestHandler = new DatabaseRequestHandler([agent]);
const server = new A2AServer(agent, requestHandler);
server.start(3000);
```

## Integration with Message Queues

Integrate A2A with message queues for asynchronous processing:

```javascript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';
import amqp from 'amqplib';

// Connect to RabbitMQ
async function connectRabbitMQ() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  
  // Declare queues
  await channel.assertQueue('a2a-requests', { durable: true });
  await channel.assertQueue('a2a-responses', { durable: true });
  
  return { connection, channel };
}

// Create a custom request handler with message queue integration
class QueueRequestHandler extends DefaultRequestHandler {
  constructor(agents, channel) {
    super(agents);
    this.channel = channel;
    
    // Set up consumer for responses
    this.channel.consume('a2a-responses', (msg) => {
      if (msg) {
        const response = JSON.parse(msg.content.toString());
        console.log('Received response:', response);
        this.channel.ack(msg);
      }
    });
  }
  
  async handleSendMessage(parts, agentId) {
    // Create message payload
    const message = {
      id: `msg_${Date.now()}`,
      agentId,
      parts,
      timestamp: new Date().toISOString()
    };
    
    // Publish message to queue
    this.channel.sendToQueue(
      'a2a-requests',
      Buffer.from(JSON.stringify(message)),
      { persistent: true }
    );
    
    // Return message ID
    return message.id;
  }
}

// Start the server with RabbitMQ integration
async function startServer() {
  try {
    // Connect to RabbitMQ
    const { channel } = await connectRabbitMQ();
    
    // Create agent
    const agent = {
      id: 'queue-agent',
      name: 'Queue Agent',
      description: 'An agent with message queue integration',
      version: '1.0.0',
      capabilities: ['async-processing'],
      endpoint: 'http://localhost:3000'
    };
    
    // Create and start the server
    const requestHandler = new QueueRequestHandler([agent], channel);
    const server = new A2AServer(agent, requestHandler);
    server.start(3000);
    
    console.log('Server started with RabbitMQ integration');
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
```

## Integration with Authentication Systems

Integrate A2A with authentication systems:

```javascript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';
import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

// Create Express app
const app = express();
app.use(express.json());

// Configure passport with JWT strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}, (payload, done) => {
  // Verify user in your database
  // For this example, we'll just check if the user has the required role
  if (payload.role === 'agent-user') {
    return done(null, payload);
  }
  return done(null, false);
}));

// Create authentication middleware
const authenticate = passport.authenticate('jwt', { session: false });

// Create A2A agent
const agent = {
  id: 'secure-agent',
  name: 'Secure Agent',
  description: 'An agent with authentication',
  version: '1.0.0',
  capabilities: ['secure-processing'],
  endpoint: 'http://localhost:3000'
};

// Create A2A server
const requestHandler = new DefaultRequestHandler([agent]);
const a2aServer = new A2AServer(agent, requestHandler);

// Apply authentication middleware to A2A routes
app.use('/a2a', authenticate, a2aServer.router);

// Add login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Validate credentials (replace with your own authentication logic)
  if (username === 'user' && password === 'password') {
    // Generate JWT token
    const token = jwt.sign(
      { id: 'user123', username, role: 'agent-user' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    return res.json({ token });
  }
  
  return res.status(401).json({ error: 'Invalid credentials' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Integration with Monitoring Tools

Integrate A2A with monitoring tools:

```javascript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';
import prometheus from 'prom-client';
import express from 'express';

// Create Express app
const app = express();

// Initialize Prometheus metrics
const register = new prometheus.Registry();
prometheus.collectDefaultMetrics({ register });

// Create custom metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const messageCounter = new prometheus.Counter({
  name: 'a2a_messages_total',
  help: 'Total number of A2A messages',
  labelNames: ['agent_id', 'status']
});

// Register metrics
register.registerMetric(httpRequestDuration);
register.registerMetric(messageCounter);

// Create monitoring middleware
function monitoringMiddleware(req, res, next) {
  const start = Date.now();
  
  // Record end time and duration on response finish
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration.observe(
      { method: req.method, route: req.route?.path || req.path, status: res.statusCode },
      duration
    );
  });
  
  next();
}

// Create A2A agent
const agent = {
  id: 'monitored-agent',
  name: 'Monitored Agent',
  description: 'An agent with monitoring',
  version: '1.0.0',
  capabilities: ['text-processing'],
  endpoint: 'http://localhost:3000'
};

// Create custom request handler with monitoring
class MonitoredRequestHandler extends DefaultRequestHandler {
  async handleSendMessage(parts, agentId) {
    try {
      const artifactId = await super.handleSendMessage(parts, agentId);
      messageCounter.inc({ agent_id: agentId, status: 'success' });
      return artifactId;
    } catch (error) {
      messageCounter.inc({ agent_id: agentId, status: 'error' });
      throw error;
    }
  }
}

// Create A2A server
const requestHandler = new MonitoredRequestHandler([agent]);
const a2aServer = new A2AServer(agent, requestHandler);

// Apply monitoring middleware
app.use(monitoringMiddleware);

// Mount A2A routes
app.use('/a2a', a2aServer.router);

// Add metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Conclusion

These integration examples demonstrate how to incorporate the A2A platform into various systems and frameworks. Adapt these patterns to your specific requirements and infrastructure. For more detailed information, refer to the API documentation and examples in the `/meta/examples` directory.
