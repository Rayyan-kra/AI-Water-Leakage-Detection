import express from "express";
import { analyzeWaterData } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/analyze", analyzeWaterData);

export default router;
