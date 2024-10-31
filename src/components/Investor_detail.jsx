import React from "react";

export default function Investor_detail() {
  return (
    <div className="pb-5 w-[45rem] bg-white font-roboto flex flex-wrap flex-col  gap-y-8 pt-8  shadow-md">
      <div className="w-full flex  gap-4 justify-around ">
        Investment Range
        <select className="border-2 border-gray-300 w-1/3">
          <option value=""> </option>
          <option value="">₹5 Lakhs - ₹10 Lakhs</option>
          <option value="">₹10 Lakhs - ₹50 Lakhs</option>
          <option value="">₹50 Lakhs - ₹1 crore</option>
          <option value="">₹1 crore +</option>
        </select>
      </div>
      <div className="flex  gap-4 justify-around">
        Preffered Industry
        <select className="border-2 border-gray-300 w-1/3">
          <option></option>
          <option value="">AI</option>
          <option value="">HealthCare</option>
          <option value="">Fintech</option>
          <option value="">Education</option>
          <option value="">Fahion & Design</option>
        </select>
      </div>

      <div className="flex  gap-4 justify-around">
        Investment Exper.
        <select className="border-2 border-gray-300 w-1/3">
          <option></option>
          <option value="">AI</option>
          <option value="">HealthCare</option>
          <option value="">Fintech</option>
          <option value="">Education</option>
          <option value="">Fahion & Design</option>
        </select>
      </div>
      
      
      <div className="flex flex-col pl-[5.3rem] pr-[5.2rem] justify-around">
        Organization Name (For institutional investors or venture capital firms,
        collect their company name.)
        <input type="text" className="border-2 border-gray-300 w-full flex justify-around" />
      </div>
      <div className="flex  pl-[5.3rem]  justify-between pr-[5.2rem]">
        Location
        <input type="text" className="border-2 border-gray-300 w-[45%] " />
      </div>
      <div className="pl-[5.3rem] flex gap-4">
      <input type="checkbox" />Are you accredited to do buisness acording to regional law of your
        country? 
      </div>
      <div className="flex gap-4 pl-[5.3rem] pr-[5.2rem] text-wrap">
        <input type="checkbox" />
        By proceeding, you acknowledge that investments carry risk, agree to our
        platform's terms of service, and confirm compliance with applicable
        investment regulations ..
      </div>
      <div className=" flex justify-center">
        <button className="bg-button-color w-1/6 p-2 text-white">Submit</button>
      </div>
    </div>
  );
}
