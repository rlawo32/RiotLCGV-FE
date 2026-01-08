import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const captureUrl = 'https://riotlcgc-be.onrender.com/send-shuffle';
    
    const body = await request.json();
    console.log("Next.js API 받은 데이터:", body);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(captureUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), 
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorMsg = await response.text();
      return NextResponse.json(
        { status: 'error', message: `외부 서버 응답 에러: ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ 
      status: 'success', 
      message: 'Node.js 서버로 데이터 전송 완료',
      receivedData: body 
    });

  } catch (err: any) {
    console.error("API Route error:", err);
    const message = err.name === 'AbortError' ? '외부 서버 응답 시간이 초과되었습니다.' : err.message;
    return NextResponse.json(
      { status: 'error', message: message }, 
      { status: 500 }
    );
  }
}
