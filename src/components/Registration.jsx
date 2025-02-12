import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
  let navigate=useNavigate();
  const [data, setData] = useState({});
  const API_URL=import.meta.env.VITE_API_URL;

    async function onSubmit() {
      let ans=await axios.post(`${API_URL}user-api/user_reg`,{data});
      console.log(ans.data)
      toast(ans.data.message);
      if(ans.data.message==="user created"){
        console.log("hav")
         navigate('/login')
      }
  }

  function debounce() {
    let timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        let name = event.target.name;
        let value = event.target.value;
        setData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      }, 1000);
    };
  }

  let handleData = debounce();

  useEffect(() => {
    const inputs = document.querySelectorAll("input, select");

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
    //cleanup function
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("change", handleAutofill);
      });
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center bg-mainBackground font-roboto mt-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">Register</h1>

        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleData}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleData}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleData}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleData}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleData}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleData}
          />

          <select
            name="user_type"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleData}
          >
            <option value="">Select Account Type</option>
            <option value="Investor">Investor</option>
            <option value="startupFounder">Startup Founder</option>
          </select>

          <button
            onClick={onSubmit}
            className="w-full bg-footer hover:bg-footer_blue text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
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
  );
};

export default Registration;
