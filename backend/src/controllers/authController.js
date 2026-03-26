import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const login = async (req, res) => {
  const { email } = req.body;

  let user = await db.query("SELECT * FROM users WHERE email=$1", [email]);

  if (user.rows.length === 0) {
    user = await db.query(
      "INSERT INTO users (email,total_points) VALUES ($1,0) RETURNING *",
      [email]
    );
  }

  const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET);

  res.json({ token, user: user.rows[0] });
};
