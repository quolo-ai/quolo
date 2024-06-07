export interface ITextGeneration {
  generateText(prompt: string, model: string): Promise<string>;
}
