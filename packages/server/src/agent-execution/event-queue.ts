import { EventEmitter } from 'node:events';
import type { Task, Artifact } from '@dexwox/a2a-core';

interface EventQueueEvents {
  event: [TaskEvent];
}

type TaskEvent = {
  type: 'taskCreated' | 'taskUpdated' | 'taskCompleted' | 'taskFailed' | 'taskCanceled' | 'taskInputRequired' | 'artifactAdded' | 'taskStatusUpdate' | 'taskArtifactUpdate';
  task: Task;
  timestamp: number;
  previousState?: string;
  artifact?: Artifact;
};

export class EventQueue {
  private readonly emitter = new EventEmitter<EventQueueEvents>();
  private readonly history: TaskEvent[] = [];
  private readonly maxHistory = 1000;
  private readonly children: EventQueue[] = [];
  private isShutdown = false;

  publish(event: TaskEvent): void {
    if (this.isShutdown) {
      throw new Error('EventQueue has been shutdown');
    }
    // Add to history and enforce size limit
    this.history.push(event);
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }
    this.emitter.emit('event', event);
    // Propagate to child queues
    this.children.forEach(child => child.publish(event));
  }

  subscribe(callback: (event: TaskEvent) => void): () => void {
    // Send historical events first
    this.history.forEach(event => callback(event));
    // Subscribe to new events
    this.emitter.on('event', callback);
    return () => this.emitter.off('event', callback);
  }

  tap(): EventQueue {
    const child = new EventQueue();
    this.children.push(child);
    return child;
  }

  close(): void {
    this.isShutdown = true;
    this.children.forEach(child => child.close());
    this.emitter.removeAllListeners();
  }

  getHistory(): TaskEvent[] {
    return [...this.history];
  }

  async dequeue(): Promise<TaskEvent | undefined> {
    if (this.isShutdown) {
      return undefined;
    }

    return new Promise(resolve => {
      const unsubscribe = this.subscribe(event => {
        unsubscribe();
        resolve(event);
      });
    });
  }
}
