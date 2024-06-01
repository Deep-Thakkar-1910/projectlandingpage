// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/DbConnect";
import Email from "../../../lib/EmailModel";
import mongoose from "mongoose";
import { error } from "console";

export async function POST(req: Request) {
  await dbConnect();

  const email = await req.json();
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 },
    );
  }

  const doesEmailExist = await Email.findOne({ email });

  if (doesEmailExist) {
    return NextResponse.json(
      { success: false, error: "Email already registered" },
      { status: 400 },
    );
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();

    return NextResponse.json(
      { success: true, message: "Email Registered" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
