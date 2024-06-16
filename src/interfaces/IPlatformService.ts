export interface IPlatformService {
  getAvailableModels(): Promise<string[]>;
  generateText(prompt: string, model: string): Promise<string>;
  generateEmbeddings(prompt: string[], model: string): Promise<number[]>;
  // TODO: Other common functionalities like embeddings, translations, etc.
}

