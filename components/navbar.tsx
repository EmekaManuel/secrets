'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NavBar = () => {
 const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

 const pathName = usePathname();
 const router = useRouter();
 const toggleMobileMenu = () => {
  setMobileMenuOpen(!isMobileMenuOpen);
 };

 const closeMobileMenu = () => {
  setMobileMenuOpen(false);
 };

 const navLinks = [
  {
   name: 'Home',
   route: '/',
   external: false,
  },
  {
   name: 'Reveals',
   route: '/reveals',
   external: false,
  },
  {
   name: 'Pricing',
   route: '/pricing',
   external: false,
  },

  {
   name: 'Get Started',
   route: '/auth',
   external: false,
  },
 ];

 return (
  <nav className="bg-white  px-4 md:px-8 lg:px-12  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link
     href="https://flowbite.com/"
     className="flex items-center space-x-3 rtl:space-x-reverse"
    >
     {/* <Image
      width={10}
      height={10}
      src="https://flowbite.com/docs/images/logo.svg"
      className="h-8 w-8"
      alt="Flowbite Logo"
     /> */}
     <span className="self-center font-primary text-[20px] md:text-2xl font-semibold whitespace-nowrap dark:text-white">
      SECRETS OUT
     </span>
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <Button
      onClick={() => router.push('/auth')}
      type="button"
      variant="primary"
      className="text-white focus:ring-4 hidden md:block focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     >
      Sign In
     </Button>
     <button
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-sticky"
      aria-expanded={isMobileMenuOpen}
      onClick={toggleMobileMenu}
     >
      <span className="sr-only">Open main menu</span>
      <svg
       className="w-5 h-5"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 17 14"
      >
       <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
       />
      </svg>
     </button>
    </div>
    <div
     className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
      isMobileMenuOpen ? 'block' : 'hidden'
     }`}
     id="navbar-sticky"
    >
     <ul className="flex md:h-full h-screen flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:bg-transparent  md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {navLinks.map((link, index) => (
       <li key={index}>
        <Link
         href={link.route}
         className={`block py-2 px-3 ${
          link.route === '/auth' && 'hidden'
         } rounded text-black bg-transparent ${
          pathName == link.route && 'bg-gray-100 text-blue-700'
         } hover:text-blue-700 hover:bg-gray-100 `}
         onClick={closeMobileMenu}
         aria-current={link.name === 'Home' ? 'page' : undefined}
        >
         {link.name}
        </Link>
       </li>
      ))}
      <Link
       className="md:hidden flex py-2 px-3 rounded text-gray-900 bg-transparent hover:text-blue-700 hover:bg-gray-100"
       href="/auth"
      >
       Sign In
      </Link>
     </ul>
    </div>
   </div>
  </nav>
 );
};

export default NavBar;
