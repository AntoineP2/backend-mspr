import { Request, Response } from "express";
import db from "../../data/data";

export async function getAdviceByPlantId(req: Request, res: Response) {
  try {
    const { plantId } = req.query;
    await db.all(
      "SELECT * FROM PlantsAdvice WHERE plantId = ?",
      [plantId],
      (err, data) => {
        if (data[0] === undefined)
          return res
            .status(404)
            .json({ status: 404, message: "No plants found for this user" });
        else return res.status(200).json(data);
      }
    );
  } catch (error) {
    console.log(error);
  }
}
