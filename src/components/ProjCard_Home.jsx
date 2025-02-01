import React from "react";
import { useState } from "react";
import { RiCurrencyLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";

function ProjCard_Home({props,limit}) {
  const [collected, setCollected] = useState(600); // Example: 500 collected
  const goal = 1000; // Example goal: 1000

  // Calculate the completion percentage
  const percentage = Math.min((collected / goal) * 100, 100);

  const itemsToDisplay = limit ? props.slice(0, limit) : props;
  return (
    <div className=" w-full  flex flex-row flex-wrap gap-4 px-8  pb-2  mt-8 justify-around ">
      {itemsToDisplay.map((ele,key) => (
        <div key={key} className="w-1/2 lg:w-1/6 md:w-1/3 md: flex flex-col flex-wrap gap-4 shadow-lg   pb-2  mt-8 hover:shadow-2xl rounded-lg">
          <img
            src={ele.img}
            className="h-28 w-1/1  overflow-hidden rounded-t-md"
          ></img>
          <span className="text-footer font-bold ml-4 text-lg ">
            {ele.field}
          </span>
          <span className=" font-semibold text-md ml-4 break-words overflow-hidden">
            {ele.project_head}
          </span>
          <div className="w-11/12 bg-gray-300 rounded-full h-3 overflow-hidden ml-4">
            {/* Progress bar */}
            <div
              className="bg-[#fe7469] h-full transition-all duration-300 overflow-hidden"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="ml-4 text-sm font-semibold">
            <RiCurrencyLine className="inline" /> Total Raised
            {ele.fundraised}
          </span>
          <span className="ml-4 text-sm font-semibold">
            <FaCalendarDays className="inline" /> {ele.days_left} days
            left
          </span>
          <span className="ml-4 text-sm font-semibold flex flex-row  items-center gap-5">
            <img
              src="https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?w=1060"
              className="w-12 h-12 rounded-3xl"
            />
            {ele.founder_name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProjCard_Home;
