import React from "react";
import { useState } from "react";

export default function Investor_detail() {
  let [data, setData] = useState({});

  // for selecting options
  let handleSelect = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setData({ ...data, [name]: value });
  };
  //for checkboxex
  let handleCheckbox = (event) => {
    let name = event.target.name;
    let checked = event.target.checked;
    setData({ ...data, [name]: checked });
  };

  //implementing Debounce
  let handleInput = debounce(1000);
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

  //submit logic
  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(data)
  }

  return (
    <div className="pb-5 w-[45rem] bg-white font-roboto flex flex-wrap flex-col  gap-y-8 pt-8  shadow-md">
      <div className="w-full flex  gap-4 justify-around ">
        Investment Range
        <select
          className="border-2 border-gray-300 w-1/3"
          name="investment_range"
          onChange={handleSelect}
        >
          <option value=""> </option>
          <option value="5l-10l">₹5 Lakhs - ₹10 Lakhs</option>
          <option value="10l-50l">₹10 Lakhs - ₹50 Lakhs</option>
          <option value="50l-1cr">₹50 Lakhs - ₹1 crore</option>
          <option value="1cr+">₹1 crore +</option>
        </select>
      </div>
      <div className="flex  gap-4 justify-around">
        Preffered Industry
        <select
          className="border-2 border-gray-300 w-1/3 "
          name="prefferd_range"
          onChange={handleSelect}
        >
          <option></option>
          <option value="ai">AI</option>
          <option value="healthcare">HealthCare</option>
          <option value="fintech">Fintech</option>
          <option value="education">Education</option>
          <option value="fashion&design">Fahion & Design</option>
        </select>
      </div>

      <div className="flex  gap-4 justify-around">
        Investment Exper.
        <select
          className="border-2 border-gray-300 w-1/3"
          name="investment_exp"
          onChange={handleSelect}
        >
          <option></option>
          <option value="beginner">Beginner</option>
          <option value="expert">Expert</option>
          <option value="institutional">Institutional</option>
        </select>
      </div>

      <div className="flex flex-col pl-[5.3rem] pr-[5.2rem] justify-around">
        Organization Name (For institutional investors or venture capital firms,
        collect their company name.)
        <input
          type="text"
          className="border-2 border-gray-300 w-full flex justify-around"
          name="org_name"
          onChange={handleInput}
        />
      </div>
      <div className="flex  pl-[5.3rem]  justify-between pr-[5.2rem]">
        Location
        <input
          type="text"
          className="border-2 border-gray-300 w-[45%] "
          name="location"
          onChange={handleInput}
        />
      </div>
      <div className="pl-[5.3rem] flex gap-4">
        <input
          type="checkbox"
          name="legally_allowed"
          onChange={handleCheckbox}
        />
        Are you accredited to do buisness acording to regional law of your
        country?
      </div>
      <div className="flex gap-4 pl-[5.3rem] pr-[5.2rem] text-wrap">
        <input
          type="checkbox"
          name="acknowledgement"
          onChange={handleCheckbox}
        />
        By proceeding, you acknowledge that investments carry risk, agree to our
        platform's terms of service, and confirm compliance with applicable
        investment regulations ..
      </div>
      <div className=" flex justify-center">
        <button className="bg-button-color w-1/6 p-2 text-white" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
