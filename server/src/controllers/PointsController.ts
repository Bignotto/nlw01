import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async create(req: Request, res: Response) {
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
  }
}

export default PointsController;
