import React from 'react';
import { useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";


const Founder_details = () => {
     
    const [founder_data,setFounder_data]=useState({})
    const [personal_details,setPersonaldetails]=useState(true);
    const [education_details,setEducationdetails]=useState(false);
    const [employment_details,setEmploymentdetails]=useState(false);

  return (
    <>
      <div className="details_header flex mt-5  border border-xl border-gray-500 rounded-xl">
        <div
          className={` pr-2 p-2 rounded-xl text-lg ${
            personal_details ? "bg-gray-300" : ""
          }`}
          onClick={() => {
            setPersonaldetails(true);
            setEmploymentdetails(false);
            setEducationdetails(false);
          }}
        >
          Personal details
        </div>
        <hr class="border-t border-gray-300"></hr>

        <div
          className={` pr-2 p-2 rounded-xl text-lg  ${
            education_details ? "bg-gray-300" : ""
          }`}
          onClick={() => {
            setPersonaldetails(false);
            setEmploymentdetails(false);
            setEducationdetails(true);
          }}
        >
          Education Details
        </div>
        <hr class="border-t border-gray-300"></hr>

        <div
          className={` pr-2 p-2 rounded-xl text-lg ${
            employment_details ? "bg-gray-300" : ""
          }`}
          onClick={() => {
            setPersonaldetails(false);
            setEmploymentdetails(true);
            setEducationdetails(false);
          }}
        >
          Employment Details
        </div>
        <hr class="border-t border-gray-300"></hr>
      </div>
      {/* personal details */}
      {personal_details && (
        <div className="w-full h-[39.5rem] bg-mainBackground">
          <div className="flex items-center justify-center">
            <div className="w-2/4  m-5 rounded hover:shadow-2xl shadow-lg bg-white  mt-5 pt-3  pl-10 pr-10 pb-4">
              <p className="text-lg mb-2 text-gray-500">Basic details</p>

              <div className="flex justify-between">
                <input
                  type="text "
                  className="text-center mb-5  border border-lightGray w-[14rem]  p-2 text-sm"
                  placeholder="First name"
                />
                <input
                  type="text "
                  className="text-center mb-5  border border-lightGray w-[14rem]  p-2 text-sm"
                  placeholder="Last name"
                />
                <input
                  type="email"
                  className="text-center mb-5  border border-lightGray w-[14rem]  p-2 text-sm"
                  placeholder="Email"
                />
              </div>
              <span />
              <div className="flex">
                <input
                  type="date"
                  className="text-center text-gray-400 mb-5  border border-lightGray w-[14rem]  p-2 text-sm"
                />
                <p className="ml-4 mt-3">Gender</p>
                <input
                  type="radio"
                  value="male"
                  className="mb-3 ml-4"
                  name="gender"
                />
                <p className="ml-2 mt-3 mr-3 text-gray-500">Male</p>
                <input
                  type="radio"
                  value="female"
                  className="mb-3 ml-4"
                  name="gender"
                />
                <p className="ml-2 mt-3 mr-3 text-gray-500">Female</p>
                <input
                  type="radio"
                  value="female"
                  className="mb-3 ml-4"
                  name="gender"
                />
                <p className="ml-2 mt-3 mr-3 text-gray-500">Others</p>
              </div>

              <p className="text-lg mb-2 text-gray-500">Address</p>

              <div className="flex justify-between">
                <input
                  type="text "
                  className="text-center mb-5  border border-lightGray  w-[14rem]   p-2 text-sm"
                  placeholder="Address line 1"
                />
                <input
                  type="text "
                  className="text-center mb-5  border border-lightGray  w-[14rem]   p-2 text-sm"
                  placeholder="Address line 2"
                />
                <input
                  type="email"
                  className="text-center mb-5  border border-lightGray  w-[14rem]  p-2 text-sm"
                  placeholder="City"
                />
              </div>
              <div className="flex justify-between ">
                <select
                  name="state"
                  id="state"
                  className="text-center text-gray-400 pt-0 h-[2.3rem] border border-lightGray w-[14rem]"
                >
                  <option>Select State</option>
                  <option>Andhra Pradesh</option>
                </select>
                <input
                  type="text "
                  className="text-center mb-5  border border-lightGray  w-[14rem]   p-2 text-sm"
                  placeholder="Postal code"
                />
                <select
                  name="state"
                  id="state"
                  className=" pt-0 text-gray-400 border h-[2.3rem] border-lightGray w-[14rem]"
                >
                  <option>Select Country</option>
                  <option>India</option>
                </select>
              </div>
              <p className="text-lg mb-2 text-gray-500">
                Select Language Preference
              </p>
              <div className="text-center">
                <button className=" p-2 pr-2 pl-2 hover:bg-gray-300 border rounded-xl ">
                  <span className="flex w-[9rem] justify-between  ">
                    Add Language {` `} <MdAddCircleOutline size={25} />
                  </span>
                </button>
              </div>
              <div className="flex justify-end ">
                <button
                  className="border pl-10  pr-10 border-gray-300 p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:shadow-xl hover:border-gray-800"
                  onClick={() => {
                    setEducationdetails(true);
                    setEmploymentdetails(false);
                    setPersonaldetails(false);
                  }}
                >
                  Next
                </button>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      )}

      {/* education details */}
      {education_details && (
        <div className="w-full h-[39.5rem] bg-mainBackground">
          <div className="flex items-center justify-center">
            <div className="w-2/4 m-5 rounded hover:shadow-2xl shadow-lg bg-white  mt-20 pt-3  pl-10 pr-10 pb-4">
              <p className="text-lg mb-2 text-gray-500">Education details</p>
              <div className="text-center">
                <button className=" p-2 hover:bg-gray-300 border rounded-xl">
                  <span className="flex space-4 w-[12rem] justify-between">
                    Add Education details <MdAddCircleOutline size={25} />
                  </span>
                </button>

                <div className="flex justify-between ">
                  <button
                    className="border pl-10  pr-10 border-gray-300 p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:shadow-xl hover:border-gray-800"
                    onClick={() => {
                      setEducationdetails(false);
                      setEmploymentdetails(false);
                      setPersonaldetails(true);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="border pl-10 pr-10 border-gray-300 p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:shadow-xl hover:border-gray-800"
                    onClick={() => {
                      setEducationdetails(false);
                      setEmploymentdetails(true);
                      setPersonaldetails(false);
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {employment_details && (
        <div className="w-full h-[39.5rem] bg-mainBackground">
          <div className="flex items-center justify-center">
            <div className="w-2/4 m-5 rounded hover:shadow-2xl shadow-lg bg-white  mt-20 pt-3  pl-10 pr-10 pb-4">
              <p className="text-lg mb-2 text-gray-500">
                Employment details details
              </p>
              <div className="text-center">
                <button className=" p-2 hover:bg-gray-300 border rounded-xl">
                  <span className="flex space-4 w-[13rem] justify-between">
                    Add Employment details <MdAddCircleOutline size={25} />
                  </span>
                </button>

                <div className="flex justify-between ">
                  <button
                    className="border pl-10  pr-10 border-gray-300 p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:shadow-xl hover:border-gray-800"
                    onClick={() => {
                      setEducationdetails(true);
                      setEmploymentdetails(false);
                      setPersonaldetails(false);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    className="border pl-10 pr-10 border-gray-300 bg-green-900 p-2 rounded-xl font-bold   text-base hover:text-white   hover:shadow-xl hover:border-gray-800"
                    onClick={() => {
                     
                    }}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Founder_details