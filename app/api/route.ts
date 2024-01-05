import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from './auth/[...nextauth]/route';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
 const session = await getServerSession(authOptions);
 return NextResponse.json({ authenticated: !!session });
}
