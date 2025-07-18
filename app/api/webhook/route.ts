export async function POST(req: Request) {
  return new Response('OK', { status: 200 });
}

export async function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
