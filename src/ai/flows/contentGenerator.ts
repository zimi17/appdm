
import { defineFlow } from 'genkit';
import { ai } from '../genkit';
import { z } from 'zod';

export const contentGeneratorFlow = defineFlow(
  {
    name: 'contentGeneratorFlow',
    inputSchema: z.object({ topic: z.string() }),
    outputSchema: z.string(),
  },
  async ({ topic }) => {
    const llmResponse = await ai.generate({
      prompt: `Generate a short article about ${topic}. The article should be suitable for a university website's news or blog section. Make it engaging and informative.`,
      model: 'googleai/gemini-2.0-flash',
    });

    return llmResponse.text();
  }
);
