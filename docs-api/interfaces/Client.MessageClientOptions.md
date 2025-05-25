[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Client](../modules/Client.md) / MessageClientOptions

# Interface: MessageClientOptions

[Client](../modules/Client.md).MessageClientOptions

Configuration options for the MessageClient

This interface defines how the MessageClient should connect to and
authenticate with an A2A server, including base URL, headers, timeout,
and authentication details.

**`Example`**

```typescript
// Basic configuration
const basicOptions: MessageClientOptions = {
  baseUrl: 'https://a2a-server.example.com'
};

// With bearer token authentication
const authOptions: MessageClientOptions = {
  baseUrl: 'https://a2a-server.example.com',
  timeout: 10000,
  auth: {
    type: 'bearer',
    credentials: {
      token: 'your-bearer-token'
    }
  }
};
```

## Table of contents

### Properties

- [auth](Client.MessageClientOptions.md#auth)
- [baseUrl](Client.MessageClientOptions.md#baseurl)
- [headers](Client.MessageClientOptions.md#headers)
- [timeout](Client.MessageClientOptions.md#timeout)

## Properties

### auth

• `Optional` **auth**: `Object`

Authentication configuration

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials` | \{ `apiKey?`: `string` ; `headerName?`: `string` ; `headerValue?`: `string` ; `password?`: `string` ; `token?`: `string` ; `username?`: `string`  } | Authentication credentials based on the selected type |
| `credentials.apiKey?` | `string` | API key for apiKey authentication |
| `credentials.headerName?` | `string` | Custom header name for custom authentication |
| `credentials.headerValue?` | `string` | Custom header value for custom authentication |
| `credentials.password?` | `string` | Password for basic authentication |
| `credentials.token?` | `string` | Token for bearer authentication |
| `credentials.username?` | `string` | Username for basic authentication |
| `type` | ``"custom"`` \| ``"basic"`` \| ``"bearer"`` \| ``"apiKey"`` | Authentication type |

___

### baseUrl

• **baseUrl**: `string`

Base URL for the A2A server

___

### headers

• `Optional` **headers**: `Record`\<`string`, `string`\>

Additional HTTP headers to include with every request

___

### timeout

• `Optional` **timeout**: `number`

Request timeout in milliseconds (default: 5000)
