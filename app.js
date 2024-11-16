import path from "node:path";
import express from "express";

const app = express();

app.use(express.static("dist"));

app.use("/", (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"), (err) => console.log(err));
});

app.listen(5000, () => {
  console.log("File rendering on port 5000");
});
