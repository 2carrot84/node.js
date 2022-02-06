const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.pjdpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = client