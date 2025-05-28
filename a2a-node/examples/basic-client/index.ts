/**
 * Basic A2A Client Example
 * 
 * This example demonstrates how to use the A2A client to:
 * 1. Connect to an A2A server
 * 2. Send a message to an agent
 * 3. Receive and process the response
 */

import { AgentClient, MessageClient, TaskClient, MessagePart, AgentCard } from '@dexwox-labs/a2a-node';

// Define the server URL
const SERVER_URL = 'http://localhost:3000';

// Example agent card
const weatherAgent: AgentCard = {
  id: 'weather-agent',
  name: 'Weather Agent',
  description: 'Provides weather information',
  version: '1.0.0',
  capabilities: ['weather-lookup'],
  endpoint: `${SERVER_URL}/agents/weather-agent`
};

/**
 * Send a message to the weather agent
 */
async function sendMessageToAgent() {
  try {
    // Initialize the agent client
    const agentClient = new AgentClient({
      baseUrl: SERVER_URL
    });

    // Initialize the message client
    const messageClient = new MessageClient({
      baseUrl: SERVER_URL
    });

    // Initialize the task client
    const taskClient = new TaskClient({
      baseUrl: SERVER_URL
    });

    // Check if the agent is available
    const availableAgents = await agentClient.resolveAgents();
    console.log('Available agents:', availableAgents);

    // Create a message to send to the agent
    const message: MessagePart[] = [
      {
        type: 'text',
        content: 'What is the weather like in San Francisco today?',
        format: 'plain'
      }
    ];

    // Send the message to the agent
    console.log(`Sending message to ${weatherAgent.name}...`);
    const taskId = await messageClient.sendMessage(message, weatherAgent.id);

    console.log(`Message sent! Task ID: ${taskId}`);

    // Poll for the task result
    let task = await taskClient.getTaskStatus(taskId);
    console.log(`Initial task status: ${task.status}`);

    // Wait for the task to complete
    while (task.status !== 'completed' && task.status !== 'failed') {
      console.log(`Waiting for response... Current status: ${task.status}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      task = await taskClient.getTaskStatus(taskId);
    }

    // Process the response
    if (task.status === 'completed') {
      console.log('Response received:');
      if (task.artifacts) {
        task.artifacts.forEach(artifact => {
          if (artifact.type === 'text') {
            const messageParts = artifact.content as MessagePart[];
            messageParts.forEach(part => {
              if (part.type === 'text') {
                console.log(`Agent: ${part.content}`);
              }
            });
          }
        });
      }
    } else {
      console.error('Task failed:', task.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
sendMessageToAgent().catch(console.error);
