import React from 'react'
import logo from '../assets/logo.jpg'
import { FcBusinessman } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearState } from '../redux/slices/userLoginSlice';
import { clearStartup } from '../redux/slices/startupSlice';
export default function Navbar(prop) {
  let { loginStatus, currentUser } = useSelector(state => state.userLogin);
  let dispatch = useDispatch();
  useEffect(() => { }, [loginStatus]);
  function handleClick() {
    dispatch(clearState());
    if (currentUser.user_type === 'startupFounder') {
      dispatch(clearStartup());
    }
  }
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur border-b border-slate-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        <Link to='/' className="flex items-center gap-2">
          <img src={logo} className="w-28 h-14 rounded-lg shadow-sm border border-slate-200" alt="Pitch Venture Logo" />
          <span className="text-xl font-bold text-green-700 tracking-tight hidden md:block">Pitch Venture</span>
        </Link>
        <div className="flex flex-row flex-wrap gap-6 md:gap-8 items-center font-medium text-slate-700">
          {loginStatus === false && <>
            <Link to="/" className="hover:text-green-700 transition-colors">Home</Link>
            <Link to='/project_page' className="hover:text-green-700 transition-colors">About</Link>
            <Link to="/project_search" className="hover:text-green-700 transition-colors">Projects</Link>
            <Link to="/login" className="hover:text-green-700 transition-colors">Login</Link>
            <Link to="/registration" className="hover:text-green-700 transition-colors">Register</Link>
          </>}
          {(loginStatus === true && currentUser.user_type === 'Investor') && <>
            <Link to="/project_search" className="hover:text-green-700 transition-colors">Latest Startups</Link>
            <Link to='/investment_portfolio' className="hover:text-green-700 transition-colors">Investment Portfolio</Link>
            <Link to="" className="hover:text-green-700 transition-colors">Watchlist</Link>
            <span className="cursor-pointer hover:text-red-600 transition-colors" onClick={handleClick}>Logout</span>
            <Link to="investor_detail" className="hover:text-green-700 transition-colors">Profile</Link>
          </>}
          {(loginStatus === true && currentUser.user_type === 'startupFounder') && <>
            <Link to="dashboard_founder" className="hover:text-green-700 transition-colors">Dashboard</Link>
            <Link to='your_startups' className="hover:text-green-700 transition-colors">Your Startups</Link>
            <Link to="" className="hover:text-green-700 transition-colors">Chats</Link>
            <Link to="" className="hover:text-green-700 transition-colors">Stats</Link>
            <span className="cursor-pointer hover:text-red-600 transition-colors" onClick={handleClick}>Logout</span>
          </>}
        </div>
      </nav>
    </header>
  )
}