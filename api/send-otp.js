import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email required" });
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000);
    
    global.otpStore = global.otpStore || {};
    global.otpStore[email] = {
      otp,
      expires: Date.now() + 5 * 60 * 1000,
    };
    
    await resend.emails.send({
      from: "Ticker <onboarding@resend.dev>",
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is ${otp}</h2><p>Valid for 5 minutes.</p>`,
    });
    
    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Email failed to send" });
  }
}