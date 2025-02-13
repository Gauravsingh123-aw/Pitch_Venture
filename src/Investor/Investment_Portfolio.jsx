import React from 'react'
import { useSelector } from 'react-redux'

function Investment_Portfolio() {
    let {currentUser}=useSelector(state=>state.userLogin)
  return (
    <div className='min-w-full flex flex-wrap flex-row justify-around mt-10'>
        <div className='border-2 border-black w-1/12 flex flex-col '>
        <p>Your Bank Details</p>
        <p>Bank Name</p>
        <p>Account No</p>
        <p>Account Holder Name</p>
        </div>
        <div className='border-2 border-black w-10/12'>
        <p>Your Investments :</p>
        </div>

      
    </div>
  )
}

export default Investment_Portfolio
