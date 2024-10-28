import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forgot_Pass() {

    let [flag,setFlag]=useState();

    let sendVerificationCode=(event)=>{
        event.preventDefault();
        toast.dark('Verification code send !',{
            position:'bottom-center'
        })
        setFlag(1);
    }

  return (
    <div className='border w-[28rem] h-[16rem]  flex flex-col mt-10 items-center bg-white'>
      <div className="text-center border p-2 w-full border-b-gray-300 text-2xl">Forgot you Password ?</div>
      <div className=" p-4">
      Enter the email address you used to sign up and we'll send you a link to reset your password.
      </div>
      {!flag && <input placeholder='enter email' className='w-11/12 text-center  h-10 border-2'/>}
      {flag && <input placeholder='enter code' className='w-11/12 text-center  h-10 border-2'/>}
      <button className='w-11/12 h-8 text-center bg-button-color mt-8' onClick={sendVerificationCode}>Submit</button>
      <ToastContainer />
    </div>
  )
}
