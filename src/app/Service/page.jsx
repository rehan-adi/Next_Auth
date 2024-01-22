import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 flex justify-start items-center px-36 gap-20 text-white h-[100vh] w-auto'>
         <div className='mt-12'>
             <h1 className='text-4xl'>Professional courseson <br /> creating websites</h1>
             <p className='mt-8 mb-20'>Our courses are complete professional courses of high quality that include a <br /> set of video  lessons, practical and training materials.</p>
         </div>
         <div className='mb-16'>
            <img src="https://assets.website-files.com/61e57244c283e5456130c457/61e945a0392884655da8bf78_step_illustr.svg" width={555} alt="" />
         </div>
    </div>
  )
}

export default page