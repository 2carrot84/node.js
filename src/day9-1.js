const app = require('./app');
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`);
});