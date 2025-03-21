import React from 'react'

const Docs = () => {
  return (
    <div className='container flex flex-col gap-7 py-20 '>
        <div className='flex flex-col gap-3'> 
            <h1 className='text-[40px] font-bold'>Introduction</h1>
            <p className='text-[20px] text-gray-600'>A professional FreshCart Next.js Kit that comes with plenty of ready-to-use components that will help you to build more beautiful application (web app) and frontend pages.</p>
            <p className='text-[15px] text-gray-600'>FreshCart Next.js theme is built with the most popular front-end framework <span className='text-green-500'>ReactJS Bootstrap</span>  with react-scripts.</p>
            <p className='text-[15px] text-gray-600'>This doc will guide you to understand how FreshCart-Next.js theme is organized, basics of how to customize, how to run, how to build, update, and integrate API!.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[40px] font-semibold'>Setting up local development</h1>
            <p className='text-[15px] text-gray-600'>FreshCart Next.js is built using modern development toolset. For setting up local development you need core tool i.e. Node JS. <span className='text-green-500'> Read More</span></p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[40px] font-semibold'>Customize your theme</h1>
            <p className='text-[15px] text-gray-600'>Now that you’ve got your theme running and understand the compiling process, let’s discuss the proper ways to edit and customize your theme. <span className='text-green-500'>Read More</span> </p>
        </div>
    </div>
  )
}

export default Docs