/**
 * A2A Examples Index
 * 
 * This file provides an overview of the examples and exports common utilities.
 */

// Re-export core components for convenience
export * from '@dexwox-labs/a2a-core';
export * from '@dexwox-labs/a2a-client';
export * from '@dexwox-labs/a2a-server';

/**
 * Example metadata for documentation purposes
 */
export const examples = {
  basicClient: {
    name: 'Basic Client',
    description: 'Simple example of using the A2A client',
    path: './basic-client'
  },
  basicServer: {
    name: 'Basic Server',
    description: 'Example of setting up a minimal A2A server',
    path: './basic-server'
  },
  weatherAgent: {
    name: 'Weather Agent',
    description: 'Implementation of a simple weather agent',
    path: './weather-agent'
  },
  fullStack: {
    name: 'Full Stack Example',
    description: 'Complete example showing client, server, and agent integration',
    path: './full-stack'
  }
};

/**
 * Helper function to run an example
 */
export function runExample(exampleName: keyof typeof examples) {
  const example = examples[exampleName];
  if (!example) {
    console.error(`Example "${exampleName}" not found`);
    console.log('Available examples:');
    Object.keys(examples).forEach(name => {
      console.log(`- ${name}`);
    });
    return;
  }

  console.log(`Running example: ${example.name}`);
  console.log(example.description);
  console.log(`Path: ${example.path}`);
  
  // In a real implementation, this would dynamically load and run the example
  console.log('To run this example, navigate to the example directory and follow the README instructions.');
}

// If this file is run directly, show usage information
if (require.main === module) {
  console.log('A2A Examples');
  console.log('============');
  console.log('This package contains examples of using the A2A platform with @dexwox packages.');
  console.log('\nAvailable examples:');
  
  Object.entries(examples).forEach(([key, example]) => {
    console.log(`- ${example.name} (${key}): ${example.description}`);
  });
  
  console.log('\nTo run an example, navigate to its directory and follow the README instructions.');
}
