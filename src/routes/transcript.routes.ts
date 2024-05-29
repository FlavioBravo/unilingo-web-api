import { Router } from "express";
import transcriptController from "../controllers/transcript.controller";

const router = Router();

router.get("/transcript/:videoId", transcriptController.GetTranscript);

export default router;
