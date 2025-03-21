import React from 'react'

const Deshboard = () => {
  return (
    <div>
        <div className=' container grid grid-cols-1 lg:grid-cols-2   py-10'>
            <div>
                <img src="https://freshcart-next-js.vercel.app/images/svg-graphics/signin-g.svg" alt="" />
            </div>
            <div className='flex flex-col pt-10'>
                <h1 className='text-[30px] font-bold'>Sign in to FreshCart</h1>
                <p className='font-semibold  text-gray-500'>Welcome back to FreshCart! Enter your email to get started.</p>
               <div className='flex flex-col py-7'>
                <div className='bg-white border-solid border-2 border-black h-12 w-[75%] text-center rounded-sm'>
                    <input className='pl-5 w-[100%] h-11 outline-none ' type="text" name='Email' placeholder='Email' />
                   </div>
                   <div className='bg-white border-solid border-2 border-black h-12 w-[75%] rounded-sm mt-4'  >
                <input className='pl-5 w-[100%] h-11 outline-none ' type="text" name="password" placeholder='*****' />
                </div>
                </div>
             <div >
                <button className='flex flex-col text-center justify-center w-[75%] bg-green-600  h-[50px] text-white font-bold rounded-md '> Sign In</button>
                </div>
                <p className='font-semibold'>Don’t have an account? <span className='text-green-500'>Sign Up</span> </p>

            </div>
        </div>
    </div>
  )
}

export default Deshboard