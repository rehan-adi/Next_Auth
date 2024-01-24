import React from 'react'

function page() {
    return (
        <div className='h-[210vh] w-auto bg-blue-950'>
            <div className='flex justify-center pt-32 flex-col items-center gap-20'>
                <div className='bg-[#ebc7b5] flex justify-center pt-10 flex-col items-center rounded-3xl h-[50vh] w-[55vw]'>
                      <h1>DESIGINE</h1>
                      <p className='text-xl ml-4 mt-7'>How to make a qual<br />ity site in WordPress <br />in 40 hours without experience</p>
                      <a href="" className='mt-16 text-green-600 text-xl font-normal'>Read More</a>
                </div>
                <div className='bg-[#ebc7b5] flex justify-center pt-10 flex-col items-center rounded-3xl h-[50vh] w-[55vw]'>
                      <h1>PROGRAMMING</h1>
                      <p className='text-xl ml-4 mt-7'>How to make a qual<br />ity site in WordPress <br />in 40 hours without experience</p>
                      <a href="" className='mt-16 text-green-600 text-xl font-normal'>Read More</a>
                </div>
                <div className='bg-[#ebc7b5] flex justify-center pt-10 flex-col items-center rounded-3xl h-[50vh] w-[55vw]'>
                      <h1>SEO</h1>
                      <p className='text-xl ml-4 mt-7'>How to make a qual<br />ity site in WordPress <br />in 40 hours without experience</p>
                      <a href="" className='mt-16 text-green-600 text-xl font-normal'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default page