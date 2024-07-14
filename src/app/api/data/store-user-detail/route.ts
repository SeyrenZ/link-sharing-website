// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import user from "@/models/user";
import connect from "@/utils/db";

export const POST = async (request: any) => {
  const { email, profileDetails } = await request.json();

  await connect();

  try {
    // Assuming profileDetails is an object and not an array
    const updatedUser = await user.findOneAndUpdate(
      { email: email },
      { $set: { profileDetails: profileDetails } }, // Directly use profileDetails object
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse("Profile details updated successfully", {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
