import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.github.com/users/pdiegel/repos");
  if (!response.ok) {
    const errorData = await response.json();
    return NextResponse.json({ error: errorData });
  }
  const data = await response.json();
  return NextResponse.json(data);
}
