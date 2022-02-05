// @ts-check

const express = require("express");
// const bodyParser = require("body-parser");

const userRouter = express.Router();
const app = express();

app.use(express.json())
app.use(express.static('src/public'))
app.set('views', 'src/views')
app.set('view engine', 'pug')

const PORT = 5001;

userRouter.get("/", (req, res, next) => {
  res.render('user list')
})

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'bar',
  }
}

userRouter.param('id', (req, res, next, value) => {
  console.log('id parameter', value)
  req.user = USERS[value]
  next()
})

userRouter.get("/:id", (req, res, next) => {
  const resMineType = req.accepts(['json', 'html'])

  if (resMineType === 'json') {
    res.send(req.user)
  } else if (resMineType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname
    })
  }
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

app.get('/', ((req, res) => {
  res.render('index', {
    message: 'Hello, pug!!!'
  })
}))

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`);
});