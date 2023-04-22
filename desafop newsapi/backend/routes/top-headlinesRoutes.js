import express from "express";

const router = express.Router();

import { topHeadlines } from "../controllers/top-headLinesController.js";

//Llama al endpoint que queremos
router.get("/", topHeadlines);

export default router;
