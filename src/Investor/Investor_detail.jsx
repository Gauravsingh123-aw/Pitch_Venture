import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

export default function InvestorDetail() {
  const [data, setData] = useState({});
  let {currentUser}=useSelector(state=>state.userLogin);
  const API_URL=import.meta.env.VITE_API_URL;

  useEffect(async ()=>{
    let data=currentUser.username;
    let res=await axios.post(`${API_URL}investor-api/check_investor`,{data});

    return function(){
      
    }
  },[])
  // for selecting options
  const handleSelect = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  };

  // for checkboxes
  const handleCheckbox = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    setData({ ...data, [name]: checked });
  };

  // implementing Debounce
  const handleInput = debounce(1000);
  function debounce(delay) {
    let timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      const { name, value } = event.target;
      timer = setTimeout(() => {
        setData({ ...data, [name]: value });
      }, delay);
    };
  }

  // submit logic
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">Investor Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Investment Range</label>
          <select
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="investment_range"
            onChange={handleSelect}
          >
            <option value="">Select Range</option>
            <option value="5l-10l">₹5 Lakhs - ₹10 Lakhs</option>
            <option value="10l-50l">₹10 Lakhs - ₹50 Lakhs</option>
            <option value="50l-1cr">₹50 Lakhs - ₹1 crore</option>
            <option value="1cr+">₹1 crore +</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Preferred Industry</label>
          <select
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="preferred_industry"
            onChange={handleSelect}
          >
            <option value="">Select Industry</option>
            <option value="ai">AI</option>
            <option value="healthcare">HealthCare</option>
            <option value="fintech">Fintech</option>
            <option value="education">Education</option>
            <option value="fashion&design">Fashion & Design</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Investment Experience</label>
          <select
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="investment_exp"
            onChange={handleSelect}
          >
            <option value="">Select Experience</option>
            <option value="beginner">Beginner</option>
            <option value="expert">Expert</option>
            <option value="institutional">Institutional</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Organization Name</label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="org_name"
            onChange={handleInput}
            placeholder="For institutional investors or venture capital firms"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Location</label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="location"
            onChange={handleInput}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="legally_allowed"
            className="mr-2"
            onChange={handleCheckbox}
          />
          <label className="font-semibold text-gray-700 dark:text-gray-300">Are you accredited to do business according to regional law of your country?</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="acknowledgement"
            className="mr-2"
            onChange={handleCheckbox}
          />
          <label className="font-semibold text-gray-700 dark:text-gray-300">By proceeding, you acknowledge that investments carry risk, agree to our platform's terms of service, and confirm compliance with applicable investment regulations.</label>
        </div>

        <div className="text-center">
          <button
            className="bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
