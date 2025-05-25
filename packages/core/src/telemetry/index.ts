export * from './config';
export * from './service';
export * from './decorators';

// Re-export OpenTelemetry types for convenience
export {
  context,
  trace,
  metrics,
  type Span,
  type Context,
  type Attributes,
  type SpanOptions,
  type SpanContext,
  type SpanStatus,
  type SpanStatusCode,
} from '@opentelemetry/api';
