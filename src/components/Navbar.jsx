import React from 'react'
import logo from '../assets/logo.jpg'
import { FcBusinessman } from "react-icons/fc";
export default function Navbar() {
  return (
    <div className='w-full font-semibold flex flex-row justify-between border-gray-400 pt-1 border-t-2 '>
        <div className='ml-8'><img src={logo} className='w-32 h-16'/></div>
        <div className='w-1/2 flex flex-row mr-8 p-4 justify-between'>
            <span>Home</span>
            <span>About</span>
            <span>Projects</span>
            <span>Contact Us</span>
            <span className=' text-orange-700 flex flex-row gap-2'><FcBusinessman className="mt-1"/>My account</span>
        </div>
    </div>
  )
}
