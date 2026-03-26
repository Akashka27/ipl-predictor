import { db } from "../config/db.js";

export const submitPrediction = async (req, res) => {
  const user_id = req.user.id;
  const { match_id, toss, winner, mom } = req.body;

  const exists = await db.query(
    "SELECT * FROM predictions WHERE user_id=$1 AND match_id=$2",
    [user_id, match_id]
  );

  if (exists.rows.length > 0)
    return res.status(400).json({ error: "Already predicted" });

  await db.query(
    `INSERT INTO predictions 
    (user_id, match_id, toss_prediction, match_prediction, mom_prediction)
    VALUES ($1,$2,$3,$4,$5)`,
    [user_id, match_id, toss, winner, mom]
  );

  res.json({ message: "Prediction submitted" });
};
