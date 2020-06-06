import { Request, Response, request } from "express";
import knex from "../database/connection";

class PointsController {
  async index(req: Request, res: Response) {
    const { city, uf, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    return res.json(points);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) return res.status(400).json({ message: "Not found!" });

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id);

    // return res.json({
    //   items,
    //   ...point,
    // });
    return res.json({ point, items });
  }

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

    const trx = await knex.transaction();

    const point = {
      image: "fakeimg",
      name,
      email,
      telefone,
      latitude,
      longitude,
      city,
      uf,
      country,
    };

    const ids = await trx("points").insert(point);

    const pointItems = items.map((item_id: Number) => {
      return {
        item_id,
        point_id: ids[0],
      };
    });

    await trx("point_items").insert(pointItems);

    await trx.commit();

    return res.json({
      id: ids[0],
      ...point,
    });
  }
}

export default PointsController;
