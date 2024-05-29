import OpenAI from "openai";
export async function POST(req: Request) {
  //   const openai = new OpenAI({
  //     apiKey: process.env.OPENAI_API_KEY,
  //   });
  console.log(req.body);
  const { text } = await req.json();
  //   const response = await openai.images.generate({
  //     model: "dall-e-3",
  //     prompt: textPrompt,
  //     n: 1,
  //     size: "1024x1024",
  //   });
  console.log(text);
  return new Response(JSON.stringify({ text }));
}
