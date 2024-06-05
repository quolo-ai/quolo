import { getOpenAIResponse } from '../../src/services/openaiService';

test('getOpenAIResponse should return response data', async () => {
  const prompt = 'Hello';
  const response = await getOpenAIResponse(prompt);
  expect(response).toBeDefined();
});