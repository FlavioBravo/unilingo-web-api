import { Request, Response } from "express";
import { SpeechClient } from "@google-cloud/speech";
import fs from "fs";

process.env.GOOGLE_APPLICATION_CREDENTIALS = "unilingo-test.json";

const speechClient = new SpeechClient();

const PostSpeechToText = async (req: Request, res: Response) => {
  try {
    // Read the uploaded file
    const filePath = req?.file?.path;
    //@ts-ignore
    const audioBytes = fs.readFileSync(filePath).toString("base64");

    const request = {
      audio: {
        content: audioBytes,
      },
      config: {
        encoding: "LINEAR16", // Assuming your audio buffer is in PCM format
        sampleRateHertz: 48000, // Sample rate of your audio buffer
        languageCode: "en-US", // Language code for the speech
        audioChannelCount: 2,
        enableSeparateRecognitionPerChannel: true,
      },
    };

    // Detects speech in the audio file
    //@ts-ignore
    const [response] = await speechClient.recognize(request);
    const transcription = response.results
      ?.map((result: any) => result.alternatives?.[0].transcript)
      .join("\n");

    return res.status(201).send({
      success: true,
      payload: transcription,
    });
  } catch (error) {
    res.status(500).json({ error: `PostSpeechToText Error: ${error}` });
  }
};

export default {
  PostSpeechToText,
};
