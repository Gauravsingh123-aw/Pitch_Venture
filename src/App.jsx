import React, { lazy, Suspense } from 'react'
const Login=React.lazy(()=>import ('./components/login'))
const Navbar= React.lazy(()=>import('./components/Navbar')) 
const Forgot_Pass=React.lazy(()=>import('./components/Forgot_Pass')) 
const Registration=React.lazy(()=>import('./components/Registration.jsx')) 
const Home=React.lazy(()=>import('./components/Home'))
const About_us=React.lazy(()=>import('./components/About_us.jsx'))
const Investor_detail=lazy(()=>import('./components/Investor_detail.jsx'))
const Footer=React.lazy(()=>import('./components/Footer.jsx'))
const Project_Search=React.lazy(()=>import('./components/Project_search.jsx'))
const Project_page=React.lazy(()=>import('./components/Project_page.jsx'))
const Dashboard=React.lazy(()=>import('./Startup_Founder/Dashboard.jsx'))
const Your_startups=React.lazy(()=>import('./Startup_Founder/Your_startups.jsx'))
import Spinner from './Spinner.jsx'
import { Route,Routes,useLocation } from 'react-router-dom'
import './App.css'
import Founder_details from './components/Founder_details'

function App() {

  
    const location = useLocation();
  
    const navbarBackgroundClass = location.pathname === '/'  || location.pathname==="/project_page"? 'home-bg-class' : 'other-bg-class';

  return (
    <div className='border w-lvw  min-h-screen flex flex-col   items-center bg-slate-200'>
      
      <Suspense fallback={<Spinner/>}>
        <Navbar background={navbarBackgroundClass} />
      </Suspense>
      <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/forgot_pass' element={<Forgot_Pass/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/founder_details' element={<Founder_details/>}></Route>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot_pass' element={<Forgot_Pass/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='investor_detail' element={<Investor_detail/>}/>
        <Route path='about_us' element={<About_us/>}/>
        <Route path='project_search'  element={<Project_Search/>}/>
        <Route path='project_page' element={<Project_page/>}/>
        <Route path='dashboard_founder' element={<Dashboard/>}/>
        <Route path='your_startups' element={<Your_startups/>}/>
      </Routes>
      </Suspense>
     <Suspense fallback={<Spinner/>}><Footer/></Suspense>
 
    
    </div>
  )
}

export default App
