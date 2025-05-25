import { Task, Artifact, TaskState } from '@dexwox/a2a-core';
import { TaskStore } from './task-store';

export class InMemoryTaskStore implements TaskStore {
  private tasks = new Map<string, Task>();
  private artifacts = new Map<string, Map<string, Artifact>>();

  async save(task: Task): Promise<void> {
    this.tasks.set(task.id, task);
  }

  async get(taskId: string): Promise<Task | null> {
    return this.tasks.get(taskId) || null;
  }

  async delete(taskId: string): Promise<void> {
    this.tasks.delete(taskId);
  }

  async list(filter?: Partial<Task>): Promise<Task[]> {
    const tasks = Array.from(this.tasks.values());
    if (!filter) return tasks;
    
    return tasks.filter(task => {
      return Object.entries(filter).every(([key, value]) => 
        task[key as keyof Task] === value
      );
    });
  }

  // TaskStore interface methods
  async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const newTask = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.tasks.set(newTask.id, newTask);
    return newTask;
  }

  async getTask(id: string): Promise<Task | null> {
    return this.tasks.get(id) || null;
  }

  async updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task> {
    const task = await this.getTask(id);
    if (!task) throw new Error('Task not found');
    const updatedTask = {
      ...task,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.tasks.set(id, updatedTask);
    return updatedTask;
  }

  async updateTaskStatus(id: string, status: TaskState): Promise<Task> {
    return this.updateTask(id, { status });
  }

  async cancelTask(id: string): Promise<void> {
    await this.updateTaskStatus(id, 'canceled');
  }

  // Artifact handling
  async addArtifact(taskId: string, artifact: Artifact): Promise<void> {
    if (!this.artifacts.has(taskId)) {
      this.artifacts.set(taskId, new Map());
    }
    this.artifacts.get(taskId)!.set(artifact.id, artifact);
  }

  async getArtifacts(taskId: string): Promise<Artifact[]> {
    return Array.from(this.artifacts.get(taskId)?.values() || []);
  }

  async getArtifact(taskId: string, artifactId: string): Promise<Artifact | null> {
    return this.artifacts.get(taskId)?.get(artifactId) || null;
  }

  async getTasksByStatus(statuses: TaskState[]): Promise<Task[]> {
    const tasks = Array.from(this.tasks.values());
    return tasks.filter(task => statuses.includes(task.status));
  }
}
