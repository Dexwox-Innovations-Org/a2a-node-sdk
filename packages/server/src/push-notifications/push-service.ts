import type { PushNotificationConfig } from '@dexwox/a2a-core';

export class PushNotificationService {
  async notifyStatusChange(taskId: string, status: string): Promise<void> {
    // Implementation goes here
  }
  private configStore = new Map<string, PushNotificationConfig>();

  async setConfig(taskId: string, config: PushNotificationConfig): Promise<void> {
    this.configStore.set(taskId, config);
  }

  async getConfig(taskId: string): Promise<PushNotificationConfig> {
    const config = this.configStore.get(taskId);
    if (!config) {
      throw { code: -32005, message: 'Push config not found' };
    }
    return config;
  }

  async notify(taskId: string, event: string, data: unknown): Promise<void> {
    const config = await this.getConfig(taskId);
    if (config.enabled && config.events.includes(event)) {
      // Implementation would send to configured endpoint
      console.log(`Sending ${event} notification for task ${taskId}`);
    }
  }
}
