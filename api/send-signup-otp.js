export const config = { runtime: "nodejs" };

import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_ADMIN)
    )
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const expiresAt = Date.now() + 30 * 60 * 1000;

  // 🔐 STORE IN FIRESTORE
  await db.collection("signupOtps").doc(email).set({
    otp,
    expiresAt,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  // 📧 SEND MAIL (Resend – same style)
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "TIC Kar <onboarding@resend.dev>",
      to: [email],
      subject: "Verify your email",
      html: `
<div style="max-width:480px;margin:auto;background:#0f172a;color:#e5e7eb;
border-radius:14px;padding:22px;font-family:Arial">
<h3>Email Verification</h3>
<p style="font-size:22px;letter-spacing:6px;"><b>${otp}</b></p>
<p>Valid for 30 minutes</p>
</div>`
    })
  });

  if (!response.ok) {
    return res.status(500).json({ error: "Email failed" });
  }

  res.json({ sent: true });
}