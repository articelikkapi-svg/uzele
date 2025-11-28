import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const messages = await sql`
      SELECT * FROM contact_messages
      ORDER BY created_at DESC
    `;

    return Response.json({ messages });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return Response.json({ error: "Veriler alınamadı" }, { status: 500 });
  }
}
