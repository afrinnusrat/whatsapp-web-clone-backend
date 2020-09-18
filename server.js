// importing
import express from "express";

// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware

// DB config

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("hellow woow"));

// listener
app.listen(port, () => console.log(`Listenin on http://localhost:${port}`));
