// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { getRepoLanguageData } from "@/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	getRepoLanguageData(req.query.repoName)
		.then((data) => {
			return data.status === 200 && res.status(200).json(data.results);
		})
		.catch((e) => {
			return res.status(400).json({ error: e });
		});
}
