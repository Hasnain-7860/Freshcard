import React from 'react'
import { DailyData } from './data'

const Daily = () => {
  return (
    <div className='container'>
        <div>
            <h1>
                Daily Best Sells
            </h1>
        </div>
        <div className='flex gap-6  '>
            {DailyData.map((data)=>(
                <div key={data.id}>
                    
                    <div className='shadow-lg px-6 py-[px]'>
                        <img  src={data.img} alt="" />
                        <h1 className='text-[15px] text-gray-500'>{data.name}</h1>
                        <h1 className='text-[18px]'>{data.company}</h1>
                        <div className='flex justify-between py-[30%] '>
                        <div className='flex gap-2 '>
                        <p>{data.price}</p>
                        <p>{data.oldPrice}</p>
                        </div> 
                        <p1> {data.rating}</p1>
                        </div>
                        <button className='flex flex-col bg-blue-500 justify-center items-center '>{data.cart}</button>
                        <div className='grid grid-cols-4 shadow-lg '>
                        <div className='flex'>
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
            ))}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Daily