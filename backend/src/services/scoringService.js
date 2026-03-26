import { db } from "../config/db.js";

export const calculatePoints = async (match) => {
  const predictions = await db.query(
    "SELECT * FROM predictions WHERE match_id=$1",
    [match.id]
  );

  for (let p of predictions.rows) {
    let points = 0;

    if (p.match_prediction === match.match_winner) points += 100;
    if (p.toss_prediction === match.toss_winner) points += 50;
    if (p.mom_prediction === match.man_of_match) points += 50;

    if (points === 200) points += 50;

    await db.query(
      "UPDATE users SET total_points = total_points + $1 WHERE id=$2",
      [points, p.user_id]
    );
  }
};
