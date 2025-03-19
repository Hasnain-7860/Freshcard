import React from 'react'
import { PopularData } from './data'
import { data } from 'autoprefixer'

const Popular = () => {
  return (
    <div className=' container'>
        <div className='py-10 text-[30px] font-semibold'>
            <h1>Popular Products</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 '>
        {PopularData.map((data)=>(
            <div key={data.id} className=''>
                <div className=' rounded-md shadow-lg hover:border-2 border-green-300'><a href="">
                    <img className='' src={data.img} alt="" />
                    <div className='py-5 px-3'>
                        <h1 className='text-[13px] text-gray-500'>{data.name}</h1>
                    <h1 className='font-semibold'>{data.company}</h1>
                    <div className='flex gap-3'>
                    <p>{data.oldprice}</p>
                    <p>{data.price}</p>
                    </div>
                    </div>
                    </a>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Popular