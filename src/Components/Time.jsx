import React from 'react'
import { TimeData } from './data'

const Time = () => {
  return (
    <div className='grid grid-cols-2  py-40 container  lg:grid-cols-4 '>
        {TimeData.map((data)=>(
            <div key={data.id}>
                <div className='px-5 '>
                    
                    <h1 className='text-[20px] py-3'>{data.name}</h1>
                    <p className='text-gray-500 text-[14px]'>{data.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Time