/**
 * Basic A2A Server Example
 * 
 * This example demonstrates how to set up a basic A2A server that:
 * 1. Registers an agent
 * 2. Handles incoming messages
 * 3. Processes tasks
 */

import { A2AServer, DefaultRequestHandler, AgentCard, MessagePart } from '@dexwox-labs/a2a-node';

// Define a simple weather agent
const weatherAgent: AgentCard = {
  id: 'weather-agent',
  name: 'Weather Agent',
  description: 'Provides weather information',
  version: '1.0.0',
  capabilities: ['weather-lookup'],
  endpoint: 'http://localhost:3000' // Required by AgentCard type
};

// Create a request handler with our weather agent
const requestHandler = new DefaultRequestHandler([weatherAgent]);

// Create a custom message handler
requestHandler.handleSendMessage = async (parts: MessagePart[], agentId: string): Promise<string> => {
  console.log('Received message for agent:', agentId);
  console.log('Message parts:', parts);
  
  // Create a task ID
  const taskId = `task-${Date.now()}`;
  
  // Extract the message content
  const textContent = parts
    .filter((part: MessagePart) => part.type === 'text')
    .map((part: MessagePart) => part.content)
    .join(' ');
  
  console.log('Processing message:', textContent);
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate a mock weather response based on the message
  let response: MessagePart[] = [];
  
  if (textContent.toLowerCase().includes('weather')) {
    // Extract location from the message
    let location = 'unknown location';
    const locationMatch = textContent.match(/weather\s+(?:in|at|for)\s+([^?.,]+)/i);
    
    if (locationMatch && locationMatch[1]) {
      location = locationMatch[1].trim();
    }
    
    // Generate a random weather response
    const conditions = ['sunny', 'cloudy', 'rainy', 'partly cloudy', 'clear'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomHigh = Math.floor(Math.random() * 30) + 60; // 60-90°F
    const randomLow = randomHigh - Math.floor(Math.random() * 20) - 5; // 5-25°F lower
    
    response = [
      {
        type: 'text',
        content: `The weather in ${location} is currently ${randomCondition} with a high of ${randomHigh}°F and a low of ${randomLow}°F.`,
        format: 'plain'
      }
    ];
  } else {
    // Default response for non-weather queries
    response = [
      {
        type: 'text',
        content: "I'm a weather agent. You can ask me about the weather in a specific location.",
        format: 'plain'
      }
    ];
  }
  
  console.log('Sending response:', response);
  
  // In a real implementation, we would store the task and its artifacts in a database
  // For this example, we'll just simulate a successful response
  
  // Return the task ID
  return taskId;
};

// Create the A2A server
const server = new A2AServer(weatherAgent, requestHandler);

// Start the server
server.start(3000);
console.log('A2A Server is running on http://localhost:3000');
console.log('Registered agents:', [weatherAgent.id]);
console.log('Press Ctrl+C to stop the server');
