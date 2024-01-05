import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Page = async () => {
 const session = await getServerSession(authOptions);
 return (
  <div>
   <p>Main</p>
   <pre>{JSON.stringify(session)}</pre>
  </div>
 );
};

export default Page;
