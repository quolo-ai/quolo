import OpenAI from 'openai';
import { IPlatformService } from "../../interfaces/IPlatformService";

export class OpenAIService implements IPlatformService {
  constructor(private apiKey: string) {}

  async generateText(prompt: string, model: string = 'text-davinci-002'): Promise<string> {
    // OpenAI API interaction logic
    return "Generated text from OpenAI";
  }
}

/*
export class OpenAIService {
  private openai: OpenAI;

  constructor(apiKey: string) {
      const openai = new OpenAI({
          apiKey: apiKey
      });
      this.openai = openai;
  }

  async createCompletion(prompt: string, model: string = 'text-davinci-002', maxTokens: number = 150): Promise<string> {
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
*/