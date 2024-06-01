import axios from "axios";
import { Request, Response } from "express";

let MostRecentVideoAddress = "";

const GetMostRecentVideoURL = (req: Request, res: Response) => {
  try {
    return res.status(200).send({
      success: true,
      payload: MostRecentVideoAddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `GetMostRecentVideoURL Error: ${error}` });
  }
};

const PostMostRecentVideoURL = (req: Request, res: Response) => {
  const mostRecentVideoURL = req.body.mostRecentVideoURL as string;
  try {
    MostRecentVideoAddress = mostRecentVideoURL;
    return res.status(201).send({
      success: true,
      payload: MostRecentVideoAddress,
    });
  } catch (error) {
    res.status(500).json({ error: `PostMostRecentVideoURL Error: ${error}` });
  }
};

const GetVideoInfo = async (req: Request, res: Response) => {
  const urlText = req.query.urlText as string;
  try {
    const response = await axios.get(urlText, {
      responseType: "arraybuffer",
    });

    res.setHeader("Content-Type", "video/mp4");
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: `GetVideoInfo Error: ${error}` });
  }
};

export default {
  GetMostRecentVideoURL,
  PostMostRecentVideoURL,
  GetVideoInfo,
};
