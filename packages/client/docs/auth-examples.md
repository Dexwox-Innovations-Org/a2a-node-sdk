# Authentication Examples

## API Key Authentication
```typescript
const client = new MessageClient({
  baseUrl: 'https://api.example.com',
  headers: {
    'X-API-Key': 'your-api-key-here'
  }
});
```

## JWT Authentication
```typescript
const client = new MessageClient({
  baseUrl: 'https://api.example.com',
  headers: {
    'Authorization': `Bearer ${jwtToken}`
  }
});
```

## OAuth 2.0
```typescript
// Using an OAuth library to get tokens
import { getOAuthToken } from 'oauth-library';

const token = await getOAuthToken();
const client = new MessageClient({
  baseUrl: 'https://api.example.com',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## Custom Auth Providers
```typescript
// Example with AWS SigV4
import { SignatureV4 } from '@aws-sdk/signature-v4';

const signer = new SignatureV4({/* config */});
const signed = await signer.sign(request);

const client = new MessageClient({
  baseUrl: 'https://api.example.com',
  headers: signed.headers
});
