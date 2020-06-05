import express from "express";

const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({ message: "NLW01 aula2" });
});

routes.get("/users/:id", (req, res) => {});

routes.post("/users", (req, res) => {
  //return res.json(res.body)
});

export default routes;
