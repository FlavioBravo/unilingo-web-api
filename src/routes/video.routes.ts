import { Router } from "express";
import videoController from "../controllers/video.controller";

const router = Router();

router.get("/video", videoController.GetMostRecentVideoURL);
router.post("/video", videoController.PostMostRecentVideoURL);
router.get("/video/info", videoController.GetVideoInfo);

export default router;
