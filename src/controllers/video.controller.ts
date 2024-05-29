import { Request, Response } from "express";

let MostRecentVideoTitle = "";

const GetMostRecentVideoTitle = (req: Request, res: Response) => {
  try {
    return res.status(200).send({
      success: true,
      payload: MostRecentVideoTitle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching transcript" });
  }
};

const PostMostRecentVideoTitle = (req: Request, res: Response) => {
  const recentTitle = req.body.recentTitle;
  try {
    MostRecentVideoTitle = recentTitle;
    return res.status(200).send({
      success: true,
      payload: MostRecentVideoTitle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching transcript" });
  }
};

export default {
  GetMostRecentVideoTitle,
  PostMostRecentVideoTitle,
};
