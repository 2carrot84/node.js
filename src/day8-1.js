// @ts-check

const express = require("express");
// const bodyParser = require("body-parser");

const fs = require("fs");
const userRouter = express.Router();
const app = express();
app.use(express.json())
app.set('view engine', 'pug')
const PORT = 5001;

userRouter.get("/", (req, res, next) => {
  res.send('user list')
})

const USERS = {
  15: {
    nickname: 'foo',
  }
}

userRouter.param('id', (req, res, next, value) => {
  console.log('id parameter', value)
  req.user = USERS[value]
  next()
})

userRouter.get("/:id", (req, res, next) => {
  console.log('userRouter get ID')
  res.send(req.user)
})

userRouter.post("/", (req, res, next) => {
  res.send('user registe')
})

userRouter.post("/:id/nickname", (req, res, next) => {
  // req.body: {nickname: 'bar'}
  const { user } = req
  const { nickname } = req.body
  res.send('user registe')
})

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`);
});