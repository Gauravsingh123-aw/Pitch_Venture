import React from 'react'
import { useSelector } from 'react-redux'

function Investment_Portfolio() {
    let {currentUser}=useSelector(state=>state.userLogin)
  return (
    <div className='min-w-full flex flex-wrap flex-row justify-around'>
        <div className='border-2 border-black w-2/4'>asdf</div>
        <div className='border-2 border-black w-1/4 flex flex-col '>
        <p>Your Bank Details</p>
        <p>Bank Name</p>
        <p>Account No</p>
        <p>Account Holder Name</p>
        </div>
      
    </div>
  )
}

export default Investment_Portfolio
