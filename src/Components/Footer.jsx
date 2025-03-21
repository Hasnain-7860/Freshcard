import React from 'react'
import { FooterData } from './data'
import { data } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-green-50'>
        <div className='grid grid-cols-2 container md:grid-cols-4  lg:grid-cols-6  py-10 gap-15'>
        {FooterData.map((data)=>(
            <div key={data.id}>
               <div className='flex flex-col gap-10'>
                <h1 className='font-bold'>{data.name}</h1>
               <ul className='flex flex-col gap-2 text-gray-500 font-semibold'>
                        <li>{data.text1}</li>
                        <li>{data.text2}</li>
                        <li>{data.text3}</li>
                        <li>{data.text4}</li>
                        <li>{data.text5}</li>
                        <li>{data.text6}</li>
                        <li>{data.text7}</li>
                        <li>{data.text8}</li>
                        <li>{data.text9}</li>
                        <li>{data.text10}</li>

                        
                    </ul>
               </div>
            </div>
        ))}
        </div>
        <hr />
        
    </div>
  )
}

export default Footer