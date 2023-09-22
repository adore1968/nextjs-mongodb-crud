import { NextResponse } from "next/server";

export function GET(req) {
  try {
    return NextResponse.json({ message: "Hello world" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
