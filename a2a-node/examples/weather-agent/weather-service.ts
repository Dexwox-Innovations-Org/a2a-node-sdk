/**
 * Weather Service
 * 
 * This service provides weather data by calling a mock API.
 * In a real implementation, this would connect to a weather API provider.
 */

// Note: This is a mock implementation that returns random weather data.
// In a real implementation, you would use a package like axios to make HTTP requests to a weather API.
import { TraceClass } from '@dexwox-labs/a2a-node';

// Weather data interface
export interface WeatherData {
  location: string;
  temperature: {
    current: number;
    high: number;
    low: number;
  };
  conditions: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    conditions: string;
  }>;
}

@TraceClass()
export class WeatherService {
  private apiKey: string;
  
  constructor(apiKey: string = 'mock-api-key') {
    this.apiKey = apiKey;
  }
  
  /**
   * Get current weather for a location
   * 
   * Note: This is a mock implementation that returns random weather data.
   * In a real implementation, this would call a weather API.
   */
  async getCurrentWeather(location: string): Promise<WeatherData> {
    console.log(`Getting weather for ${location}`);
    
    // In a real implementation, we would call an actual weather API
    // For example:
    // const response = await axios.get(
    //   `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`
    // );
    
    // For this example, we'll generate mock data
    return this.generateMockWeatherData(location);
  }
  
  /**
   * Generate mock weather data for demonstration purposes
   */
  private generateMockWeatherData(location: string): WeatherData {
    const conditions = [
      'Sunny', 'Partly Cloudy', 'Cloudy', 'Overcast', 
      'Light Rain', 'Rain', 'Thunderstorms', 'Snow', 'Foggy'
    ];
    
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const currentTemp = Math.floor(Math.random() * 35) + 40; // 40-75°F
    const highTemp = currentTemp + Math.floor(Math.random() * 15); // 0-15° higher
    const lowTemp = currentTemp - Math.floor(Math.random() * 15); // 0-15° lower
    
    const forecast = [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    for (const day of days) {
      forecast.push({
        day,
        high: highTemp + Math.floor(Math.random() * 10) - 5, // -5 to +5 from high
        low: lowTemp + Math.floor(Math.random() * 10) - 5, // -5 to +5 from low
        conditions: conditions[Math.floor(Math.random() * conditions.length)]
      });
    }
    
    return {
      location,
      temperature: {
        current: currentTemp,
        high: highTemp,
        low: lowTemp
      },
      conditions: randomCondition,
      humidity: Math.floor(Math.random() * 60) + 30, // 30-90%
      windSpeed: Math.floor(Math.random() * 20), // 0-20 mph
      forecast
    };
  }
}
