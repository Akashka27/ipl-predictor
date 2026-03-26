import express from "express";
import { submitPrediction } from "../controllers/predictionController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", auth, submitPrediction);
export default router;
