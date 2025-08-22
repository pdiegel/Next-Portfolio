// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "@/server";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
	getData()
		.then((data) => {
			if (data.status !== 200) {
				res.status(400).json({ error: "Failed to fetch repos" });
			}
			res.status(200).json(data.results);
		})
		.catch((_) => {
			res.status(400).json({});
		});
}
