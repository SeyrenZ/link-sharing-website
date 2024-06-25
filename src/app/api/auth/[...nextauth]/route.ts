import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import user from "@/models/user";
import connect from "@/utils/db";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const User = await user.findOne({ email: credentials.email });
          if (User) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              User.password
            );
            if (isPasswordCorrect) {
              return User;
            }
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
