const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/contact", (req, res) => {
  const newMessage = req.body;
  let messages = [];

  if (fs.existsSync("messages.json")) {
    const data = fs.readFileSync("messages.json", "utf-8");
    messages = JSON.parse(data);
  }

  messages.push(newMessage);
  fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));

  res.json({ message: "Message stored successfully" });
});

app.get("/messages", (req, res) => {
  const data = fs.existsSync("messages.json")
    ? JSON.parse(fs.readFileSync("messages.json", "utf-8"))
    : [];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});