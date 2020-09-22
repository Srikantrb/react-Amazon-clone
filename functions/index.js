const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HTSkdGkk9aNjstRi3fRs94NLkL1xBfqfYRycVnHk67sCGYbKaDiOTdnd0hkLJnrfBdmWn8lPEotMEtgqRQPKy4W00pJtg7oa8"
);

// API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes(end point)
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/srikanth", (request, response) =>
  response.status(200).send("hello Srikanth")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved for this amount", Math.round(total));

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total), //subunits of the currency
    currency: "inr",
    description: "payment",
    // billing_details: {
    //   address: {
    //     city: "ongole",
    //     state: "andhrapradesh",
    //   },
    //   name: "name",
    // },
    // name: "sri",
    // address: "ramachandrapuram",
  });

  //Ok -created
  response.status(201).send({
    clientsecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-2daea/us-central1/api
