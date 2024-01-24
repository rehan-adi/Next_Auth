import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className='h-[15vh] flex flex-col md:flex-row justify-between items-center text-white w-auto bg-blue-950 border-t p-4 md:p-6'>
      <Link href="/">
        <img
          className='mb-4 md:mb-0'
          width={120}
          src='https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3d5880c7e9f_logo-ts-white.png'
          alt='Logo'
        />
      </Link>
      <div className='flex justify-center items-center gap-5'>
        <a href=''>LinkedIn</a>
        <a href=''>GitHub</a>
        <a href=''>Twitter</a>
        <a href=''>Instagram</a>
      </div>
    </div>
  );
}

export default Page;
