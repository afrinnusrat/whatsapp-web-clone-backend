// importing
import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware

// DB config
const connection_url =
  "mongodb+srv://admin:EYsaSMDTFoqIzrU3@cluster0.xgclt.mongodb.net/admin?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hellow woow"));

// listener
app.listen(port, () => console.log(`Listenin on http://localhost:${port}`));
