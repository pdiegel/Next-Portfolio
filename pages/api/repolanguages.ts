// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRepoLanguageData } from "@/server";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  getRepoLanguageData(req.query.repoName)
    .then((data) => {
      return data.status === 200 && res.status(200).json(data.results);
    })
    .catch((e) => {
      console.log("Could not get repo language data");
      console.log(e);

      return res.status(400).json({ error: e });
    });
}
