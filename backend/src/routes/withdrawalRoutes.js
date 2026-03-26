import express from "express";
import { requestWithdrawal } from "../controllers/withdrawalController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", auth, requestWithdrawal);
export default router;
