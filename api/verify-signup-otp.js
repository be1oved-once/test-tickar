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
  const { email, otp } = req.body;

  const ref = db.collection("signupOtps").doc(email);
  const snap = await ref.get();

  if (!snap.exists) {
    return res.json({ valid: false });
  }

  const data = snap.data();

  if (data.otp !== otp || Date.now() > data.expiresAt) {
    return res.json({ valid: false });
  }

  // 🔥 OTP USE ONCE
  await ref.delete();

  res.json({ valid: true });
}