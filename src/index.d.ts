declare module 'quolo' {
  export class Quolo {
    constructor(platformName: string, apiKey: string)
    generateText(prompt: string, model: string): Promise<string>
    generateEmbeddings(prompt: string[], model: string): Promise<number[]>
  }
}
