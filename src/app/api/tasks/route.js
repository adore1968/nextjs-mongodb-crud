import connectDB from "@/database/connection";
import Task from "@/database/models/Task";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    console.log(title, description);
    const newTask = new Task({ title, description });
    const result = await newTask.save();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
