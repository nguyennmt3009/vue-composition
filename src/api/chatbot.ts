import { Configuration, OpenAIApi } from "openai";

export async function getChatbot(message: string) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  configuration.baseOptions.headers['User-Agent'] = null;

  const openai = new OpenAIApi(configuration);
  const data = {
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 1024,
    temperature: 0,
  };
  const response = await openai.createCompletion(data);
  return response;
}