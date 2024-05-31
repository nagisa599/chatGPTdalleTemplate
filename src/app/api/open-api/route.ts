import OpenAI from "openai";
export async function POST(req: Request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { text } = await req.json();
  console.log(text);
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: text,
    n: 1,
    quality: "standard",
    size: "1024x1024",
  });
  console.log(response.data[0].url);
  return new Response(JSON.stringify(response.data[0].url));
  //   return new Response(JSON.stringify({ text }));
}
