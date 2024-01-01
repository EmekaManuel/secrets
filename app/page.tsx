import NavBar from '@/components/navbar';
import React from 'react';

const Home = () => {
  return (
    <div className="bg-dark flex flex-col min-h-screen justify-between items-center px-24 py-10 ">
      <NavBar />
      <div>Hello world</div>
      <div>Hello world</div>
    </div>
  );
};

export default Home;
