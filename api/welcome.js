export const config = { runtime: "nodejs" };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, username } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Missing email" });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Beforexam <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Beforexam 🎉",
        html: `
<div style="
max-width:520px;
margin:auto;
background:#0f172a;
color:#e5e7eb;
border-radius:14px;
padding:24px;
font-family:Arial,Helvetica,sans-serif;
">

<h2 style="color:#ffffff;margin-bottom:6px;">
Welcome to Beforexam, ${username || "Student"} 👋
</h2>

<p style="font-size:14px;line-height:1.6;color:#cbd5e1;">
Your account has been created successfully.
You’re now part of a place where preparation feels like real exam training.
</p>

<div style="margin:20px 0;text-align:center;">

<a href="https://beforexam.vercel.app/mtp-rtp.html"
style="
display:inline-block;
background:#6366f1;
color:white;
padding:10px 16px;
border-radius:8px;
text-decoration:none;
font-weight:600;
margin:6px;
">
RTP / MTP Practice
</a>

<a href="https://beforexam.vercel.app/chapters.html"
style="
display:inline-block;
background:#1e293b;
color:white;
padding:10px 16px;
border-radius:8px;
text-decoration:none;
font-weight:600;
margin:6px;
border:1px solid #334155;
">
Chapter Practice
</a>

</div>

<p style="font-size:13px;color:#94a3b8;text-align:center;margin-top:18px;">
Verify your email to unlock full access.<br>
Happy practicing 🚀
</p>

</div>
`
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Resend welcome mail error:", text);
      return res.status(500).json({ error: "Email failed" });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("WELCOME API ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}