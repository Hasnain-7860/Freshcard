import React from 'react'
import { DailyData } from './data'
import sells from '../assets/sells.png'

const Daily = () => {
  return (
    <div className='container'>
        <div>
            <h1 className='text-[30px] font-semibold py-7'>
                Daily Best Sells
            </h1>
        </div>
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-4  '>
        <img className='rounded-md h-[88vh] lg:h-[45vh]' src={sells} alt="" />
            {DailyData.map((data)=>(
                <div key={data.id}>
                    
                    <div className='shadow-lg  rounded-lg  '>
                       
                        <img className='rounded-md pl-5'  src={data.img} alt="" />
                        <div className='flex flex-col px-5 '>
                        <h1 className='text-[15px] text-gray-500'>{data.name}</h1>
                        <h1 className='text-[18px]'>{data.company}</h1>
                        <div className='flex justify-between  '>
                        <div className='flex gap-2'>
                        <p>{data.price}</p>
                        <p>{data.oldPrice}</p>
                        </div> 
                        <p1> {data.rating}</p1>
                        </div>
                        <div className='flex flex-col'>
                        <button className=' bg-blue-500 justify-center items-center text-center rounded-md shadow-md  py-2 lg:py-3   '>{data.cart}</button>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-4    mt-6 '>
                        <div className=' shadow-xl '>
                            <div>
                            <h1>{data.year}
                               </h1>
                            <p>{data.days}</p>
                            
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                            <h1>{data.two}
                               </h1>
                            <p>{data.hour}</p>
                            
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                            <h1>{data.Three}
                               </h1>
                            <p>{data.min}</p>
                            
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                            <h1>{data.four}
                               </h1>
                            <p>{data.sec}</p>
                            
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Daily