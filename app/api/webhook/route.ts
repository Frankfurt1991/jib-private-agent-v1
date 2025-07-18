import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  return new NextResponse('OK', { status: 200 });
}

export async function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}
