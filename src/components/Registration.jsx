import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Registration = () => {
  const [data,setData]=useState({});
  const [error,setError]=useState(false)
  function onsubmit(){
    console.log("submitted ");
    console.log(data)
  }
  return (
    <div className="w-full h-[50.5rem] bg-mainBackground font-roboto">
      <div className="flex items-center justify-center">
        <div className="m-w-xl m-5 rounded hover:shadow-2xl shadow-lg bg-white   pt-3  pl-10 pr-10 pb-4">
          <h1 className="font-xl md:text-lg lg:text-3xl text-center  ">
            Registration
          </h1>
          <div className="w-full  mt-5 text-center ">
            <input
              type="text"
              id="first-name"
              placeholder="Enter First name"
              className="text-center mb-5  border border-lightGray  h-12 p-2 text-sm"
              name="firstname"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />

            <span className="p-3"></span>
            <input
              type="text"
              id="last-name"
              className="text-center mb-5 border  border-lightGray h-12 p-2 text-sm"
              placeholder="Enter Last name"
              name="lastname"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />
            <br />
            {/* <br />
            <label htmlFor="email">Email</label>
            <br /> */}
            <input
              type="email"
              id="email"
              className="text-center mb-5  border border-lightGray p-2 text-sm"
              placeholder="Enter email address"
              name="email"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />
            <span className="p-3"></span>
            {/* <br />
            <label htmlFor="phone-number">Phone number</label>
            <br /> */}
            <input
              type="tel"
              id="phone-number"
              placeholder="Enter Phone name"
              className="text-center  border border-lightGray p-2 text-sm"
              name="phonenumber"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />
            <br />
            <input
              type="text"
              id="user-id"
              placeholder="Enter user name"
              className="text-center  border border-lightGray p-2 text-sm"
              name="userid"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />
            <span className="p-3"></span>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="text-center  border border-lightGray p-2 text-sm"
              name="password"
              onChange={(e) => (data[e.target.name] = e.target.value)}
            />
            <br />

            <select
              name="type_of_user"
              id="type_of_user"
              className="mt-6 pr-10 pl-10 text-center text-gray text-lg pt-1 pb-1    border border-lightGray "
            >
              <option value="select" className="text-center">
                {" "}
                Select type of Account
              </option>
              <option value="Investor" className="text-center">
                Investor
              </option>
              <option value="startupFounder" className="text-center">
                StartUp Founder
              </option>
            </select>
            <br />
            <button
              className="text-center hover:bg-black mt-6 text-white pl-12 pr-12  hover:text-gray bg-green h-12 text-xl p-1 w-2/3 rounded-md bg-button-color  border-2"
              onClick={onsubmit}
            >
              Register
            </button>
            <div className="text-[1.2rem] mt-4">
              Already have and account ?{" "}
              <span className="text-blue-600 "><Link to='/login'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration