import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoXbox } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";







const Navbar = () => {
  return (
    <div>
    <div className=' mt-[20px]  container flex justify-between items-center'>
        <div className='flex gap-8  '>
        <img src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg " alt="" />
       <div className='flex'>  
        <div className=' hidden lg:w-[500px] h-[50px] lg:flex items-center  shadow-2xl justify-between rounded-md '  >
            <input className='w-[450px] outline-none ml-[10px]' type="Search" placeholder='Search for products' />
            <CiSearch  className='text-[23px] flex  '/>
        </div>
        <div className='  hidden  lg:flex items-center gap-3 p-3  ml-[20px] shadow-xl  text-gray-400 '>
        <LuMapPin />
        <h1>Location</h1>
        </div>
       </div>
       </div>
       <div className='flex text-green-500 gap-5'> 
       <CiHeart />
       <RiContactsLine />
       <BsCart3 />
       <RxHamburgerMenu  className='text-green  lg:hidden'/>


       </div>
    </div>
    <div className='container'>
        <div className='hidden  lg:flex items-center gap-5 text-[15px] mt-5'>
            <button className='flex justify-center items-center shadow-lg bg-green-500 text-white p-3 gap-3 rounded-lg  px-8 '><IoLogoXbox /> <h1>All Departments</h1></button>
            <button className='flex justify-center items-center gap-2'>Home <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Shop <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Stores <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Mega menu <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Pages <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Account <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Dashboard <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'>Docs <IoIosArrowDown /></button>
        </div>
    </div>
    <hr className='mt-4' />
    </div>
  )
}

export default Navbar