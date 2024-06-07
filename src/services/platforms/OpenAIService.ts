import OpenAI from 'openai';
import { IPlatformService } from "../../interfaces/IPlatformService";

export class OpenAIService implements IPlatformService {
  private openai: OpenAI;

  constructor(private apiKey: string) {
    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  async getAvailableModels(): Promise<string[]> {
    try {
      const models = await this.openai.models.list();
      return models.data.map((model: any) => model.name);
    } catch (error) {
      console.error('Failed to retrieve models from OpenAI:', error);
      throw error;
    }
  }

  async generateText(prompt: string, model: string = 'text-davinci-002'): Promise<string> {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [{
          role: 'user',
          content: prompt
        }],
        model: model,
      });

      return completion.choices[0].message.content || '';
    } catch (error) {
        console.error('Failed to create completion with OpenAI:', error);
        throw error;
    }
  }

}
