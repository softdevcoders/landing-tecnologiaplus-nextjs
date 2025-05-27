import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function GET() {
  const ico = fs.readFileSync(path.join(process.cwd(), "public/favicon.ico"));
  return new NextResponse(ico, {
    headers: { "Content-Type": "image/x-icon" }
  });
}
