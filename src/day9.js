// @ts-check

const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.json())
app.set('views', 'src/views')
app.set('view engine', 'pug')

const PORT = 5001;

const userRouter = require('./routers/user')

app.use('/users', userRouter)
app.use('/public', express.static('src/public'))

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`);
});