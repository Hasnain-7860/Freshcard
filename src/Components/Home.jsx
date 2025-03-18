import React, { useRef } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import './Home.css'
import { GoDotFill } from "react-icons/go";



const Home = () => {
    const slider =useRef();
    let tx=0;
    const slideBackward =()=>{
        if(tx<0){
            tx +=100}
            slider.current.style.transform =  `translateX(${tx}%)`;
        };
        const slideForward =()=>{
            if(tx>-100){
                tx -=100
            }
            slider.current.style.transform =`translatex(${tx}%)`;
        }
        
   

  return (
    <div className='container overflow-x-hidden '>
        <div id='over' ref={slider} className=' flex '>
            <img src={img1} alt="" />
            <img class src={img2} alt="" />
        </div>
        <div className='flex justify-center items-center gap-1 '>
        <GoDotFill onClick={slideBackward} className='text-center' />
        <GoDotFill onClick={slideForward}  />
        </div>
    </div>
    
  )

}
export default Home