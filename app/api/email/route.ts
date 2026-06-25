export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    // TODO: integrate with email provider
    return new Response(JSON.stringify({ ok: true, sent: false, received: body }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 })
  }
}
