import sql from "@/app/api/utils/sql";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received travel inquiry data:", body);

    const {
      full_name,
      email,
      phone,
      travel_dates,
      number_of_people,
      package_preference,
      interests,
      budget_range,
      additional_details,
      recaptcha,
    } = body;

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
    if (!full_name || !email || !phone || !travel_dates || !number_of_people) {
      console.log("Validation failed - missing required fields");
      return Response.json(
        { error: "Lütfen tüm zorunlu alanları doldurun" },
        { status: 400 },
      );
    }

    console.log("Inserting into database...");

    // Insert into database
    const result = await sql`
      INSERT INTO travel_inquiries (
        full_name, 
        email, 
        phone, 
        travel_dates, 
        number_of_people, 
        package_preference, 
        interests, 
        budget_range, 
        additional_details
      )
      VALUES (
        ${full_name}, 
        ${email}, 
        ${phone}, 
        ${travel_dates}, 
        ${parseInt(number_of_people)}, 
        ${package_preference || null}, 
        ${interests || null}, 
        ${budget_range || null}, 
        ${additional_details || null}
      )
      RETURNING id
    `;

    console.log("Database insert successful, ID:", result[0]?.id);

    // Send email notification (hata durumunda devam et)
    try {
      const emailBody = `
Yeni Seyahat Talebi

İsim: ${full_name}
Email: ${email}
Telefon: ${phone}
Seyahat Tarihleri: ${travel_dates}
Kişi Sayısı: ${number_of_people}
Tercih Edilen Paket: ${package_preference || "Belirtilmedi"}
İlgi Alanları: ${interests || "Belirtilmedi"}
Bütçe Aralığı: ${budget_range || "Belirtilmedi"}
Ek Detaylar: ${additional_details || "Yok"}
      `;

      console.log("Sending email notification...");

      const emailResponse = await fetch(
        `${process.env.APP_URL || "https://www.endonezyakasifi.com"}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "uzelemehmet@gmail.com",
            subject: `Yeni Seyahat Talebi - ${full_name}`,
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
      message: "Talebiniz başarıyla kaydedildi!",
    });
  } catch (error) {
    console.error("Travel inquiry error:", error);
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
