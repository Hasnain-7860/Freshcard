import React, { useRef } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FeaturedData } from './data';
import { data } from 'autoprefixer';
import './Featured.css'
import frimg from '../assets/frimg.png'
import vegimg from '../assets/vegimg.png'




const Featured = () => {
    const slider =useRef();
    let tx=0;
     
    const slideBackward =()=>{
        if(tx<0){
            tx +=15
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideForward =()=>{
        if(tx>-290){
            tx -=22 
        }
        slider.current.style.transform =`translate(${tx}%)`
    }
  return (
    <div>
        <div className='flex justify-between container py-6'>
            <h1 className='text-[30px] font-semibold'>Featured Categories</h1>
            <div className='flex justify-center items-center gap-3'>
            <button onClick={slideBackward} className='p-3 rounded-[50%] bg-gray-400 '><MdKeyboardArrowLeft /></button>
            <button onClick={slideForward} className='p-3 rounded-[50%] bg-gray-400'><MdKeyboardArrowRight /></button>
            </div>
        </div>
        <div className='overflow-hidden mx-[20%]'>
        <div ref={slider} id='fea' className='flex  gap-5   '>
            {FeaturedData.map((data)=>(
            
                <div key={data.id}>
                    <div className='flex flex-col  p-8 rounded-lg shadow-xl'>
                    <img src={data.img} alt="" />
                    <h1>{data.name}</h1></div>
                </div>
            ))}
        </div>
        </div>
        <div>
            <div className='container grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <img src={frimg} alt="" />
                <img src={vegimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured