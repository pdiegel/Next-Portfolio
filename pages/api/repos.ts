// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from "@/server";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  getData()
    .then((data) => {
      if (data.status !== 200) {
        res.status(400).json({ error: "Failed to fetch repos" });
      }
      res.status(200).json(data.results);
    })
    .catch((e) => {
      res.status(400).json({});
    });
}
