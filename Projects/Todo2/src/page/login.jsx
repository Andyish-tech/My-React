import React from 'react'

export default function Login() {
  return (
    <div className='bg-amber-50 justify-center p-50'>
        <form action="" className=' gap-2.5 rounded-sm flex flex-col items-center '>
          <h1 className='text-center font-bold text-3xl p-10'>Log In</h1>
           <label className='font-bold pr-60'>Email or username</label>
            <input type="text" className='border-b-2 border-gray-300 p-2.5 bg-gray-100 rounded-b-sm w-100' placeholder='Email or username' />
            <label className='font-bold ml-1 pr-80'>Password</label>
            <input type="text"  className='border-b-2 border-gray-300 p-2.5 bg-gray-100 rounded-b-sm w-100' placeholder='Password'/>
            <input type="submit" value={"Login"} className='bg-black text-white font-bold w-30 flex self-center p-3 rounded-md' />
        </form>
    </div>
  )
}
