import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({ message: "NLW01 aula2" });
});

routes.get("/users/:id", (req, res) => {});

routes.post("/users", (req, res) => {
  //return res.json(res.body)
});

routes.get("/items", async (req, res) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return res.json(serializedItems);
});

routes.post("/points", async (req, res) => {
  const {
    name,
    email,
    telefone,
    latitude,
    longitude,
    city,
    uf,
    country,
    items,
  } = req.body;

  const ids = await knex("points").insert({
    image: "fakeimg",
    name,
    email,
    telefone,
    latitude,
    longitude,
    city,
    uf,
    country,
  });

  const pointItems = items.map((item_id: Number) => {
    return {
      item_id,
      point_id: ids[0],
    };
  });

  await knex("point_items").insert(pointItems);

  return res.json({ response: "success!" });
});

export default routes;
