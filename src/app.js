import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World !" });
});

app.get("/testeurs", (req, res) => {
  return res.status(200).json({ message: "Il est 15h55." });
});

app.listen(PORT, () =>
  console.log(`Web API is running on http://localhost:${PORT}/`),
);
