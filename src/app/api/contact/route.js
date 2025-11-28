import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received contact data:", body);

    const { full_name, email, phone, subject, message, recaptcha } = body;

    // reCAPTCHA doğrulaması (isteğe bağlı)
    if (recaptcha) {
      try {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify`,
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=6LeVyBgsAAAAAFmMbHx_0UKDa27YuWGOD7Gr7c0w&response=${recaptcha}`,
          },
        );

        const recaptchaResult = await recaptchaResponse.json();

        if (!recaptchaResult.success) {
          console.log("reCAPTCHA failed:", recaptchaResult);
          return Response.json(
            { error: "reCAPTCHA doğrulaması başarısız" },
            { status: 400 },
          );
        }
      } catch (recaptchaError) {
        console.error("reCAPTCHA error:", recaptchaError);
        // reCAPTCHA hatası durumunda devam et
      }
    }

    // Validation
    if (!full_name || !email || !subject || !message) {
      console.log("Validation failed - missing required fields");
      return Response.json(
        { error: "Lütfen tüm zorunlu alanları doldurun" },
        { status: 400 },
      );
    }

    console.log("Inserting contact message into database...");

    // Insert into database
    const result = await sql`
      INSERT INTO contact_messages (full_name, email, phone, subject, message)
      VALUES (${full_name}, ${email}, ${phone || null}, ${subject}, ${message})
      RETURNING id
    `;

    console.log("Database insert successful, ID:", result[0]?.id);

    // Send email notification (hata durumunda devam et)
    try {
      const emailBody = `
Yeni İletişim Mesajı

İsim: ${full_name}
Email: ${email}
Telefon: ${phone || "Belirtilmedi"}
Konu: ${subject}

Mesaj:
${message}
      `;

      console.log("Sending email notification...");

      const emailResponse = await fetch(
        `${process.env.APP_URL || "https://www.endonezyakasifi.com"}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "uzelemehmet@gmail.com",
            subject: `İletişim Formu - ${subject}`,
            text: emailBody,
          }),
        },
      );

      if (!emailResponse.ok) {
        console.error("Email send failed:", await emailResponse.text());
      } else {
        console.log("Email sent successfully");
      }
    } catch (emailError) {
      console.error("Email error (continuing anyway):", emailError);
    }

    return Response.json({
      success: true,
      id: result[0]?.id,
      message: "Mesajınız başarıyla gönderildi!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    console.error("Error stack:", error.stack);

    return Response.json(
      {
        error: "Bir hata oluştu. Lütfen tekrar deneyin.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
