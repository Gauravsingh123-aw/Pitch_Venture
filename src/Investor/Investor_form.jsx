import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

function InvestorForm() {
  const [data, setData] = useState({});

  let { currentUser, loginStatus } = useSelector(state => state.userLogin);
  const API_URL = import.meta.env.VITE_API_URL;
  const [paymentInfo, setPayment] = useState({});

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

  const handlePayment = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => {
      const updatedPayment = { ...prevPayment, [name]: value };
      setData((prevFormData) => ({
        ...prevFormData,
        paymentInfo: updatedPayment,
      }));
      return updatedPayment;
    });
  };

  // submit logic
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = { ...data, paymentInfo, username: currentUser.username };
    setData(updatedData);
    // console.log(updatedData);
    try{
    let ans=await axios.post(`${API_URL}investor-api/register_investor`, updatedData);
    console.log(ans)
    if(ans.data.message="investor registered")
    {
      toast("Investor data saved")
    }
    }
    catch(error){
      console.log('error fetching data',error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Investor Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className='inline'>Username</label> 
          {loginStatus === true && <input className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300" defaultValue={currentUser.username} readOnly />}
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
            name="investmentExperience"
            onChange={handleSelect}
          >
            <option value="">Select Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Experienced">Expert</option>
            <option value="Institutional">Institutional</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Organization Name</label>
          <input
            type="text"
            className="border-2 border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            name="org"
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

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="legally_allowed"
            className="mt-1"
            onChange={handleCheckbox}
          />
          <label className="font-semibold text-gray-700 dark:text-gray-300">Are you accredited to do business according to regional law of your country?</label>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">Payment Information</h3>
        <div className="space-y-6">
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            onChange={handlePayment}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="accountHolderName"
            placeholder="Account Holder Name"
            onChange={handlePayment}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            onChange={handlePayment}
            className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="acknowledgement"
            className="mt-1"
            onChange={handleCheckbox}
          />
          <label className="font-semibold text-gray-700 dark:text-gray-300">By proceeding, you acknowledge that investments carry risk, agree to our platform's terms of service, and confirm compliance with applicable investment regulations.</label>
        </div>

        <div className="text-center">
          <button
            className="bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvestorForm;
