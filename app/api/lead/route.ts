import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    // TODO: validate and persist lead
    return new Response(JSON.stringify({ ok: true, received: body }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 })
  }
}
