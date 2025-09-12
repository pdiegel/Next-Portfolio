import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const repoName = searchParams.get("repoName");

  if (!repoName) {
    return NextResponse.json(
      { error: "Missing repoName parameter" },
      { status: 400 },
    );
  }

  const response = await fetch(
    `https://api.github.com/repos/pdiegel/${repoName}/languages`,
  );
  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData });
  }
  const data = await response.json();
  return NextResponse.json(data);
}
