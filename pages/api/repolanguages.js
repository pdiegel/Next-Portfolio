// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRepoLanguageData } from "@/server"

export default function handler(req, res) {
    getRepoLanguageData(req.query.repoName)
        .then(data => {
            return data.status === 200 && res.status(200).json(data.results)
        })
        .catch(e => {
            console.log(e)
            return res.status(400)
        });

}