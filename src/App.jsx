import { useState } from 'react'
import Login from './components/login'
import './App.css'
import Registration from './components/Registration';

function App() {

  return (
    <div className='border w-full h-screen flex justify-center  content-center bg-slate-200'>
      <Login/>
    </div>
  )
}

export default App
