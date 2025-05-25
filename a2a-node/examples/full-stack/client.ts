/**
 * Full Stack Example - Client
 * 
 * This file implements the client side of the full stack example,
 * providing an interactive CLI to communicate with the A2A server.
 */

import * as readline from 'readline';
import { AgentClient, MessageClient, TaskClient, MessagePart } from '@dexwox/a2a-node';

// Server configuration
const SERVER_URL = 'http://localhost:3000';

// Initialize clients
const agentClient = new AgentClient({ baseUrl: SERVER_URL });
const messageClient = new MessageClient({ baseUrl: SERVER_URL });
const taskClient = new TaskClient({ baseUrl: SERVER_URL });

// Create readline interface for CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Display available agents
 */
async function displayAgents() {
  try {
    const agents = await agentClient.resolveAgents();
    console.log('\nAvailable agents:');
    agents.forEach(agent => {
      console.log(`- ${agent.name} (${agent.id}): ${agent.description}`);
    });
    console.log('');
  } catch (error) {
    console.error('Error fetching agents:', error);
  }
}

/**
 * Send a message to an agent and wait for the response
 */
async function sendMessage(agentId: string, message: string) {
  try {
    console.log(`Sending message to ${agentId}...`);
    
    // Create message parts
    const messageParts: MessagePart[] = [
      {
        type: 'text',
        content: message,
        format: 'plain'
      }
    ];
    
    // Send the message
    const taskId = await messageClient.sendMessage(messageParts, agentId);
    
    console.log(`Message sent! Task ID: ${taskId}`);
    
    // Poll for the task result
    let task = await taskClient.getTaskStatus(taskId);
    console.log(`Initial task status: ${task.status}`);
    
    // Wait for the task to complete
    while (task.status !== 'completed' && task.status !== 'failed') {
      process.stdout.write('.');
      await new Promise(resolve => setTimeout(resolve, 500));
      task = await taskClient.getTaskStatus(taskId);
    }
    
    console.log('\n');
    
    // Process the response
    if (task.status === 'completed' && task.artifacts) {
      task.artifacts.forEach(artifact => {
        if (artifact.type === 'text' && artifact.content.message) {
          const messageParts = artifact.content.message as MessagePart[];
          messageParts.forEach(part => {
            if (part.type === 'text') {
              console.log(`${agentId}: ${part.content}`);
            }
          });
        }
      });
    } else {
      console.error('Task failed:', task.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * Main CLI loop
 */
async function startCLI() {
  console.log('A2A Interactive Client');
  console.log('======================');
  console.log('Type "agents" to list available agents');
  console.log('Type "exit" to quit');
  console.log('To send a message, use: <agent-id>: <message>');
  console.log('Example: calculator: 2 + 2');
  
  await displayAgents();
  
  rl.prompt();
  
  rl.on('line', async (input) => {
    const trimmedInput = input.trim();
    
    if (trimmedInput === 'exit') {
      console.log('Goodbye!');
      rl.close();
      process.exit(0);
    } else if (trimmedInput === 'agents') {
      await displayAgents();
    } else {
      // Parse agent ID and message
      const match = trimmedInput.match(/^([a-zA-Z0-9-_]+):\s*(.+)$/);
      
      if (match) {
        const [, agentId, message] = match;
        await sendMessage(agentId, message);
      } else {
        console.log('Invalid format. Use: <agent-id>: <message>');
      }
    }
    
    rl.prompt();
  });
}

// Start the CLI
startCLI().catch(error => {
  console.error('Error starting CLI:', error);
});
