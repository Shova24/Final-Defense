const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//database connection
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vxgvs.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const database = client.db("eBabyCare"); //database
    const appointmentsCollection = database.collection("appointments");
    const reviewCollection = database.collection("reviews");

    //Appointments collection
    app.post("/appointments", async (req, res) => {
      const appointment = req.body;
      const result = await appointmentsCollection.insertOne(appointment);
      // console.log(result);
      res.json(result);
    });
    app.get("/appointments", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      let cursor;
      console.log("query : ", query, email);
      if (email) {
        cursor = appointmentsCollection.find(query);
      } else {
        cursor = appointmentsCollection.find({});
      }

      const appointments = await cursor.toArray();
      // console.log(appointments);
      res.json(appointments);
    });

    // app.get("/appointments", async (req, res) => {
    //   const cursor = appointmentsCollection.find({});
    //   const appointments = await cursor.toArray();
    //   console.log(typeof appointments);
    //   res.json(appointments);
    // });

    //Review
    app.post("/reviews", async (req, res) => {
      const review = req.body;
      const result = await reviewCollection.insertOne(review);
      console.log(result);
      res.json(result);
    });

    app.get("/reviews", async (req, res) => {
      // const email = req.query.email;
      // const query = { email: email };
      // console.log("query : ", query, email);
      const cursor_review = reviewCollection.find({});
      const reviews = await cursor_review.toArray();
      // console.log(reviews);
      res.json(reviews);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello eBabyCare");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
