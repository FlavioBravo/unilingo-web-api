import { Request, Response } from "express";
import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import axios from "axios";

const translateText = async (text: string) => {
  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: "es",
          key: process.env["TRANSLATE_API_KEY"],
        },
      }
    );

    const translatedText = response.data.data.translations[0].translatedText;
    return translatedText;
  } catch (error: any) {
    console.log(error);
  }
};

const GetTranscript = async (req: Request, res: Response) => {
  const videoId = req.params.videoId;
  try {
    const loader = YoutubeLoader.createFromUrl(
      `https://youtube.com/embed/${videoId}?start=30&end=45`,
      {
        language: "en",
        addVideoInfo: true,
      }
    );

    const docs = await loader.load();

    const text = docs[0].pageContent.slice(300, 400);
    const translatedText = await translateText(text);
    return res.status(200).send({
      success: true,
      payload: translatedText,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching transcript" });
  }
};

export default {
  GetTranscript,
};
