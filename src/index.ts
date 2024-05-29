// index.js
import express from "express";
import cors from "cors";
// import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 9000;

//Routes
import TranscriptRoutes from "./routes/transcript.routes";
import SynthesizeRoutes from "./routes/synthesize.routes";
import VideoRoutes from "./routes/video.routes";

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes Implements
app.use("/api", TranscriptRoutes);
app.use("/api", SynthesizeRoutes);
app.use("/api", VideoRoutes);

app.get("/", (req, res) => {
    return res.send(`The API is working now`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
