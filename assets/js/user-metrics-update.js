import {
  doc,
  updateDoc,
  getDoc,
  increment,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

export async function addXp(user, xpEarned) {
  const ref = doc(db, "users", user.uid);

  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const data = snap.data();

  const newTotalXp = (data.xp || 0) + xpEarned;
  const newDailyXp = (data.dailyXp || 0) + xpEarned;

  // 🔥 MOST XP = MAX OF DAILY XP
  const newBestXp = Math.max(data.bestXpDay || 0, newDailyXp);

  // 🔥 ATTEMPTS DERIVED FROM XP
  const totalAttempts = Math.floor(newTotalXp / 5);

  await updateDoc(ref, {
    xp: newTotalXp,
    dailyXp: newDailyXp,
    bestXpDay: newBestXp,
    totalAttempts,
    lastActiveDate: new Date().toISOString()
  });
}