import { Router } from "express";
import synthesizeController from "../controllers/synthesize.controller";

const router = Router();

router.post("/synthesize", synthesizeController.PostSynthesize);

export default router;
