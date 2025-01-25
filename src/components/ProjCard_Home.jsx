import React from 'react'
import { useState } from 'react';
import { RiCurrencyLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";

function ProjCard_Home(props) {
  const [collected, setCollected] = useState(600); // Example: 500 collected
  const goal = 1000; // Example goal: 1000

  // Calculate the completion percentage
  const percentage = Math.min((collected / goal) * 100, 100);
  return (
    <div className='w-1/6 flex flex-col flex-wrap gap-4  border shadow-lg border-black pb-2  mt-8 hover:shadow-2xl'>
        {/* photo project heading fundbar fundraised dayleft founder name */}
        <img src={props.props.img} className='h-28 w-1/1  m-2' ></img>
        <span className='text-footer font-bold ml-4 text-lg '>{props.props.field}</span>
        <span className=' font-semibold text-md ml-4 break-words overflow-hidden'>{props.props.project_head}</span>
        <div className="w-11/12 bg-gray-300 rounded-full h-3 overflow-hidden ml-4">
        {/* Progress bar */}
        <div
          className="bg-[#fe7469] h-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        >
          </div></div>
        <span className='ml-4 text-sm font-semibold'><RiCurrencyLine className='inline'/> Total Raised{props.props.fundraised}</span>
        <span className='ml-4 text-sm font-semibold'><FaCalendarDays className='inline'/> {props.props.days_left} days left</span>
        <span className='ml-4 text-sm font-semibold flex flex-row  items-center gap-5'>
          <img src='https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?w=1060'  className='w-12 h-12 rounded-3xl'/>
          {props.props.founder_name}
        </span>


    </div>
  )
}

export default ProjCard_Home
