import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

//Routes
import TranscriptRoutes from "./routes/transcript.routes";
import SynthesizeRoutes from "./routes/synthesize.routes";
import VideoRoutes from "./routes/video.routes";
import SpeechToTextRoutes from "./routes/speechToText.routes";
import DetectTextRoutes from "./routes/detectText.routes";

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "7mb" }));
app.use(express.json({ limit: "7mb" }));

//Routes Implements
app.use("/api", TranscriptRoutes);
app.use("/api", SynthesizeRoutes);
app.use("/api", VideoRoutes);
app.use("/api", SpeechToTextRoutes);
app.use("/api", DetectTextRoutes);

app.get("/", (req, res) => {
  return res.send(`The API is working now`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
