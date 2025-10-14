import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });

  try {
    // call Gemini (text model)
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY;

    const body = {
      contents: [
        { parts: [{ text:
`Generate a complete, valid single-file HTML document with inlined CSS and minimal JS.
Requirement: ${prompt}
Constraints:
- Must include <!DOCTYPE html>, <html>, <head>, and <body>.
- Keep styles clean and responsive. Use a modern look.
- If adding JS, keep it simple and inline in <script> tag.` }] }
      ]
    };

    const resp = await axios.post(url, body);

    let html = resp?.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return res.json({ html });
  } catch (e) {
    console.error(e?.response?.data || e.message);
    return res.status(500).json({ error: "Generation failed" });
  }
});

app.listen(5000, () => console.log("API running on localhost:5000"));
