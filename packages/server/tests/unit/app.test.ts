import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest'
import type { Request, Response, ErrorRequestHandler } from 'express'
import { A2AServer } from '../../src/app'
import request from 'supertest'
import { AgentCard } from '@dexwox-labs/a2a-core'
import { RequestHandler } from '../../src/request-handler'

// Mock the context middleware
beforeAll(() => {
  vi.mock('../../src/agent-execution/context-middleware', () => ({
    contextMiddleware: vi.fn(() => (req: any, res: any, next: any) => next())
  }))
})

describe('App', () => {
  let server: A2AServer
  let mockRequestHandler: RequestHandler
  let mockAgentCard: AgentCard

  beforeEach(() => {
    vi.clearAllMocks()
    mockAgentCard = {
      id: 'test-agent',
      name: 'Test Agent',
      capabilities: ['test-capability'],
      endpoint: 'http://test-endpoint'
    }
    mockRequestHandler = {
      router: vi.fn().mockReturnValue({
        get: vi.fn(),
        post: vi.fn()
      }),
      handleStreamMessage: vi.fn(),
      normalizeError: vi.fn(),
      handleSendMessage: vi.fn(),
      handleGetTaskStatus: vi.fn(),
      handleCancelTask: vi.fn(),
      handleTaskResubscription: vi.fn(),
      handleCreateTask: vi.fn(),
      handleUpdateTask: vi.fn()
    } as unknown as RequestHandler
    const mockMiddleware = vi.fn((req, res, next) => next())
    server = new A2AServer(mockAgentCard, mockRequestHandler, mockMiddleware)
  })

  it('should return 404 for unknown routes', async () => {
    const response = await request(server['app']).get('/unknown-route')
    expect(response.status).toBe(404)
  })

  it('should serve agent card at well-known endpoint', async () => {
    const response = await request(server['app']).get('/.well-known/agent.json')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(mockAgentCard)
  })

  it('should handle errors properly', async () => {
    // Test the error handler directly
    const errorHandler = server['app']._router.stack
      .find(layer => layer.handle?.length === 4)?.handle as ErrorRequestHandler
    
    const mockReq = {} as Request
    const mockRes = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    } as unknown as Response
    const mockNext = vi.fn()
    
    // Simulate error handling
    errorHandler(new Error('Test error'), mockReq, mockRes, mockNext)
    
    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith({
      jsonrpc: '2.0',
      error: expect.objectContaining({
        code: -32603,
        message: 'Internal server error'
      })
    })
  })
})
