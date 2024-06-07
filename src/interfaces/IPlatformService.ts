export interface IPlatformService {
  getAvailableModels(): Promise<string[]>;
  generateText(prompt: string, model: string): Promise<string>;
  // TODO: Other common functionalities like embeddings, translations, etc.
}