import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const inquiries = await sql`
      SELECT * FROM travel_inquiries
      ORDER BY created_at DESC
    `;

    return Response.json({ inquiries });
  } catch (error) {
    console.error("Error fetching travel inquiries:", error);
    return Response.json({ error: "Veriler alınamadı" }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return Response.json({ error: "ID ve status gerekli" }, { status: 400 });
    }

    await sql`
      UPDATE travel_inquiries
      SET status = ${status}
      WHERE id = ${id}
    `;

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return Response.json({ error: "Güncelleme başarısız" }, { status: 500 });
  }
}
