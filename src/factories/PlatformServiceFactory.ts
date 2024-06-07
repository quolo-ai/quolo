import { IPlatformService } from "../interfaces/IPlatformService";
import { OpenAIService } from "../services/platforms/OpenAIService";
import { AnthropicService } from "../services/platforms/AnthropicService";
// import { GoogleService } from "../services/platforms/GoogleService";
// import { CohereService } from "../services/platforms/CohereService";

export class PlatformServiceFactory {
  public static getService(platformName: string, apiKey: string): IPlatformService {
    switch (platformName.toLowerCase()) {
      case "openai":
        return new OpenAIService(apiKey);
      case "anthropic":
        return new AnthropicService(apiKey);
      // case "google":
      //   return new GoogleService(apiKey);
      // case "cohere":
      //   return new CohereService(apiKey);
      default:
        throw new Error("Unsupported platform: " + platformName);
    }
  }
}