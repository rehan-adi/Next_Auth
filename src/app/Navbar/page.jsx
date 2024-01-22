import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-[10vh] flex justify-between px-36 items-center  w-auto bg-blue-950 text-white'>
             <h1 className='text-2xl font-semibold'><span className='text-blue-500'>Vs</span>Studio</h1>
         <div className='flex items-center gap-12'>
            <Link className='hover:text-orange-600' href="/Service">Service</Link>
            <Link className='hover:text-orange-600' href="/HWW">How We Work</Link>
            <Link className='hover:text-orange-600' href="/Projects" >Projects</Link>
            <Link className='hover:text-orange-600' href="/FAQ">FAQ's</Link>
         <button className='bg-black rounded-full px-8 py-3'>Login</button>
         </div>
    </div>
  )
}

export default page