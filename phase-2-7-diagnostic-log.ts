/**
 * Phase 2.7 Type Integration Diagnostic Log
 * 
 * This file contains diagnostic logging to validate TaskStatus integration issues
 * identified in the Phase 2.7 Type System Integration Verification Plan.
 */

import { Task, TaskStatus } from '@dexwox-labs/a2a-core';

// Diagnostic function to validate TaskStatus format
export function validateTaskStatusFormat(task: any, location: string): void {
  console.log(`[PHASE-2.7-DIAGNOSTIC] Checking TaskStatus format at: ${location}`);
  
  if (!task || !task.status) {
    console.error(`[PHASE-2.7-ERROR] Missing task.status at ${location}:`, task);
    return;
  }

  // Check if status is string (legacy format)
  if (typeof task.status === 'string') {
    console.warn(`[PHASE-2.7-LEGACY] Found legacy string TaskStatus at ${location}:`, {
      taskId: task.id,
      status: task.status,
      type: typeof task.status
    });
    return;
  }

  // Check if status is enhanced object format
  if (typeof task.status === 'object' && task.status.state) {
    console.log(`[PHASE-2.7-ENHANCED] Found enhanced TaskStatus at ${location}:`, {
      taskId: task.id,
      state: task.status.state,
      timestamp: task.status.timestamp,
      hasMetadata: !!task.status.metadata
    });
    return;
  }

  // Unknown format
  console.error(`[PHASE-2.7-UNKNOWN] Unknown TaskStatus format at ${location}:`, {
    taskId: task.id,
    status: task.status,
    type: typeof task.status
  });
}

// Type guard to check if TaskStatus is enhanced format
export function isEnhancedTaskStatus(status: any): status is TaskStatus {
  return (
    typeof status === 'object' &&
    status !== null &&
    typeof status.state === 'string' &&
    typeof status.timestamp === 'string'
  );
}

// Migration utility to convert legacy string to enhanced format
export function migrateTaskStatus(status: string | TaskStatus): TaskStatus {
  if (typeof status === 'string') {
    console.warn(`[PHASE-2.7-MIGRATION] Converting legacy string status to enhanced format:`, status);
    return {
      state: status as any, // Cast to TaskState
      timestamp: new Date().toISOString(),
      metadata: {}
    };
  }
  return status;
}

// Diagnostic function to scan for mixed usage patterns
export function scanForMixedUsagePatterns(codeLocation: string, taskStatusAccess: string): void {
  console.log(`[PHASE-2.7-SCAN] Scanning for mixed usage patterns at ${codeLocation}`);
  
  // Check for legacy string comparison patterns
  const legacyPatterns = [
    /task\.status\s*[!=]==?\s*['"][^'"]*['"]/,
    /task\.status\s*!==?\s*['"][^'"]*['"]/,
    /task\.status\s*===?\s*['"][^'"]*['"]/
  ];

  // Check for enhanced object access patterns
  const enhancedPatterns = [
    /task\.status\.state/,
    /task\.status\.timestamp/,
    /task\.status\.metadata/
  ];

  const hasLegacyPattern = legacyPatterns.some(pattern => pattern.test(taskStatusAccess));
  const hasEnhancedPattern = enhancedPatterns.some(pattern => pattern.test(taskStatusAccess));

  if (hasLegacyPattern && hasEnhancedPattern) {
    console.error(`[PHASE-2.7-MIXED] Found mixed usage patterns at ${codeLocation}:`, taskStatusAccess);
  } else if (hasLegacyPattern) {
    console.warn(`[PHASE-2.7-LEGACY-USAGE] Found legacy usage pattern at ${codeLocation}:`, taskStatusAccess);
  } else if (hasEnhancedPattern) {
    console.log(`[PHASE-2.7-ENHANCED-USAGE] Found enhanced usage pattern at ${codeLocation}:`, taskStatusAccess);
  }
}

// Runtime validation for critical paths
export function validateCriticalPath(pathName: string, task: any): boolean {
  console.log(`[PHASE-2.7-CRITICAL] Validating critical path: ${pathName}`);
  
  try {
    validateTaskStatusFormat(task, pathName);
    
    if (!isEnhancedTaskStatus(task.status)) {
      console.error(`[PHASE-2.7-CRITICAL-FAIL] Critical path ${pathName} using non-enhanced TaskStatus`);
      return false;
    }
    
    console.log(`[PHASE-2.7-CRITICAL-PASS] Critical path ${pathName} validation passed`);
    return true;
  } catch (error) {
    console.error(`[PHASE-2.7-CRITICAL-ERROR] Critical path ${pathName} validation error:`, error);
    return false;
  }
}

// Summary report for Phase 2.7 diagnosis
export function generatePhase27DiagnosticReport(): void {
  console.log(`
=== PHASE 2.7 TYPE INTEGRATION DIAGNOSTIC REPORT ===

CRITICAL ISSUES IDENTIFIED:
1. Mixed TaskStatus usage patterns across codebase
2. Examples package using legacy string format
3. gRPC package has backward compatibility layer
4. Documentation shows legacy patterns

VALIDATION REQUIRED:
- Client package: task-client.ts, http-client.ts
- Server package: agent-executor.ts, request-handler.ts
- Examples package: basic-client/index.ts, full-stack/client.ts
- gRPC package: type-conversion.ts

NEXT STEPS:
1. Add diagnostic logging to critical paths
2. Update examples to use enhanced TaskStatus
3. Fix documentation to show enhanced patterns
4. Remove backward compatibility layer after migration
5. Add runtime validation for TaskStatus format

=== END DIAGNOSTIC REPORT ===
  `);
}