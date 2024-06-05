# Quolo

Quolo is an open-source project integrating large language models with a role-based permissions model.

## Getting Started

### Installation

Install the package via npm:

```sh
npm install quolo
```

### Usage

#### OpenAI Service

First, set your OpenAI API key in your environment variables:

```sh
OPENAI_API_KEY='your-openai-api-key'
```

Then, use the library in your project:

```typescript
import { getOpenAIResponse, getOpenAIEngines } from 'quolo';

const main = async () => {
  const prompt = 'Hello, how are you?';
  const response = await getOpenAIResponse(prompt);
  console.log('Response from OpenAI:', response);

  const engines = await getOpenAIEngines();
  console.log('Available OpenAI engines:', engines);
};

main();
```

### Running Tests

```sh
npm test
```

## Credits

This project was developed with contributions from the following individuals and organizations:

- [Adaca](https://www.adaca.com)

Special thanks to the open-source community and the following projects:

- [Express](https://expressjs.com)
- [TypeScript](https://www.typescriptlang.org)
- [OpenAI](https://www.openai.com)
- [Anthropic](https://www.anthropic.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

