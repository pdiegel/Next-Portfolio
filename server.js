const authToken = process.env.Token;

export async function getData() {
    const req = await fetch("https://api.github.com/users/pdiegel/repos", {
        "Authorization": `Bearer ${authToken}`
    });

    const status = req.status;
    console.log(status);

    const data = { "status": status, "results": await req.json() };

    return data;
}

export async function getRepoLanguageData(repoName = '') {
    if (repoName === '') {
        return { "status": 400, "results": [] };
    }

    const req = await fetch(`https://api.github.com/repos/pdiegel/${repoName}/languages`, {
        "Authorization": `Bearer ${authToken}`
    });

    const status = req.status;

    const data = { "status": status, "results": await req.json() };

    return data;
}