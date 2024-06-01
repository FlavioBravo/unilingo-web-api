import { Request, Response } from "express";
import * as vision from "@google-cloud/vision";

// Path to your service account key file
const keyFilename = "unilingo-test-detect.json";

// Create a client
const client = new vision.ImageAnnotatorClient({ keyFilename });

// Function to detect text in a base64-encoded image
const PostdetectText = async (req: Request, res: Response) => {
  try {
    // Make a request to the Vision API
    const [result] = await client.textDetection({
      image: { content: req.body.base64Image },
    });
    const detections = result.textAnnotations;
    if (detections && detections.length > 0) {
      return res.status(201).send({
        success: true,
        payload: detections[0]?.description,
      });
    } else {
      console.log("No text detected.");
    }
  } catch (error) {
    res.status(500).json({ error: `PostdetectText Error: ${error}` });
  }
};

export default {
  PostdetectText,
};
