export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: "Missing data" });
  }

  const record = global.otpStore?.[email];

  if (!record) {
    return res.status(400).json({ error: "OTP not found" });
  }

  if (Date.now() > record.expires) {
    return res.status(400).json({ error: "OTP expired" });
  }

  if (Number(otp) !== record.otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  delete global.otpStore[email];

  return res.json({ success: true });
}