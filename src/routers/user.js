// @ts-check

const express = require("express");
// const bodyParser = require("body-parser");

const router = express.Router();

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'bar',
  }
}


router.get("/", (req, res, next) => {
  res.render('user list')
})

router.param('id', async (req, res, next, value) => {
  try {
    const user = USERS[value]

    if (!user) {
      const err = new Error('User Not Found.')
      err.statusCode = 404
      throw err
    }
    req.user = user
    next()
  } catch (err) {
    next(err)
  }
})

router.get("/:id", (req, res, next) => {
  const resMineType = req.accepts(['json', 'html'])

  if (resMineType === 'json') {
    res.send(req.user)
  } else if (resMineType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname
    })
  }
})

router.post("/", (req, res, next) => {
  res.send('user registe')
})

router.post("/:id/nickname", (req, res, next) => {
  // req.body: {nickname: 'bar'}
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname

  res.send('user registe')
})

module.exports = router