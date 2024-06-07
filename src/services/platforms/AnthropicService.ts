import Anthropic from '@anthropic-ai/sdk';
import { IPlatformService } from "../../interfaces/IPlatformService";

export class AnthropicService implements IPlatformService {
  private anthropic: Anthropic;

  constructor(private apiKey: string) {
    this.anthropic = new Anthropic({
      apiKey: apiKey
    });
  }

  async getAvailableModels(): Promise<string[]> {
    return []; // not available in anthropic
  }

  async generateText(prompt: string, model: string = 'claude-3-haiku-20240307'): Promise<string> {
    try {
      const message = await this.anthropic.messages.create({
        model: model,
        max_tokens: 4096, // may want to change this to an input param
        messages: [{
          role: 'user',
          content: prompt
        }],
      });

      return (message.content[0] as any).text || '';
    } catch (error) {
        console.error('Failed to create completion with Anthropic:', error);
        throw error;
    }
  }

}
