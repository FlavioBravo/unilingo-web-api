import { Router } from "express";
import videoController from "../controllers/video.controller";

const router = Router();

router.get("/video", videoController.GetMostRecentVideoTitle);
router.post("/video", videoController.PostMostRecentVideoTitle);

export default router;
