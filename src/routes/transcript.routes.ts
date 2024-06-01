import { Router } from "express";
import transcriptController from "../controllers/transcript.controller";

const router = Router();

router.get("/transcript/translate", transcriptController.GetTranslation);

export default router;
