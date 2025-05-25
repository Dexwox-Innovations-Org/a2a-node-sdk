// This file is maintained for backward compatibility
// New code should import from '../telemetry' directly

export { Trace, TraceClass } from '../telemetry/decorators';

// Re-export OpenTelemetry types for backward compatibility
export { SpanStatusCode } from '@opentelemetry/api';
