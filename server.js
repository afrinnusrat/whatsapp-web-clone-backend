// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// DB config
const connection_url =
  "mongodb+srv://admin:EYsaSMDTFoqIzrU3@cluster0.xgclt.mongodb.net/whatsapp-web-clone-backend?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hellow woow"));

// POST
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// GET sync
app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`Listenin on http://localhost:${port}`));
