// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import user from "@/models/user";
import connect from "@/utils/db";

export const POST = async (request: any) => {
  const { email, links } = await request.json();

  await connect();

  try {
    // Correctly map 'links' to 'linksArray' using the actual 'link' object in the map function
    const linksArray = links.map(
      (link: { platform: string; url: string; id: string }) => ({
        name: link.platform,
        url: link.url,
        id: link.id,
      })
    );

    const updatedUser = await user.findOneAndUpdate(
      { email: email },
      { $set: { links: linksArray } },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse("Links added successfully", { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 }); // Ensure that 'error.message' is used to avoid sending raw error objects
  }
};
