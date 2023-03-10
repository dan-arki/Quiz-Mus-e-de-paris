import { expressjwt } from "express-jwt";
import createError from "http-errors";
import bcrypt from "bcrypt";
import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

// import { fetchAPI } from "../js/fetchAPI.js";
import { getPainting } from "../js/query.js";
import db from "../db.js";
import _ from "lodash";

const prisma = new PrismaClient();

// j'initialise un routeur
const router = express.Router();

// middleware pour vérifier le token
const auth = expressjwt({
  secret: process.env["JWT_KEY"],
  algorithms: ["HS256"],
});

//Toutes les peintures
router.get("/paintings", async (req, res, next) => {
  const paintings = [];
  db.forEach((element) => paintings.push(element.peintures));
  res.json(paintings.flatMap((x) => x));
  //   res.json(paintings);
});

//Infos pour une peinture
router.get("/paintings/:id", async (req, res, next) => {
  const id = req.params.id;
  let painting = [];
  db.forEach((element) => painting.push(element.peintures));
  painting = painting.flatMap((x) => x);
  db.find((element) => element.id === parseInt(id));
  painting = painting.find((element) => element.id === parseInt(id));
  _.random(0, 4);

  res.json(painting);
});

//Tous les artistes
router.get("/artists", async (req, res, next) => {
  const artists = [];
  db.forEach((element) => artists.push(element.name, element.id));
  res.json(artists);
});

//Infos pour un artiste
router.get("/artists/:id", async (req, res, next) => {
  const id = req.params.id;
  const artist = db.find((element) => element.id === parseInt(id));
  res.json(artist);
});

export default router;
