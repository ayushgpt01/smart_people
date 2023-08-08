import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import knex from "knex";
import "dotenv/config";

const saltRounds = 10;

import handleRegister from "./controllers/register.js";
import handleSignin from "./controllers/signin.js";
import handleProfile from "./controllers/profile.js";
import { handleImage, handleAPIcall } from "./controllers/image.js";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (__req, res) => {
  res.send("Success");
});

app.post("/signin", (req, res) => {
  handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  handleRegister(req, res, db, bcrypt, saltRounds);
});

app.get("/profile/:id", (req, res) => {
  handleProfile(req, res, db);
});

app.put("/image", (req, res) => {
  handleImage(req, res, db);
});
app.post("/imageurl", (req, res) => {
  handleAPIcall(req, res);
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});
