import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-[10vh] flex justify-between px-36 items-center  w-auto bg-blue-950 text-white'>
      <Link href="/">
        <img width={140} src='	https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3d5880c7e9f_logo-ts-white.png' />
      </Link>
      <div className='flex items-center gap-12'>
        <Link className='hover:text-orange-600' href="/Service">Service</Link>
        <Link className='hover:text-orange-600' href="/HWW">How We Work</Link>
        <Link className='hover:text-orange-600' href="/Projects" >Projects</Link>
        <Link className='hover:text-orange-600' href="/FAQ">FAQ's</Link>
        <button class="relative inline-flex  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Login
          </span>
        </button>
      </div>
    </div>
  )
}

export default page