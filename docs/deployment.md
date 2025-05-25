# A2A Deployment Guide

This guide provides strategies and best practices for deploying A2A (Agent-to-Agent) applications to production environments.

## Deployment Options

### Docker Containers

Docker is the recommended way to deploy A2A applications:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

# Copy application code
COPY dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
```

Build and run the Docker image:

```bash
docker build -t my-a2a-app .
docker run -p 3000:3000 -e API_KEY=your-secret-key my-a2a-app
```

### Kubernetes

For scaling and high availability, deploy to Kubernetes:

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: a2a-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: a2a-server
  template:
    metadata:
      labels:
        app: a2a-server
    spec:
      containers:
      - name: a2a-server
        image: my-a2a-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: PORT
          value: "3000"
        - name: API_KEY
          valueFrom:
            secretKeyRef:
              name: a2a-secrets
              key: api-key
        resources:
          limits:
            cpu: "1"
            memory: "1Gi"
          requests:
            cpu: "500m"
            memory: "512Mi"
```

```yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: a2a-server
spec:
  selector:
    app: a2a-server
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

### Serverless

For serverless deployments (AWS Lambda, Google Cloud Functions, etc.):

```javascript
// AWS Lambda handler
import { A2AServer } from '@dexwox/a2a-node';
import serverless from 'serverless-http';

const agent = {
  id: 'my-agent',
  name: 'My Agent',
  description: 'A simple agent',
  version: '1.0.0',
  capabilities: ['text-processing'],
  endpoint: 'https://api.example.com/agent'
};

const server = new A2AServer(agent);
const handler = serverless(server.app);

export { handler };
```

## Scaling Strategies

### Horizontal Scaling

For high-traffic applications, implement horizontal scaling:

1. Use stateless server design
2. Store session data in external storage (Redis, MongoDB)
3. Use a load balancer to distribute traffic

### Vertical Scaling

For compute-intensive agents:

1. Use more powerful machines with higher CPU/memory
2. Optimize code for performance
3. Implement caching for expensive operations

## Database Considerations

### Connection Pooling

Use connection pooling for database operations:

```javascript
import { Pool } from 'pg';

const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function query(text, params) {
  const client = await pool.connect();
  try {
    return await client.query(text, params);
  } finally {
    client.release();
  }
}
```

### Database Migrations

Use a migration tool for database schema changes:

```javascript
// Using TypeORM migrations
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAgentsTable1621234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE agents (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        version VARCHAR(50),
        capabilities JSONB,
        endpoint VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE agents`);
  }
}
```

## Security Best Practices

### API Authentication

Implement proper authentication:

```javascript
import jwt from 'jsonwebtoken';

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Apply middleware to routes
app.use('/api', authenticate);
```

### Rate Limiting

Implement rate limiting to prevent abuse:

```javascript
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiting to all requests
app.use('/api/', apiLimiter);
```

### Environment Variables

Store sensitive information in environment variables:

```javascript
// .env file
DATABASE_URL=postgres://user:password@localhost:5432/mydb
JWT_SECRET=your-secret-key
API_KEY=your-api-key

// Loading environment variables
import dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;
```

## Monitoring and Logging

### Application Monitoring

Use monitoring tools to track application health:

```javascript
import { metrics } from '@dexwox/a2a-core';

// Record custom metrics
metrics.recordMetric('agent.requests', 1, { agentId: 'my-agent' });

// Monitor response times
metrics.recordTimer('api.response_time', startTime, endTime);
```

### Structured Logging

Implement structured logging:

```javascript
import { logger } from '@dexwox/a2a-core';

// Configure logger
logger.configure({
  level: process.env.LOG_LEVEL || 'info',
  format: 'json',
  destination: process.env.LOG_DESTINATION || 'stdout'
});

// Log with context
logger.info('Processing request', {
  requestId: req.id,
  userId: req.user?.id,
  path: req.path
});

// Log errors
logger.error('Request failed', {
  error: err.message,
  stack: err.stack,
  requestId: req.id
});
```

## CI/CD Pipeline

Set up a continuous integration/continuous deployment pipeline:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install -g pnpm && pnpm install
        
      - name: Run tests
        run: pnpm test
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        if: success()
        run: |
          # Deploy steps here
          echo "Deploying to production"
```

## Performance Optimization

### Caching

Implement caching for frequently accessed data:

```javascript
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

async function getAgentWithCache(agentId) {
  const cacheKey = `agent:${agentId}`;
  
  // Try to get from cache first
  const cachedAgent = cache.get(cacheKey);
  if (cachedAgent) {
    return cachedAgent;
  }
  
  // If not in cache, fetch from database
  const agent = await db.getAgent(agentId);
  
  // Store in cache for future requests
  cache.set(cacheKey, agent);
  
  return agent;
}
```

### Response Compression

Enable response compression:

```javascript
import compression from 'compression';
import express from 'express';

const app = express();

// Enable compression
app.use(compression());
```

## Disaster Recovery

### Backup Strategy

Implement regular backups:

```bash
#!/bin/bash
# backup.sh

# Set variables
DB_USER="dbuser"
DB_NAME="a2a_database"
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup
pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/backup_$DATE.sql

# Keep only the last 7 daily backups
find $BACKUP_DIR -name "backup_*.sql" -type f -mtime +7 -delete
```

### High Availability

For critical applications, implement high availability:

1. Deploy to multiple regions/zones
2. Use database replication
3. Implement automated failover
4. Set up health checks and auto-healing

## Conclusion

By following these deployment strategies, you can ensure that your A2A applications are robust, secure, and performant in production environments. Adapt these recommendations to your specific requirements and infrastructure.
