import { Router } from "express";
import { createLog, getLogs, getSummary, getUser, getLogCounts, getEmail, sendFeedback } from "../controllers/logController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/createlog", createLog);
router.get("/getlogs",authMiddleware, getLogs);
router.get("/summary",authMiddleware,  getSummary);
router.get("/counts", authMiddleware, getLogCounts);
router.post("/get-email", getEmail);
router.post("/feedback", sendFeedback);
router.get("/user/:email", getUser);

export default router;
