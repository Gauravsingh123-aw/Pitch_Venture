import React from 'react'
import logo from '../assets/logo.jpg'
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearState } from '../redux/slices/userLoginSlice';
import { clearStartup } from '../redux/slices/startupSlice';
export default function Navbar(prop) {
  let {loginStatus,currentUser}=useSelector(state=>state.userLogin)
  let dispatch=useDispatch()
  useEffect(()=>{},[loginStatus])
  function handleClick(){
    dispatch(clearState());
    if(currentUser.user_type=='startupFounder'){
        dispatch(clearStartup());
    }
  }
  return (
    <div  className={prop.background==="home-bg-class"?'w-full border-gray-300 border-t':'w-full bg-footer bg-opacity-85'}>
          <div className='w-full font-semibold flex flex-row flex-wrap justify-between pt-1  font-poppins' >
        <Link to='/' className='ml-8'><img src={logo} className='w-32 h-16'/></Link>
        <div className='w-1/2 flex flex-row flex-wrap mr-8 p-4 justify-between'>
            {loginStatus==false && <><span><Link to="/">Home</Link></span>
            <span><Link to='/project_page'>About</Link></span>
            <span><Link to="/project_search">Projects</Link></span>
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/registration">Register</Link></span></> 
            }
            {(loginStatus==true && currentUser.user_type==='Investor') &&
             <>
             <span><Link to="/project_search">Latest Startups</Link></span>
              <span><Link to='/investment_portfolio'>Investment Portfolio</Link></span>
              <span><Link to="">Watchlist</Link></span>
              <span className='cursor-pointer' onClick={handleClick}>Logout</span>
              <span><Link to="investor_detail">Profile</Link></span>
             </>
            }
            {(loginStatus==true && currentUser.user_type==='startupFounder') &&
                <>
                <span><Link to="dashboard_founder">Dashboard</Link></span>
                 <span><Link to='your_startups'>Your Startups</Link></span>
                 <span><Link to="">Chats</Link></span>
                 <span><Link to="">Stats</Link></span>
                 <span className='cursor-pointer' onClick={handleClick}>Logout</span>
                </>
            }
        </div>
    </div>
    </div>
  )
}