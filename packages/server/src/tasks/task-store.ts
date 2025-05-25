import { Task, Artifact, TaskState } from '@dexwox/a2a-core';

export interface TaskStore {
  createTask(task: Omit<Task, 'id'>): Promise<Task>;
  getTask(id: string): Promise<Task | null>;
  updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task>;
  updateTaskStatus(id: string, status: TaskState): Promise<Task>;
  cancelTask(id: string): Promise<void>;
  
  // Artifact handling
  addArtifact(taskId: string, artifact: Artifact): Promise<void>;
  getArtifacts(taskId: string): Promise<Artifact[]>;
  getArtifact(taskId: string, artifactId: string): Promise<Artifact | null>;
  getTasksByStatus(statuses: TaskState[]): Promise<Task[]>;
}
