import { NextResponse } from "next/server";
import { buildPrompt } from "@/lib/prompt";

export async function POST(req: Request) {
  try {
    const { idea } = await req.json();

    const prompt = buildPrompt(idea);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ],
      }),
    });

    const data = await response.json();

    const output = data.choices?.[0]?.message?.content;

    return NextResponse.json({ result: output });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}