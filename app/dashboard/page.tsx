'use client';
import HeaderTitle from '@/components/headerTitle';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
 const router = useRouter();
 return (
  <>
   <section className="bg-gray-200  z-2 h-screen w-full p-4 md:p-8 lg:p-20 ">
    <div className="max-w-screen bg-white rounded-lg  h-full md:flex-col flex flex-col  flex-wrap items-center justify-center md:items-center md:p-4">
     <HeaderTitle title="Welcome to your dashboard" />
     <Button
      onClick={() => {
       signOut({ redirect: false }).then(() => {
        router.push('/');
       });
      }}
     >
      Sign Out
     </Button>
    </div>
   </section>
  </>
 );
};

export default Page;
