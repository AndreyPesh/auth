import NextAuth, { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@/utils/database';
import User from '@/models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session(
      params: { session: Session }
    ) {
      console.log('Called session');
      
      // const { session } = params;
      // const sessionUser = await User.findOne({ email: session?.user?.email });

      //@ts-ignore
      // session!.user!.id = sessionUser._id.toString();
      return session;
    },
    //@ts-ignore
    async signIn({ profile }: { profile: { email: string; name: string } }) {
      try {
        // await connectDB();

        // const isUserExist = await User.findOne({ email: profile.email });

        // if (!isUserExist) {
        //   await User.create({
        //     email: profile.email,
        //     username: profile.name,
        //   });
        // }

        return true;
      } catch (error) {
        console.log('user is not create');
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
