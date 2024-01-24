"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='h-[10vh] flex justify-between items-center px-6 md:px-36 fixed w-full bg-blue-950 text-white'>
      <Link href='/'>
        <img
          className='w-28 md:w-140'
          src='https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3d5880c7e9f_logo-ts-white.png'
          alt='Logo'
        />
      </Link>
      <div className='md:hidden'>
        <button className='text-white' onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseLine size={30} />
          ) : (
            <RiMenu3Line size={30} />
          )}
        </button>
      </div>
      <div
        className={`fixed right-0 top-0 h-[100vh] bg-black z-50 text-white w-[65vw] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform ease-in duration-300`}
      >
        <div className='md:hidden flex flex-col items-end p-8'>
          <button className='text-white mb-4' onClick={toggleMenu}>
            <RiCloseLine size={30} />
          </button>
          <Link className='hover:text-orange-600 mb-6' href='/Service'>
            Service
          </Link>
          <Link className='hover:text-orange-600 mb-6' href='/Blog'>
            Blog
          </Link>
          <Link className='hover:text-orange-600 mb-6' href='/Projects'>
            Projects
          </Link>
          <Link className='hover:text-orange-600 mb-6' href='/FAQ'>
            FAQ's
          </Link>
          <button className='px-5 py-2 text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'>
            <span className='relative transition-all ease-in duration-75 group-hover:bg-opacity-0'>
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
