const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:admin@cluster0.pjdpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function main() {
  await client.connect();

  const users = client.db("fc21").collection("users");  // 별도 생성 작업없이 collection 지정하면 새로 생성됨
  const cities = client.db("fc21").collection("cities");

  await users.deleteMany({});
  await cities.deleteMany({});

  await cities.insertMany([
    {
      name: "서울",
      population: 1000
    },
    {
      name: "부산",
      population: 350
    }
  ]);

  // BSON Document Size 16MB 이하
  //
  await users.insertMany([
    {
      name: "Foo",
      birthYear: 2000,
      contacts: [
        {
          type: "phone",
          number: "+821012341234"
        },
        {
          type: "home",
          number: "+821012345678"
        }
      ],
      city: "서울"
    },
    {
      name: "Bar",
      birthYear: 1995,
      city: "부산"
    },
    {
      name: "Baz",
      birthYear: 1990,
      city: "부산"
    },
    {
      name: "Poo",
      birthYear: 1993,
      contacts: [
        {
          type: "phone",
          number: "+821012341234"
        }
      ],
      city: "서울"
    }
  ]);

  await users.updateOne({
      name: "Baz"
    },
    {
      $set: {
        name: "Boo"
      }
    });

  await users.deleteOne({
    name: "Boo"
  });

  const cursor = users.find({
    birthYear: {
      $gte: 1990
    }
  }, {
    sort: {
      birthYear: -1  // 내림차순
    }
  });
  await cursor.forEach(console.log);

  console.log("cursor2 !!");
  const cursor2 = users.find({
    "contacts.type": "phone"
  });
  await cursor2.forEach(console.log);

  console.log("cursor3 !! collection aggregate");
  const cursor3 = users.aggregate([
    {
      $lookup: {
        from: "cities",
        localField: "city",
        foreignField: "name",
        as: "city_info"
      }
    },
    {
      $match: {
        $or: [
          {
            "city_info.population": {
              $gte: 500
            }
          },
          {
            birthYear: {
              $gte: 1995,
            }
          }
        ]
      }
    },
    {
      $count: 'num_users'
    }
  ]);
  await cursor3.forEach(console.log);

  await client.close();
}

main();