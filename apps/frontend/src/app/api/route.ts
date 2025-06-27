import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  return NextResponse.json({
    message: `Hello, ${name || 'World'} from Next.js API Route!`,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    message: 'Data received successfully!',
    receivedData: data,
    status: 200
  });
}