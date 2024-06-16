import { IEmbeddings } from "../../interfaces/IEmbeddings";

export const embeddings = async (platformService: IEmbeddings, prompt: string[], model: string): Promise<number[]> => {
  return platformService.generateEmbeddings(prompt, model);
}

