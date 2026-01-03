import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  try {
    const ref = db.collection("tempTests").doc("current");
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(200).json({ status: "no-test" });
    }

    const data = snap.data();

    if (!data.expiresAt) {
      return res.status(200).json({ status: "no-expiry" });
    }

    if (data.expiresAt.toDate() <= new Date()) {
      await ref.delete();
      return res.status(200).json({ status: "deleted" });
    }

    return res.status(200).json({ status: "active" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "cleanup-failed" });
  }
}