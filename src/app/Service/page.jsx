import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 flex flex-col justify-center items-center gap-20 text-white min-h-screen w-auto'>
         <div className='pt-16'>
             <h1 className='text-xl'>Professional courseson  creating <br /> websites</h1>
             <p className='mt-8 '>Our courses are complete professional cour<br />ses of high quality that include a set of video <br /> lessons, practical and training materials.</p>
         </div>
         <div className='mb-5'>
            <img src="https://assets.website-files.com/61e57244c283e5456130c457/61e945a0392884655da8bf78_step_illustr.svg" width={200} alt="" />
         </div>
    </div>
  )
}

export default page