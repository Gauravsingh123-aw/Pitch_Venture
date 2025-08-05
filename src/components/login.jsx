import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearState } from "../redux/slices/userLoginSlice.js";
import {userLoginLifeCycle} from '../redux/slices/userLoginSlice.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  let {currentUser,loginStatus,isPending,errorMessage}=useSelector(state=>state.userLogin)
  let [data, setData] = useState({});
  let dispatch=useDispatch();
  let navigate=useNavigate();

  useEffect(()=>{
    if(loginStatus===true)
    {
      if(currentUser.user_type==="startupFounder") navigate('/dashboard_founder')
        else navigate('/')
    }
    else if(errorMessage){
      toast(errorMessage)
      dispatch(clearState())
    }
  },[loginStatus,errorMessage])

  let handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(value);
    setData({ ...data, [name]: value });
  };

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        handleChange(...args);
      }, delay);
    };
  }

  let handleData = debounce(handleChange, 1000);

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    const handleAutofill = (event) => {
      const { name, value } = event.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    inputs.forEach((input) => {
      input.addEventListener("change", handleAutofill);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("change", handleAutofill);
      });
    };
  }, []);

  let handleSubmit = async (event) => {
    event.preventDefault();
    // const API_URL=import.meta.env.VITE_API_URL;
    // let response=await axios.post(`${API_URL}user-api/user_login`,{data})
    // console.log(response)
    dispatch(userLoginLifeCycle(data))
    
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-lime-100 py-10 w-2/5 px-10">
      <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-2xl px-10 py-12 flex flex-col items-center gap-6 font-roboto border border-green-200">
        <div className="text-3xl font-extrabold text-center text-green-700 mb-2 tracking-tight">Log in</div>
        <input
          className="w-full h-12 border border-green-200 focus:ring-2 focus:ring-green-400 text-center rounded-lg text-base outline-none transition mb-2 bg-white/80 placeholder-gray-400"
          placeholder="Username"
          name="username"
          onChange={handleData}
        />
        <input
          className="w-full h-12 border border-green-200 focus:ring-2 focus:ring-green-400 text-center rounded-lg text-base outline-none transition mb-1 bg-white/80 placeholder-gray-400"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleData}
        />
        <div className="w-full flex justify-end mb-2">
          <Link to="/forgot_pass" className="text-sm text-green-700 hover:underline">Forgot your password?</Link>
        </div>
        <button
          className="w-full bg-gradient-to-r from-green-500 to-lime-400 hover:from-green-600 hover:to-lime-500 text-white font-bold py-3 rounded-lg shadow transition duration-300 text-lg tracking-wide"
          onClick={handleSubmit}
        >
          Log in
        </button>
        <div className="text-base mt-2 text-gray-700">
          New to PitchVenture?{' '}
          <Link to="/registration" className="text-green-700 font-semibold hover:underline">Sign Up</Link>
        </div>
        <ToastContainer 
          className="toast-position"
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default Login;
