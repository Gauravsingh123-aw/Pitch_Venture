import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {userLoginLifeCycle} from '../redux/slices/userLoginSlice.js'

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
  },[loginStatus])

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
    <div className="py-10 w-[25rem] bg-white m-nav_space flex flex-col items-center gap-y-5 pt-6 shadow-md rounded-md font-roboto hover:shadow-2xl mt-14">
      <div className="text-3xl font-bold text-center text-gray-800">Log in</div>
      <input
        className="w-2/3 h-12 border-2 text-center rounded-md"
        placeholder="Username"
        name="username"
        onChange={handleData}
      />

      <div className="w-2/3 flex-col">
        <input
          className="w-full border-2 h-12 text-center rounded-md"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleData}
        />
        <div className="text-sm text-left mt-2 text-blue-600">
          <Link to="/forgot_pass">Forgot your password?</Link>
        </div>
      </div>
      <button
        className="w-2/3 bg-footer hover:bg-footer_blue text-white font-semibold py-3 rounded-md transition duration-300"
        onClick={handleSubmit}
      >
        Log in
      </button>

      <div className="text-[1.2rem] mt-6">
        New to PitchVenture?{" "}
        <Link to="/registration" className="text-blue-800">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
