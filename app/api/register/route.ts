import prismadb from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
 try {
  const body = await new NextResponse(req.body).json();
  const { email, password } = body;
  console.log(body);

  if (!email || !password) {
   return new NextResponse('Missing Email or Password', { status: 400 });
  }
  const existingUser = await prismadb.user.findUnique({
   where: {
    email,
   },
  });
  if (existingUser) {
   return new NextResponse('Email taken already', { status: 422 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismadb.user.create({
   data: {
    email,
    hashedPassword,
    emailVerified: new Date(),
   },
  });

  return new NextResponse(JSON.stringify(user), {
   status: 200,
   headers: { 'Content-Type': 'application/json' },
  });
 } catch (error) {
  console.error(error);
  return new NextResponse('error kpatakpata', { status: 404 });
 }
}
