import { db } from "/assets/js/firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  let locked = false;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (locked) return;

    const token = document.querySelector(
      'input[name="cf-turnstile-response"]'
    )?.value;

    if (!token) {
      showToast("Please verify captcha");
      return;
    }

    locked = true;

    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.innerText = "Sending...";

    const data = {
      name: form[0].value.trim(),
      email: form[1].value.trim(),
      subject: form[2].value.trim(),
      message: form[3].value.trim(),
      token
    };

    try {

      /* =======================
         1) SAVE TO FIRESTORE
      ======================= */
      await addDoc(collection(db, "contactMessages"), {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: serverTimestamp()
      });

      /* =======================
         2) CALL YOUR EXISTING API
      ======================= */
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      let result = {};
      try { result = await res.json(); } catch {}

      if (!res.ok) {
        throw new Error(result.error || "Server error");
      }

      showToast("Message sent successfully");
      form.reset();

      if (window.turnstile) {
        turnstile.reset();
      }

      setTimeout(() => {
        window.location.replace("/confirmation.html");
      }, 200);

    } catch (err) {
      console.error("Contact error:", err);
      showToast("Something went wrong. Try again.");
    }

    locked = false;
    btn.disabled = false;
    btn.innerHTML = `
      <i class="fa-solid fa-paper-plane"></i>
      <span>Send Message</span>
    `;
  });
});