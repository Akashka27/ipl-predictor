import { db } from "../config/db.js";

export const requestWithdrawal = async (req, res) => {
  const user_id = req.user.id;
  const { upi, points } = req.body;

  if (points < 5000)
    return res.status(400).json({ error: "Minimum 5000 points" });

  const amount = points / 100;

  await db.query(
    `INSERT INTO withdrawals (user_id, upi_id, points_used, amount)
     VALUES ($1,$2,$3,$4)`,
    [user_id, upi, points, amount]
  );

  res.json({ message: "Withdrawal requested" });
};

