import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt, { compare } from 'bcryptjs';

import prismadb from '@/lib/prismadb';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
 adapter: PrismaAdapter(prismadb),
 providers: [
  CredentialsProvider({
   name: 'Credentials',
   credentials: {
    email: { label: 'Email', type: 'text', placeholder: 'Email' },
    password: { label: 'Password', type: 'password' },
   },
   async authorize(credentials, req) {
    if (!credentials?.email || !credentials?.password) {
     throw new Error('Email and Password Required');
    }

    const user = await prismadb.user.findUnique({
     where: { email: credentials.email },
    });

    if (!user || !user.hashedPassword) {
     throw new Error("Email doesn't exist");
    }
    const isCorrectPassword = await compare(
     credentials.password,
     user.hashedPassword,
    );

    if (!isCorrectPassword) {
     throw new Error('Incorrect Password');
    }

    return user;
   },
  }),
 ],
 session: {
  strategy: 'jwt',
 },
 secret: process.env.NEXTAUTH_SECRET,
 debug: process.env.NODE_ENV === 'development',
};

export default NextAuth(authOptions);
