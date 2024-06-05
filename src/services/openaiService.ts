import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getOpenAIResponse = async (prompt: string): Promise<any> => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{
        role: 'user',
        content: prompt
      }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data from OpenAI:', error.message);
      throw new Error('Failed to fetch response from OpenAI');
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export const getOpenAIEngines = async (): Promise<any> => {
  try {
    const response = await openai.listEngines();
    return response.data;
  } catch (error) {
    console.error('Error fetching OpenAI engines:', error.message);
    throw new Error('Failed to fetch OpenAI engines');
  }
};

// TODO: Train the model wth input data
