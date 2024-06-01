import { Request, Response } from "express";
import axios from "axios";

const GetTranslation = async (req: Request, res: Response) => {
  try {
    const text = req.query.text as string;
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
    return res.status(200).send({
      success: true,
      payload: translatedText,
    });
  } catch (error: any) {
    res.status(500).json({ error: `GetTranslation Error: ${error}` });
  }
};

export default {
  GetTranslation,
};
