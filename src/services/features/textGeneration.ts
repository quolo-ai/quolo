import { ITextGeneration } from "../../interfaces/ITextGeneration";

export const textGeneration = async (platformService: ITextGeneration, prompt: string, model: string): Promise<string> => {
  return platformService.generateText(prompt, model);
}