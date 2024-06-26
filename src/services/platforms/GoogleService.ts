import { GoogleGenerativeAI } from '@google/generative-ai';
import { IPlatformService } from "../../interfaces/IPlatformService";

export class GoogleService implements IPlatformService {
  private google: GoogleGenerativeAI;

  constructor(private apiKey: string) {
    this.google = new GoogleGenerativeAI(apiKey);
  }

  async getAvailableModels(): Promise<string[]> {
    return []; // not available in google
  }

  async generateText(prompt: string, model: string = 'gemini-1.5-flash'): Promise<string> {
    try {
      const genModel = this.google.getGenerativeModel({ model: model });

      const result = await genModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error('Failed to create completion with Google:', error);
      throw error;
    }
  }

  async generateEmbeddings(prompt: string[], model: string = 'text-embedding-004'): Promise<number[]> {
    try {
      const genModel = this.google.getGenerativeModel({ model: model });

      const embeddings = await genModel.embedContent(prompt[0]);

      return embeddings.embedding.values;
    } catch (error) {
      console.error('Failed to create embeddings with Google:', error);
      throw error;
    }
  }

}
