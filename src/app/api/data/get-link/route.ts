import { NextResponse } from "next/server";
import user from "@/models/user";
import connect from "@/utils/db";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email"); // Get 'email' from URL parameters

  await connect();

  try {
    if (!email) {
      return new NextResponse("Email parameter is missing", { status: 400 });
    }

    const foundUser = await user.findOne({ email: email });
    if (!foundUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const userLinks = foundUser.links;
    return new NextResponse(JSON.stringify(userLinks), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
