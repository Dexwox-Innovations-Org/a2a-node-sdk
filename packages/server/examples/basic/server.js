const { createServer } = require('@a2a-sdk/server');
const { json } = require('express');

const app = createServer({
  port: 3000,
  logger: true
});

// Basic request handler
app.post('/tasks', json(), (req, res) => {
  const { name, input } = req.body;
  
  if (!name || !input) {
    return res.status(400).json({ error: 'Invalid task format' });
  }

  // Process task
  const result = { 
    taskId: Date.now().toString(),
    status: 'completed',
    output: { processed: true }
  };

  res.json(result);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(() => {
  console.log('Server running on port 3000');
});
