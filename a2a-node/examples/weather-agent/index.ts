/**
 * Weather Agent Example
 * 
 * This example demonstrates how to build a weather agent using the A2A framework.
 * The agent handles weather-related queries and returns formatted responses.
 */

import { A2AServer, DefaultRequestHandler, AgentCard, MessagePart, Task, Artifact } from '@dexwox-labs/a2a-node';
import { WeatherService } from './weather-service';

// Create the weather service
const weatherService = new WeatherService();

// Define the weather agent
const weatherAgent: AgentCard = {
  id: 'weather-agent',
  name: 'Weather Agent',
  description: 'Provides current weather and forecasts for locations worldwide',
  version: '1.0.0',
  capabilities: ['weather-lookup', 'forecast'],
  endpoint: 'http://localhost:3000',
  metadata: {
    parameters: {
      apiKey: {
        type: 'string',
        description: 'API key for the weather service',
        required: false
      }
    }
  }
};

// Create a request handler with our weather agent
const requestHandler = new DefaultRequestHandler([weatherAgent]);

/**
 * Extract location from a message
 */
function extractLocation(message: MessagePart[]): string {
  // Get the text content from the message
  const textContent = message
    .filter(part => part.type === 'text')
    .map(part => part.content)
    .join(' ');
  
  console.log('Extracting location from:', textContent);
  
  // Try to extract location using pattern matching
  const locationPatterns = [
    /weather\s+(?:in|at|for)\s+([^?.,]+)/i,
    /forecast\s+(?:in|at|for)\s+([^?.,]+)/i,
    /(?:in|at)\s+([^?.,]+)/i,
    /(?:how's|what's|what is)\s+(?:the|)\s*weather\s+(?:like|)\s+(?:in|at|for)\s+([^?.,]+)/i
  ];
  
  for (const pattern of locationPatterns) {
    const match = textContent.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  
  // Default location if none found
  return 'New York';
}

/**
 * Format weather data into a response message
 */
function formatWeatherResponse(weatherData: any): MessagePart[] {
  const { location, temperature, conditions, humidity, windSpeed } = weatherData;
  
  return [
    {
      type: 'text',
      format: 'plain',
      content: `Current weather in ${location}:\n` +
        `Temperature: ${temperature.current}°F (High: ${temperature.high}°F, Low: ${temperature.low}°F)\n` +
        `Conditions: ${conditions}\n` +
        `Humidity: ${humidity}%\n` +
        `Wind Speed: ${windSpeed} mph`
    }
  ];
}

/**
 * Format forecast data into a response message
 */
function formatForecastResponse(weatherData: any): MessagePart[] {
  const { location, forecast } = weatherData;
  
  let forecastText = `5-day forecast for ${location}:\n\n`;
  
  forecast.forEach((day: any) => {
    forecastText += `${day.day}: ${day.conditions}, High: ${day.high}°F, Low: ${day.low}°F\n`;
  });
  
  return [
    {
      type: 'text',
      format: 'plain',
      content: forecastText
    }
  ];
}

/**
 * Process a weather-related message and generate a response
 */
async function processWeatherMessage(message: MessagePart[]): Promise<Artifact> {
  try {
    // Extract location from the message
    const location = extractLocation(message);
    console.log(`Extracted location: ${location}`);
    
    // Get weather data
    const weatherData = await weatherService.getCurrentWeather(location);
    
    // Check if this is a forecast request
    const isForecastRequest = message
      .filter(part => part.type === 'text')
      .some(part => part.content.toLowerCase().includes('forecast'));
    
    // Format the response based on request type
    const response = isForecastRequest
      ? formatForecastResponse(weatherData)
      : formatWeatherResponse(weatherData);
    
    // Return the response as an artifact
    return {
      id: `weather-response-${Date.now()}`,
      type: 'text',
      content: response,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error processing weather message:', error);
    
    // Return an error message
    return {
      id: `weather-error-${Date.now()}`,
      type: 'text',
      content: [
        {
          type: 'text',
          format: 'plain',
          content: 'Sorry, I was unable to retrieve the weather information. Please try again later.'
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}

// Create a custom message handler for the weather agent
requestHandler.handleSendMessage = async (parts: MessagePart[], agentId: string): Promise<string> => {
  console.log(`Received message for agent: ${agentId}`);
  console.log('Message parts:', JSON.stringify(parts, null, 2));
  
  // Create a task ID
  const taskId = `task-${Date.now()}`;
  
  if (agentId === weatherAgent.id) {
    // Process the message and return an artifact
    const artifact = await processWeatherMessage(parts);
    
    // In a real implementation, we would store the task and its artifacts
    console.log('Generated response:', artifact);
  }
  
  return taskId;
};

// Create the A2A server
const server = new A2AServer(weatherAgent, requestHandler);

// Start the server
server.start(3000);
console.log('Weather Agent Server is running on http://localhost:3000');
console.log(`Agent "${weatherAgent.name}" is registered and ready to handle requests`);
console.log('Press Ctrl+C to stop the server');
