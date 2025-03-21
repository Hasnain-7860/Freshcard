import React from 'react'
import { PagesData } from './data'
import { data } from 'react-router-dom'

const Pages = () => {
  return (
    <div className='container '>
        <div className='py-9'>
        <div className='py-10'>
            <h1 className='text-[45px] font-semibold'>FreshCart Blog</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 ' >
            <div className='w-[43vw] hover:scale-x-105 '>
                <img src="https://freshcart-next-js.vercel.app/images/blog/blog-img-1.jpg" alt="" />
            </div>
            <div className=' flex flex-col justify-center lg:w-[70%] lg:ml-[50%]'>
                <h1 className='text-[30px] font-semibold'>Harissa Chickpeas with Whipped Feta</h1>
                <p className='font-semibold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque bibendum egestas sed quis justo. Integer non rhoncus diam. Nullam eget dapibus lectus, vitae condimentum sem.</p>
                <div className='flex  justify-between font-semibold text-gray-500 py-6'>
                    <p>22 April 2023</p>
                    <p >Read time: <span className='text-black' > 12min </span></p>
                </div>
            </div>
        </div>
        </div>
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3   mt-4 shadow-lg  gap-8 mb-10'>
               {PagesData.map((data)=>(
               <div className='p-3' key={data.id}>
                    <div>
                    <div className='hover:scale-x-105'>
                        <img  src={data.img} alt="" />
                        </div>
                        <div>
                            <h1>{data.name}</h1>
                            <h1>{data.heading}</h1>
                            <p>{data.text}</p>
                        </div>
                        </div>

             <div className='flex justify-between'>
                <div>
                    {data.date}
                </div>
                <div>
                    {data.min}
                </div>
            </div>
                        
                </div>
               
               ))}
               
            </div>
           
        </div>

    </div>
  )
}

export default Pages