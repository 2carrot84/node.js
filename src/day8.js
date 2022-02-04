// @ts-check

const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 5001;

app.use("/", async (req, res, next) => {
  console.log("Middleware 1");

  const fileContent = await fs.promises.readFile('.gitignore')
  const requestedAt = new Date()
  req.requestedAt = requestedAt
  req.fileContent = fileContent
  next()  // 다음 미들웨어를 실행
});

app.use((req, res) => {
  console.log("Middleware 2");
  res.send(`Hello, express!: Requseted at ${req.requestedAt}, ${req.fileContent}`);  // 응답 리턴
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`);
});