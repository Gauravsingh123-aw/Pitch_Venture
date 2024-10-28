import React from 'react'
import { PiSignIn } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
export default function Top() {
  return (
    <div className='w-full font-semibold flex flex-row justify-between p-4'>
      <div className='flex flex-row'>Welcom to Pitch Venture. A place to invest and seed.
        <span className='flex flex-row gap-2 bg-green-700 ml-4 text-white px-2'>Sign up now<PiSignIn className="mt-1"/></span>
      </div>
      <div className='flex flex-row w-1/3 justify-between mr-10'>
        <span className='flex flex-row gap-2'><IoCall className="mt-1"/>1234-22-33</span>
        <span className='flex flex-row gap-2'><IoMdMail className="mt-1"/>support@pitchventure.com</span>
      </div>
    </div>
  )
}
