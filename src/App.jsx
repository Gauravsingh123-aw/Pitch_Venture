import { useState } from 'react'
import Login from './components/login'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Forgot_Pass from './components/Forgot_Pass'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Registration from './components/Registration';

function App() {

  return (
    <div className='border w-full h-screen flex flex-col   items-center bg-slate-200'>
      <Top/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot_pass' element={<Forgot_Pass/>}/>

      </Routes>
    
    </div>
  )
}

export default App
