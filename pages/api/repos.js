// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from "@/server"

export default function handler(req, res) {
    getData()
        .then(data => {
            return data.status === 200 && res.status(200).json(data.results)
        })
        .catch(e => {
            console.log(e)
            return res.status(400)
        });

}
