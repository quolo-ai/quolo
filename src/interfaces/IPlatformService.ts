export interface IPlatformService {
  // General method signatures common across all platforms
  generateText(prompt: string, model: string): Promise<string>;
  // TODO: Other common functionalities like embeddings, translations, etc.
}