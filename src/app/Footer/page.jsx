import React from 'react'
import Link from 'next/link'

function page() {
    return (
        <div className='h-[10vh] flex justify-around items-center  text-white w-auto bg-blue-950 border-t '>
            <Link href="/">
                <img width={120} src='	https://assets.website-files.com/5c6648378238e311a00c7e61/5c6648378238e3d5880c7e9f_logo-ts-white.png' />
            </Link>
             <div className='flex justify-center items-center gap-5'>
                <a href="">Linkdin</a>
                <a href="">GitHub</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
             </div>
        </div>
    )
}

export default page