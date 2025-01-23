import express from "express";
import chatCompletion from "./services/openai.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my lovely new server!");
});

app.get("/test", async (req, res) => {
  const response = await chatCompletion(
    "Write a poem for my friend - Su. She's a lovely girl and recently she's a little bit down."
  );
  res.send(response);
});

export default app;
