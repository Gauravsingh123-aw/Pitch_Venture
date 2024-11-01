import React, { lazy, Suspense } from 'react'
const Login=React.lazy(()=>import ('./components/login'))
const Navbar= React.lazy(()=>import('./components/Navbar')) 
const Top=React.lazy(()=>import('./components/Top')) 
const Forgot_Pass=React.lazy(()=>import('./components/Forgot_Pass')) 
const Registration=React.lazy(()=>import('./components/Registration.jsx')) 
const Home=React.lazy(()=>import('./components/Home'))
const Investor_detail=lazy(()=>import('./components/Investor_detail.jsx'))
import { Route,Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='border w-full h-auto flex flex-col   items-center bg-slate-200'>
      <Top/>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot_pass' element={<Forgot_Pass/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='investor_detail' element={<Investor_detail/>}/>
      </Routes>
      </Suspense>
    
    </div>
  )
}

export default App
