import User from "@/models/user";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

function isValidUUID(uuid: string): boolean {
  const regexExp =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return regexExp.test(uuid);
}

export const POST = async (request: any) => {
  const { email, password, userId } = await request.json();

  if (!isValidUUID(userId)) {
    return new NextResponse("Invalid UUID format", { status: 400 });
  }

  await connect();

  const exisitingUser = await User.findOne({ email });

  if (exisitingUser) {
    return new NextResponse("Email already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({ email, password: hashedPassword, userId });

  try {
    await newUser.save();
    return new NextResponse("User is created", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
