import axios from 'axios';

const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions';

export const getOpenAIResponse = async (prompt: string): Promise<any> => {
  const response = await axios.post(openaiEndpoint, {
    prompt,
    max_tokens: 100
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });
  return response.data;
};
