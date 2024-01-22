import React from 'react'

function page() {
    return (
        <div className='h-[90vh] w-auto bg-blue-950'>
            <div className='flex justify-center pt-40 items-center gap-20'>
                <div className='bg-[#ebc7b5] flex justify-start pt-10 flex-col items-center rounded-3xl h-[50vh] w-[20vw]'>
                      <h1>DESIGINE</h1>
                      <p className='text-2xl mt-7'>How to make a quality <br /> site in WordPress in 40<br /> hours without experience</p>
                      <a href="" className='mt-20 text-green-600 text-xl font-normal'>Read More</a>
                </div>
                <div className='bg-[#ebc7b5] flex justify-start pt-10 flex-col items-center rounded-3xl h-[50vh] w-[20vw]'>
                      <h1>PROGRAMMING</h1>
                      <p className='text-2xl mt-7'>How to make a quality <br /> site in WordPress in 40<br /> hours without experience</p>
                      <a href="" className='mt-20 text-green-600 text-xl font-normal'>Read More</a>
                </div>
                <div className='bg-[#ebc7b5] flex justify-start pt-10 flex-col items-center rounded-3xl h-[50vh] w-[20vw]'>
                      <h1>SEO</h1>
                      <p className='text-2xl mt-7'>How to make a quality <br /> site in WordPress in 40<br /> hours without experience</p>
                      <a href="" className='mt-20 text-green-600 text-xl font-normal'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default page