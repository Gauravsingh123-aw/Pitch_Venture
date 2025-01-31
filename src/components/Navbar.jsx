import React from 'react'
import logo from '../assets/logo.jpg'
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';
export default function Navbar(prop) {
  return (
    <div  className={prop.background==="home-bg-class"?'w-full border-gray-300 border-t':'w-full bg-footer bg-opacity-85'}>
          <div className='w-full font-semibold flex flex-row flex-wrap justify-between pt-1  font-poppins' >
        <Link to='/' className='ml-8'><img src={logo} className='w-32 h-16'/></Link>
        <div className='w-1/2 flex flex-row flex-wrap mr-8 p-4 justify-between'>
            <span><Link to="/">Home</Link></span>
            <span><Link to='/project_page'>About</Link></span>
            <span><Link to="/project_search">Projects</Link></span>
            <span>Contact Us</span>
            <span className=' text-orange-700 flex flex-row gap-2'><FcBusinessman className="mt-1"/>My account</span>
        </div>
    </div>
    </div>
  )
}
