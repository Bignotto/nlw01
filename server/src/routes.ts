import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/users", (req, res) => {
  return res.json({ message: "NLW01 aula2" });
});

routes.get("/users/:id", (req, res) => {});

routes.post("/users", (req, res) => {});

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);
routes.get("/points/:id", pointsController.show);

export default routes;

//service pattern
//repository pattern data mapper
