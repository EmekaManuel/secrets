'use client';
import Image from 'next/image';

import HeroImage from '@/public/gc3.png';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

interface Props {
 title: string;
 subtitle: string;
 btnActionText: string;
}

const HeroSection = ({ title, subtitle, btnActionText }: Props) => {
 const router = useRouter();

 return (
  <section className="bg-white z-2 mt-14  md:mt-14 w-full p-4 md:p-8 lg:p-12 ">
   <div className="max-w-screen-xl justify-between h-full md:flex-row  flex flex-col flex-wrap items-start  md:items-center md:justify-between md:mx-auto md:p-4">
    <div className="md:w-1/2 w-full max-w-screen gap-7 flex flex-col break-normal ">
     <h1 className="md:text-5xl text-2xl md:text-left  text-center w-full lowercase font-bold md:font-mono font-mono text-wrap tracking-wider leading-tight ">
      {title}
     </h1>
     <p className="md:text-[18px] text-[14px]">{subtitle}</p>
     <Button
      onClick={() => router.push('/auth')}
      type="button"
      variant="primary"
      className="text-white md:w-1/2 w-full focus:ring-4  md:block focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     >
      Get started
     </Button>
    </div>
    <Image
     src={HeroImage}
     className="md:w-1/2 md:h-full  w-full"
     alt="hero-img"
    />
   </div>
  </section>
 );
};

export default HeroSection;
