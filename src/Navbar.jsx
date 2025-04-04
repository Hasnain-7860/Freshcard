import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoXbox } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';







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
        <div className='  hidden  lg:flex items-center gap-3 p-3  ml-[20px] shadow-xl  text-gray-400 hover:bg-gray-400 hover:text-black rounded-md '>
        <LuMapPin />
        <h1>Location</h1>
        </div>
       </div>
       </div>
       <div className='flex text-green-500 gap-5 text-[25px]'> 
       <div className='relative' ><CiHeart /> <h1 className=' text-white bg-green-600 rounded-[50%] p-1 text-[8px] top-[-4px] right-[-4px]   absolute'>7</h1></div>
       <RiContactsLine />
       <div className='relative'><BsCart3 /> <h1 className='text-white bg-green-600 rounded-[50%] p-1 text-[8px] top-[-4px] right-[-4px] absolute'>5</h1> </div>
       <RxHamburgerMenu  className='text-green  lg:hidden'/>


       </div>
    </div>
    <div className='container'>
        <div className='hidden  lg:flex items-center gap-5 text-[15px] mt-5'>
            <button className='flex justify-center items-center shadow-lg bg-green-500 text-white p-3 gap-3 rounded-lg  px-8 '><IoLogoXbox /> <h1>All Departments</h1></button>
            <button className='flex justify-center items-center gap-2'> <Link to="/Home">Home</Link> <IoIosArrowDown />
            {/* <div drop>
              <ul>
                <li><a href="">Home Defoult</a></li>
                <li><a href="">Home Defoult</a></li>
                <li><a href="">Home Defoult</a></li>
                <li><a href="">Home Defoult</a></li>
                <li><a href="">Home Defoult</a></li>
              </ul>
            </div> */}
            </button>
            <button className='flex justify-center items-center gap-2'><Link to="/Shop">Shop</Link> <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'> <Link to="/Stores">Stores</Link> <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'><Link to="/Menu"> Mega menu</Link> <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'><Link to="/Pages">Pages </Link><IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'><Link to="/Account">Account</Link>  <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'><Link to="/Deshboard">Dashboard</Link> <IoIosArrowDown /></button>
            <button className='flex justify-center items-center gap-2'> <Link to="/Doc">Docs</Link> <IoIosArrowDown /></button>
        </div>
    </div>
    <hr className='mt-4' />
    </div>
  )
}

export default Navbar



