import { EventQueue } from '../agent-execution/event-queue';
import { QueueManager, QueueStats, QueueExistsError, NoQueueError } from './queue-manager';

export class InMemoryQueueManager implements QueueManager {
  private readonly queues = new Map<string, EventQueue>();
  private readonly stats = new Map<string, QueueStats>();

  async add(taskId: string, queue: EventQueue): Promise<void> {
    if (this.queues.has(taskId)) {
      throw new QueueExistsError(taskId);
    }
    this.queues.set(taskId, queue);
    this.initStats(taskId);
  }

  async get(taskId: string): Promise<EventQueue | undefined> {
    return this.queues.get(taskId);
  }

  async createOrGet(taskId: string): Promise<EventQueue> {
    let queue = this.queues.get(taskId);
    if (!queue) {
      queue = new EventQueue();
      this.queues.set(taskId, queue);
      this.initStats(taskId);
    }
    return queue;
  }

  async tap(taskId: string): Promise<EventQueue> {
    const queue = this.queues.get(taskId);
    if (!queue) {
      throw new NoQueueError(taskId);
    }
    return queue.tap();
  }

  close(taskId: string): Promise<void> {
    const queue = this.queues.get(taskId);
    if (queue) {
      queue.close();
      this.queues.delete(taskId);
      this.stats.delete(taskId);
    }
    return Promise.resolve();
  }

  async getStats(taskId: string): Promise<QueueStats> {
    const stats = this.stats.get(taskId);
    if (!stats) {
      throw new NoQueueError(taskId);
    }
    return stats;
  }

  private initStats(taskId: string): void {
    this.stats.set(taskId, {
      size: 0,
      consumers: 0,
      processed: 0,
      failed: 0,
      lastActivity: new Date(),
      throughput: 0,
      avgProcessingTime: 0,
      errorRate: 0
    });
  }

  async updateStats(taskId: string, updates: Partial<QueueStats>): Promise<void> {
    const stats = this.stats.get(taskId);
    if (stats) {
      Object.assign(stats, updates);
      stats.lastActivity = new Date();
    }
  }
}
