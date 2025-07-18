import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  return NextResponse.json({ message: 'OK' }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
