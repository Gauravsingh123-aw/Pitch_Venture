import React from 'react'
import { PiSignIn } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export default function Top(prop) {

  return (
    <div className={prop.background==="home-bg-class"?'w-full':'w-full bg-footer opacity-80'}>
      <div className='font-semibold flex flex-row flex-wrap justify-between p-4 pl-9 font-poppins'>
      <div className='flex flex-row'>Welcome to Pitch Venture. A place to invest and seed.
        <span className='flex flex-row gap-2 bg-green-700 ml-4 text-white px-2 '><NavLink to='/registration' className="flex gap-2  items-center" >Sign up now<PiSignIn /></NavLink></span>
      </div>
      <div className='flex flex-row w-1/3 justify-between '>
        <span className='flex flex-row flex-wrap gap-2'><IoCall className="mt-1"/>1234-22-33</span>
        <span className='flex flex-row flex-wrap gap-2'><IoMdMail className="mt-1 text-wrap"/>support@pv.com</span>
      </div>
    </div>
    </div>
    

  )
}
