import { IPlatformService } from "./interfaces/IPlatformService";
import { PlatformServiceFactory } from "./factories/PlatformServiceFactory";
import { ITextGeneration } from "./interfaces/ITextGeneration";
import { IEmbeddings } from "./interfaces/IEmbeddings";

export class Quolo {
  private platformService!: IPlatformService;

  constructor(platformName: string, apiKey: string) {
    this.setPlatform(platformName, apiKey);
  }

  private setPlatform(platformName: string, apiKey: string): void {
    this.platformService = PlatformServiceFactory.getService(platformName, apiKey);
  }

  async generateText(prompt: string, model: string): Promise<string> {
    if (!this.platformService) {
      throw new Error("Platform service is not initialized.");
    }
    if (!('generateText' in this.platformService)) {
      throw new Error("Text generation is not supported by the initialized platform.");
    }
    return (this.platformService as ITextGeneration).generateText(prompt, model);
  }

  async generateEmbeddings(prompt: string[], model: string): Promise<number[]> {
    if (!this.platformService) {
      throw new Error("Platform service is not initialized.");
    }
    if (!('generateEmbeddings' in this.platformService)) {
      throw new Error("Embeddings generation is not supported by the initialized platform.");
    }
    return (this.platformService as IEmbeddings).generateEmbeddings(prompt, model);
  }
}

