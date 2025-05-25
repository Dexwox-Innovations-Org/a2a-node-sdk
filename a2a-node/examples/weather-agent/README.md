# Weather Agent Example for A2A Protocol

This example demonstrates how to build a weather agent that implements the Agent-to-Agent (A2A) protocol. The agent handles weather-related queries and returns formatted responses with current weather conditions and forecasts.

Developed by [Dexwox Innovations Pvt Ltd](https://dexwox.com), this example showcases a practical implementation of an intelligent agent using the A2A protocol, providing a template for building domain-specific agents.

## Features

- Custom agent implementation compatible with the A2A protocol
- Location extraction from natural language queries
- Weather data retrieval (mocked for demonstration)
- Formatted responses for current weather and forecasts
- Error handling

## Prerequisites

- Node.js 18 or higher
- npm or pnpm

## Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

## Running the Example

```bash
# Start the weather agent server
npm start
# or
pnpm start
```

## Code Overview

The example demonstrates:

1. **Agent Definition**: Creating an AgentCard for the weather agent
2. **Service Implementation**: Building a weather service to fetch data
3. **Message Processing**: Extracting locations and determining request type
4. **Response Formatting**: Creating structured responses for different query types
5. **Server Integration**: Connecting the agent to the A2A server

## Example Queries

You can test the weather agent with queries like:

- "What's the weather like in San Francisco?"
- "How's the weather in Tokyo today?"
- "Give me the forecast for London"
- "Will it rain in Seattle this week?"

## Extending the Example

This example uses mock weather data. To connect to a real weather API:

1. Sign up for a weather API service (like OpenWeatherMap, WeatherAPI, etc.)
2. Update the `WeatherService` class to make real API calls
3. Add proper error handling for API rate limits and failures

## Project Structure

- `index.ts`: Main server and agent implementation
- `weather-service.ts`: Service for retrieving weather data

## Next Steps

- Add more sophisticated natural language processing
- Implement caching for weather data
- Add support for more query types (hourly forecasts, historical data)
- Create a client application to interact with the agent
