import { Router } from "express";
import multer from "multer";
import speechToTextController from "../controllers/speechToText.controller";

// Set up Multer for handling file uploads
const upload = multer({ dest: "uploads/" });

const router = Router();

router.post(
  "/speech-to-text",
  upload.single("audio"),
  speechToTextController.PostSpeechToText
);

export default router;
