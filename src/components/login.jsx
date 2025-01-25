import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    
 let [data,setData]=useState({})

 let handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        console.log(value)
        setData({...data,[name]:value})
 }

 function debounce(fn,delay){
  let timer;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer=setTimeout(() => {
      handleChange(...args);
    }, delay);
  }
 }

 let handleData=debounce(handleChange,1000);

 let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(data)
 }

  return (
    <div className="h-[25rem] w-[25rem] bg-white m-nav_space flex flex-col items-center gap-y-5 pt-6 shadow-md font-roboto rounded hover:shadow-2xl">
      <div className="text-left w-full pl-16 text-3xl ">Log in</div>
      <input className="w-2/3 h-12  border-2 text-center " placeholder="Usersname" name="username" onChange={handleData}/>

      <div className="w-2/3 flex-col">
        <input className="w-full border-2  h-12  text-center  " placeholder="Password" name="password" onChange={handleData}/>
        <div className="text-sm text-left  mt-2 text-blue-600"><Link to='/forgot_pass'>Forgot your password?</Link></div>
      </div>
      <button className="text-center h-12 text-xl p-2 w-2/3 rounded-md bg-button-color text-white border-2 hover:bg-black" onClick={handleSubmit}>Log in</button>

      <div className="text-[1.2rem] mt-6">New to PitchVenture ? <Link to='/registration' className="text-blue-800 ">Sign Up</Link></div>
    </div>
  );
}

export default Login;
