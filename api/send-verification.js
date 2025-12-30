import admin from "firebase-admin";
import { Resend } from "resend";

// 🔐 Firebase Admin Init
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    ),
  });
}

// ✉️ Resend Init
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, displayName } = req.body;

  try {
    // 🔗 Generate verification link
    const link = await admin
      .auth()
      .generateEmailVerificationLink(email, {
        url: "https://tickar.vercel.app/verified.html",
      });

    // ✨ Send custom email
    await resend.emails.send({
      from: "TIC.Kar <verify@tickar.vercel.app>",
      to: email,
      subject: "Verify your email to activate TIC.Kar",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
          <h2>Welcome to TIC.Kar 👋</h2>

          <p>Hello ${displayName || ""},</p>

          <p>
            Please verify your email address to activate your account and
            start using all features.
          </p>

          <a href="${link}" style="
            display:inline-block;
            padding:12px 20px;
            background:#6c63ff;
            color:#ffffff;
            text-decoration:none;
            border-radius:6px;
            font-weight:600;
          ">
            Verify Email
          </a>

          <p style="margin-top:20px;color:#666">
            If you didn’t create an account on TIC.Kar, you can ignore this email.
          </p>

          <p>
            Thanks,<br>
            <strong>Team TIC.Kar</strong>
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}