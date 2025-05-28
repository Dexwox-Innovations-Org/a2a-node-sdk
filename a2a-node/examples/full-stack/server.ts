/**
 * Full Stack Example - Server
 * 
 * This file implements the server side of the full stack example,
 * including agent registration and message handling.
 */

import { A2AServer, DefaultRequestHandler, AgentCard, MessagePart, Task, Artifact } from '@dexwox-labs/a2a-node';

// Define our agents
const calculatorAgent: AgentCard = {
  id: 'calculator',
  name: 'Calculator Agent',
  description: 'Performs mathematical calculations',
  version: '1.0.0',
  capabilities: ['basic-math', 'advanced-math'],
  endpoint: 'http://localhost:3000'
};

const echoAgent: AgentCard = {
  id: 'echo',
  name: 'Echo Agent',
  description: 'Repeats messages back to the user',
  version: '1.0.0',
  capabilities: ['echo'],
  endpoint: 'http://localhost:3000'
};

/**
 * Handle calculator agent requests
 */
async function handleCalculatorRequest(message: MessagePart[]): Promise<Artifact> {
  // Extract the expression from the message
  const expression = message
    .filter(part => part.type === 'text')
    .map(part => part.content)
    .join(' ')
    .replace(/calculate|compute|what is|solve/gi, '')
    .trim();
  
  console.log(`Calculating: ${expression}`);
  
  try {
    // SECURITY NOTE: In a real application, you would need to sanitize this input
    // to prevent code injection. This is just a simple example.
    // eslint-disable-next-line no-eval
    const result = eval(expression);
    
    return {
      id: `artifact-${Date.now()}`,
      type: 'text',
      content: {
        message: [
          {
            type: 'text',
            content: `The result of ${expression} is ${result}`,
            format: 'plain'
          }
        ]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Calculation error:', error);
    
    return {
      id: `artifact-${Date.now()}`,
      type: 'text',
      content: {
        message: [
          {
            type: 'text',
            content: `Sorry, I couldn't calculate "${expression}". Please check the syntax and try again.`,
            format: 'plain'
          }
        ]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}

/**
 * Handle echo agent requests
 */
async function handleEchoRequest(message: MessagePart[]): Promise<Artifact> {
  return {
    id: `artifact-${Date.now()}`,
    type: 'text',
    content: {
      message: [
        {
          type: 'text',
          content: `Echo: ${message
            .filter(part => part.type === 'text')
            .map(part => part.content)
            .join(' ')}`,
          format: 'plain'
        }
      ]
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

// Create a request handler for our agents
const requestHandler = new DefaultRequestHandler([calculatorAgent, echoAgent]);

// Override the handleSendMessage method to implement our custom logic
requestHandler.handleSendMessage = async (parts: MessagePart[], agentId: string): Promise<string> => {
  console.log(`Received message for agent: ${agentId}`);
  console.log('Message parts:', JSON.stringify(parts, null, 2));
  
  // Create a task ID
  const taskId = `task-${Date.now()}`;
  
  // Process the message based on the agent
  let artifact: Artifact;
  
  switch (agentId) {
    case 'calculator':
      artifact = await handleCalculatorRequest(parts);
      break;
    case 'echo':
      artifact = await handleEchoRequest(parts);
      break;
    default:
      artifact = {
        id: `artifact-${Date.now()}`,
        type: 'text',
        content: {
          message: [
            {
              type: 'text',
              content: `Agent ${agentId} not found or not supported.`,
              format: 'plain'
            }
          ]
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
  }
  
  // In a real implementation, we would store the task and its artifacts
  // For this example, we'll just return the task ID
  return taskId;
};

// Create the A2A server with the primary agent and request handler
const server = new A2AServer(calculatorAgent, requestHandler);

// Start the server
server.start(3000);
console.log('A2A Server is running on http://localhost:3000');
console.log('Registered agents:', ['calculator', 'echo']);
console.log('Press Ctrl+C to stop the server');
