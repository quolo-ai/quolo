import { CohereClient, CohereError, CohereTimeoutError } from 'cohere-ai';
import { IPlatformService } from "../../interfaces/IPlatformService";

export class CohereService implements IPlatformService {
  private cohere: CohereClient;

  constructor(private apiKey: string) {
    this.cohere = new CohereClient({
      token: apiKey,
    });
  }

  async getAvailableModels(): Promise<string[]> {
    return []; // not available in google
  }

  async generateText(prompt: string, model: string = 'command'): Promise<string> {
    try {
      const chat = await this.cohere.chat({
        model: model,
        message: prompt,
      });
      
      return chat.text;
    } catch (error) {
      if (error instanceof CohereTimeoutError) {
        console.log("Request timed out", error);
      } else if (error instanceof CohereError) {
        console.error('Failed to create completion with Cohere:', error.message);
      }
      throw error;
    }
  }

}
