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
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #283654;">
            <h2>Szia ${name}!</h2>

            <p>
              Köszönöm, hogy felvetted velem a kapcsolatot.
            </p>

            <p>
              Megkaptam az ajánlatkérésedet, hamarosan átnézem a projekt részleteit,
              és jelentkezem a megadott e-mail címen.
            </p>

            <p>
              Üdvözlettel,<br>
              <strong>Kiss Ádám</strong><br>
              NETGARY
            </p>
          </div>
        `
        : `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #283654;">
            <h2>Hi ${name}!</h2>

            <p>
              Thank you for getting in touch.
            </p>

            <p>
              I've received your quote request and will review the project details.
              I'll get back to you shortly at the email address you provided.
            </p>

            <p>
              Best regards,<br>
              <strong>Ádám Kiss</strong><br>
              NETGARY
            </p>
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
