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
    return []; // not available in cohere
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

  async generateEmbeddings(input: string[], model: string = 'embed-multilingual-v3.0'): Promise<number[]> {
    try {
      const embeddings = await this.cohere.embed({
        model: model,
        texts: input,
        embeddingTypes: ['float']
      });
      // return embeddings.embeddings.float;
      if ('float' in embeddings.embeddings && embeddings.embeddings.float) {
        return embeddings.embeddings.float[0];
      } else {
        throw new Error("Embedding type 'float' is not available.");
      }
    } catch (error) {
      console.error('Failed to create embeddings with Cohere:', error);
      throw error;
    }
  }

}
