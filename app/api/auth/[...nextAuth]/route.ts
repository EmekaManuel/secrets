import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prismadb from '@/lib/prismadb';
import { compare } from 'bcrypt';
export const authOptions: NextAuthOptions = {
 session: {
  strategy: 'jwt',
 },
 providers: [
  CredentialsProvider({
   name: 'sign in',
   credentials: {
    email: { label: 'Email', type: 'email', placeholder: 'manuel@gmail.com' },
    password: {
     label: 'Password',
     type: 'password',
    },
   },
   async authorize(credentials) {
    if (!credentials?.email || credentials?.password) {
     return null;
    }

    const user = await prismadb.user.findUnique({
     where: {
      email: credentials.email,
     },
    });

    if (!user) {
     return null;
    }
    if (!user || !user.hashedPassword) {
     throw new Error("User doesn't exist");
    }

    const isCorrectPassword = await compare(
     credentials.password,
     user.hashedPassword,
    );

    if (!isCorrectPassword) return null;
    return user;
   },

   // end of auhorize
  }),
 ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
