import { Router } from "express";
import detectTextController from "../controllers/detectText.controller";

const router = Router();

router.post("/detect-text", detectTextController.PostdetectText);

export default router;
