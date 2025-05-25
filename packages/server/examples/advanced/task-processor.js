const { createServer, TaskQueue } = require('@a2a-sdk/server');

const app = createServer({
  port: 3000,
  logger: true,
  taskProcessing: {
    concurrency: 5,
    timeout: 30000
  }
});

// Create task queue
const taskQueue = new TaskQueue({
  maxRetries: 3,
  retryDelay: 1000
});

// Process tasks from queue
taskQueue.process(async (task) => {
  console.log('Processing task:', task.id);
  
  // Simulate work
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    status: 'completed',
    output: { result: 'success' }
  };
});

// Broadcast messages periodically
setInterval(() => {
  app.broadcast({
    type: 'heartbeat',
    timestamp: Date.now()
  });
}, 5000);

// Start server
app.listen(() => {
  console.log('Advanced server running on port 3000');
  console.log('Task queue processor started');
});
