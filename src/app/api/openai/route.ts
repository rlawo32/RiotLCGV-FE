import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const prompt = body.prompt;
    const maxToken = body.maxToken;
    console.log(body);

    // -- Player Summary --
    // input  max 300 token
    // output max 700 token

    // -- Game Summary --
    // input  max 800 token
    // ouput  max 1,200 token

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
            role: 'system',
            content: '너는 게임 분석 전문가야. 간결하고 핵심적으로 설명해.',
        },
        { 
            role: 'user', 
            content: prompt 
        }],
        temperature: 1,
        max_completion_tokens: maxToken,
    });

    return NextResponse.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI Error:', error);
    return NextResponse.json({ error: 'OpenAI API Error' }, { status: 500 });
  }
}
