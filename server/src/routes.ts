import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();
const upload = multer(multerConfig);

routes.get("/users", (req, res) => {
  return res.json({ message: "NLW01 aula2" });
});

routes.get("/users/:id", (req, res) => {});

routes.post("/users", (req, res) => {});

routes.get("/items", itemsController.index);

routes.post("/points", upload.single("image"), pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
export default routes;

//service pattern
//repository pattern data mapper
