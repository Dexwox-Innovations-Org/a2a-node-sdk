import { EventQueue } from '../agent-execution/event-queue';
import { A2AError, ERROR_CODES } from '@dexwox/a2a-core';

/**
 * Interface for managing event queue lifecycles
 */
export interface QueueManager {
  /**
   * Add a new queue for a task
   * @throws {QueueExistsError} If queue already exists
   */
  add(taskId: string, queue: EventQueue): Promise<void>;

  /**
   * Get an existing queue
   * @returns {EventQueue | undefined} The queue or undefined if not found
   */
  get(taskId: string): Promise<EventQueue | undefined>;

  /**
   * Create a new queue or get existing one
   * @returns {EventQueue} The existing or newly created queue
   */
  createOrGet(taskId: string): Promise<EventQueue>;

  /**
   * Tap into an existing queue to create a new consumer
   * @returns {EventQueue} A new queue that receives copies of events
   * @throws {NoQueueError} If no queue exists for taskId
   */
  tap(taskId: string): Promise<EventQueue>;

  /**
   * Close and remove a queue
   */
  close(taskId: string): Promise<void>;

  /**
   * Get queue statistics
   */
  getStats(taskId: string): Promise<QueueStats>;
}

export interface QueueStats {
  size: number;
  consumers: number;
  processed: number;
  failed: number;
  lastActivity: Date;
  throughput: number;
  avgProcessingTime: number;
  errorRate: number;
}

export class QueueExistsError extends A2AError {
  constructor(taskId: string) {
    super(`Queue already exists for task ${taskId}`, ERROR_CODES.QUEUE_EXISTS);
  }
}

export class NoQueueError extends A2AError {
  constructor(taskId: string) {
    super(`No queue exists for task ${taskId}`, ERROR_CODES.NO_QUEUE);
  }
}
