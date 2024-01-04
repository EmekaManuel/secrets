'use client';

import AuthForm from '@/components/authForm';
import { Button } from '@/components/ui/button';
import HeroImage from '@/public/assets/Celebration - 1500x1398.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
 const router = useRouter();
 return (
  <section className="bg-gray-200  z-2 h-screen w-full p-4 md:p-8 lg:p-20 ">
   <div className="max-w-screen bg-white rounded-lg justify-between h-full md:flex-row flex flex-col flex-wrap items-start  md:items-center md:justify-between md:mx-auto md:p-4">
    <div className="md:w-1/2 justify-center items-center h-full bg-gray-400/10 rounded-lg w-full max-w-screen gap-7 flex flex-col break-normal ">
     <AuthForm />
    </div>
    <Image
     src={HeroImage}
     className="md:w-1/2 hidden md:flex md:h-full w-fit"
     alt="hero-img"
    />
   </div>
  </section>
 );
};

export default Page;
