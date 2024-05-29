import { Request, Response } from "express";
import axios from "axios";

const PostSynthesize = async (req: Request, res: Response) => {
  const text = req.body.text;
  const api = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env["TEXT_TO_SPEECH_API_KEY"]}`;
  const payload = {
    audioConfig: {
      audioEncoding: "MP3",
      effectsProfileId: ["small-bluetooth-speaker-class-device"],
      pitch: 0,
      speakingRate: 1,
    },
    input: {
      text: text,
    },
    voice: {
      languageCode: "es-US",
      name: "es-US-Neural2-A",
    },
  };

  try {
    const response = await axios.post(api, payload);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching synthesize" });
  }
};

export default {
  PostSynthesize,
};
