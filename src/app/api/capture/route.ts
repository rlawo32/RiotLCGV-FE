import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const captureUrl = 'http://34.127.40.154:8080/send-image';
    const contentType = req.headers.get('content-type') || '';

    const bodyBuffer = Buffer.from(await req.arrayBuffer());

    const response = await fetch(captureUrl, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        'Content-Length': bodyBuffer.length.toString(),
      },
      body: bodyBuffer,
    });

    const responseBuffer = await response.arrayBuffer();

    const headers = new Headers();
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-encoding') {
        headers.set(key, value);
      }
    });

    return new NextResponse(Buffer.from(responseBuffer), {
      status: response.status,
      headers,
    });
  } catch (err: any) {
    console.error('Proxy error:', err);
    return NextResponse.json(
      { error: 'Proxy failed', details: err.message },
      { status: 500 }
    );
  }
}
