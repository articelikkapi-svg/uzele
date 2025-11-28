export async function POST(request) {
  try {
    const body = await request.json();
    const { to, subject, text } = body;

    // This is a placeholder for email sending
    // In production, you would integrate with a service like SendGrid, Resend, etc.
    console.log("Email would be sent:", { to, subject, text });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ error: "Email gönderilemedi" }, { status: 500 });
  }
}
