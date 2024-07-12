import { NextRequest, NextResponse } from "next/server";
import user from "@/models/user";
import connect from "@/utils/db";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email"); // Extract 'email' from query parameters

  await connect(); // Ensure the database connection is established

  try {
    if (!email) {
      return new NextResponse("Email parameter is missing", { status: 400 });
    }

    const foundUser = await user.findOne({ email: email });
    if (!foundUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Assuming 'links' is an array of objects with 'url' and 'platform' properties
    const linkData = foundUser.links.map(
      (link: { url: string; name: string }) => ({
        url: link.url,
        platform: link.name,
      })
    );

    return new NextResponse(JSON.stringify(linkData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error retrieving link data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
