import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, source, project, language } = req.body;

    if (!name || !email || !source || !project) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // EMAIL NEKED
    await resend.emails.send({
      from: "NETGARY <hello@netgary.hu>",
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `Új ajánlatkérés - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #283654;">
          <h2>Új ajánlatkérés érkezett</h2>

          <p><strong>Név:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Honnan hallott rólam:</strong> ${source}</p>

          <p><strong>Projekt:</strong></p>

          <div style="
            padding: 16px;
            background: #f6f7f9;
            border-radius: 12px;
          ">
            ${project}
          </div>
        </div>
      `,
    });

    // AUTOMATIKUS VISSZAIGAZOLÁS
    const isHungarian = language !== "en";

    await resend.emails.send({
      from: "NETGARY <hello@netgary.hu>",
      to: email,

      subject: isHungarian
        ? "Megkaptuk az ajánlatkérésed - NETGARY"
        : "We received your request - NETGARY",

      html: isHungarian
        ? `
      <div style="
        margin:0;
        padding:40px 20px;
        background:#f5f6f8;
        font-family:Arial,Helvetica,sans-serif;
      ">
        <div style="
          max-width:620px;
          margin:0 auto;
          background:#ffffff;
          border:1px solid #e7e9ee;
          border-radius:18px;
          overflow:hidden;
        ">

          <div style="
            padding:28px 32px;
            border-bottom:1px solid #eceef2;
          ">
            <div style="
              font-size:26px;
              font-weight:700;
              color:#283654;
              letter-spacing:-0.5px;
            ">
              NETGARY
            </div>

            <div style="
              margin-top:4px;
              font-size:13px;
              color:#8a93a5;
            ">
              the web partner
            </div>
          </div>

          <div style="padding:36px 32px;">
            <div style="
              display:inline-block;
              padding:7px 12px;
              border-radius:999px;
              background:#eef8f2;
              color:#2f7d4f;
              font-size:12px;
              font-weight:600;
              margin-bottom:24px;
            ">
              ✓ Ajánlatkérés megérkezett
            </div>

            <h1 style="
              margin:0 0 16px;
              font-size:30px;
              line-height:1.15;
              color:#283654;
            ">
              Szia ${name}!
            </h1>

            <p style="
              margin:0 0 16px;
              font-size:16px;
              line-height:1.7;
              color:#5f6878;
            ">
              Köszönöm, hogy felvetted velem a kapcsolatot.
            </p>

            <p style="
              margin:0 0 28px;
              font-size:16px;
              line-height:1.7;
              color:#5f6878;
            ">
              Megkaptam az ajánlatkérésedet. Átnézem a projekt részleteit,
              és hamarosan jelentkezem a megadott e-mail címen.
            </p>

            <div style="
              padding:18px 20px;
              background:#f7f8fa;
              border:1px solid #eceef2;
              border-radius:14px;
              margin-bottom:30px;
            ">
              <div style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1px;
                color:#9aa2b1;
                margin-bottom:8px;
              ">
                Projekted
              </div>

              <div style="
                font-size:14px;
                line-height:1.6;
                color:#394256;
              ">
                ${project}
              </div>
            </div>

            <p style="
              margin:0;
              font-size:15px;
              line-height:1.7;
              color:#5f6878;
            ">
              Üdvözlettel,<br>
              <strong style="color:#283654;">Kiss Ádám</strong><br>
              <span style="color:#8a93a5;">
                A NETGARY fejlesztője és tulajdonosa
              </span>
            </p>
          </div>

          <div style="
            padding:20px 32px;
            border-top:1px solid #eceef2;
            background:#fbfbfc;
            font-size:12px;
            color:#9aa2b1;
          ">
            NETGARY · Webfejlesztés · Design · Digitális megoldások
          </div>
        </div>
      </div>
    `
        : `
      <div style="
        margin:0;
        padding:40px 20px;
        background:#f5f6f8;
        font-family:Arial,Helvetica,sans-serif;
      ">
        <div style="
          max-width:620px;
          margin:0 auto;
          background:#ffffff;
          border:1px solid #e7e9ee;
          border-radius:18px;
          overflow:hidden;
        ">

          <div style="
            padding:28px 32px;
            border-bottom:1px solid #eceef2;
          ">
            <div style="
              font-size:26px;
              font-weight:700;
              color:#283654;
              letter-spacing:-0.5px;
            ">
              NETGARY
            </div>

            <div style="
              margin-top:4px;
              font-size:13px;
              color:#8a93a5;
            ">
              the web partner
            </div>
          </div>

          <div style="padding:36px 32px;">
            <div style="
              display:inline-block;
              padding:7px 12px;
              border-radius:999px;
              background:#eef8f2;
              color:#2f7d4f;
              font-size:12px;
              font-weight:600;
              margin-bottom:24px;
            ">
              ✓ Request received
            </div>

            <h1 style="
              margin:0 0 16px;
              font-size:30px;
              line-height:1.15;
              color:#283654;
            ">
              Hi ${name}!
            </h1>

            <p style="
              margin:0 0 16px;
              font-size:16px;
              line-height:1.7;
              color:#5f6878;
            ">
              Thank you for getting in touch.
            </p>

            <p style="
              margin:0 0 28px;
              font-size:16px;
              line-height:1.7;
              color:#5f6878;
            ">
              I've received your quote request and will review the project details.
              I'll get back to you shortly at the email address you provided.
            </p>

            <div style="
              padding:18px 20px;
              background:#f7f8fa;
              border:1px solid #eceef2;
              border-radius:14px;
              margin-bottom:30px;
            ">
              <div style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1px;
                color:#9aa2b1;
                margin-bottom:8px;
              ">
                Your project
              </div>

              <div style="
                font-size:14px;
                line-height:1.6;
                color:#394256;
              ">
                ${project}
              </div>
            </div>

            <p style="
              margin:0;
              font-size:15px;
              line-height:1.7;
              color:#5f6878;
            ">
              Best regards,<br>
              <strong style="color:#283654;">Ádám Kiss</strong><br>
              <span style="color:#8a93a5;">
                Developer & Owner of NETGARY
              </span>
            </p>
          </div>

          <div style="
            padding:20px 32px;
            border-top:1px solid #eceef2;
            background:#fbfbfc;
            font-size:12px;
            color:#9aa2b1;
          ">
            NETGARY · Web Development · Design · Digital Products
          </div>
        </div>
      </div>
    `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Email sending failed",
    });
  }
}
