export async function getData() {
    const authToken = process.env.Token;

    const req = await fetch("https://api.github.com/users/pdiegel/repos", {
        "Authorization": `Bearer ${authToken}`
    });

    const status = req.status;
    console.log(status);

    const data = { "status": status, "results": await req.json() };

    return data;
}