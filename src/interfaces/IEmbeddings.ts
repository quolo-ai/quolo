export interface IEmbeddings {
  generateEmbeddings(prompt: string[], model: string): Promise<number[]>;
}
