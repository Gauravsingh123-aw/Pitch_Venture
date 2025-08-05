import React from "react";
import { useLocation } from "react-router-dom";
import project_banner from "../assets/project_Banner.jpg";
import { RiCurrencyLine } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { useState } from "react";
import banner from "../assets/project_page.jpg";

function Project_page() {
  const [collected, setCollected] = useState(600); // Example: 500 collected
  const goal = 1000; // Example goal: 1000

  let location=useLocation();
  const data=location.state ;

  // Calculate the completion percentage
  const percentage = Math.min((collected / goal) * 100, 100);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
      {/* Banner */}
      <div className="w-full relative flex justify-center items-center bg-gradient-to-r from-green-400/90 via-green-300/70 to-lime-200/80 shadow-md border-b border-green-200">
        <img src={project_banner} alt="Project Banner" className="w-full h-14 md:h-20 lg:h-24 object-cover object-center rounded-b-3xl shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 px-6 py-2 rounded-xl shadow-lg border border-green-200">
          <h1 className="text-green-700 text-base md:text-2xl font-extrabold tracking-wide text-center drop-shadow">Project Details</h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 ">
        {/* first half */}
        <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 max-w-5xl rounded-2xl bg-gradient-to-br from-white via-green-50 to-lime-100 shadow-xl border border-green-200 overflow-hidden">
          <div className="flex-1 flex items-center justify-center bg-white/80 p-0 md:p-6">
            <img src={project_banner} className="w-full h-44 md:h-72 object-cover rounded-2xl shadow-md border border-green-200" alt="Project" />
          </div>
          <div className="flex-1 flex flex-col gap-4 md:gap-6 p-6 md:p-10 justify-center">
            <div className="flex items-center gap-3">
              <img
                src="https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?w=1060 "
                className="w-12 h-12 rounded-full border-2 border-orange-200 shadow"
                alt="Owner"
              />
              <span className="font-semibold text-slate-700 text-base md:text-lg">Heny</span>
            </div>
            <div className="font-bold text-lg md:text-2xl text-green-700 leading-tight">
              Samsung okulus rivt Pc- Powered VR Gaming headset
            </div>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo iste nam consequuntur quidem praesentium, adipisci similique aspernatur molestiae iusto quia reiciendis dolore aliquam aperiam ipsam natus sint quos et quam? Ea veniam at eaque laudantium beatae eveniet eos nesciunt molestiae aut soluta molestias quaerat sequi unde, eius qui impedit.
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              {/* Progress bar */}
              <div
                className="bg-[#fe7469] h-full transition-all duration-300 overflow-hidden "
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 md:gap-8 items-center text-sm md:text-lg mt-2">
              <span className="flex items-center gap-1"><RiCurrencyLine className="inline bg-gray-200 opacity-80 w-5 h-5 md:w-6 md:h-6" /> <span className="font-semibold">$65,235</span> <span className="text-slate-500">Total raised</span></span>
              <span className="flex items-center gap-1"><FaCalendarDays className="inline" /> <span className="font-semibold">235</span> <span className="text-slate-500">days to go</span></span>
              <button className="bg-[#fe7469] hover:bg-orange-600 transition-colors text-white rounded-md text-xs md:text-sm px-4 py-2 font-semibold shadow">Fund this Project</button>
            </div>
          </div>
        </div>

        {/* second half */}
        <div className="flex flex-col lg:flex-row md:flex-row justify-between w-11/12 md:w-4/5 max-w-5xl mt-12 gap-6">
          <div className="imp border border-slate-200 rounded-2xl shadow-md w-full lg:w-4/6 flex flex-col min-h-[350px] bg-white/90 overflow-y-auto">
            <div className="flex flex-row pl-6 pt-5 text-base md:text-lg font-semibold gap-10 md:gap-20 text-green-700">
              <div className="cursor-pointer hover:underline">About Project</div>
              <div className="cursor-pointer hover:underline">Updates</div>
              <div className="cursor-pointer hover:underline">Reviews</div>
            </div>
            <div className="text-center whitespace-pre-line m-5 text-slate-700 text-sm md:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa et
              odit architecto placeat ducimus, quasi blanditiis magni corrupti
              totam in?
            </div>
            <img src={banner} className="max-h-[180px] md:max-h-[250px] m-5 object-cover rounded-lg mx-auto" />
            <div className="overflow-y-auto m-5 text-center text-slate-600 text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quisquam dicta sunt. Laboriosam laborum modi non qui, facilis rem
              incidunt officiis aliquam, nulla enim aspernatur, quaerat optio.
              In deserunt corporis repellat optio perferendis ut corrupti
              delectus eum itaque iusto commodi quod, assumenda vero architecto
              quasi, impedit porro officiis totam doloribus eveniet. Numquam
              aliquid est incidunt adipisci magni. Quis animi quisquam nesciunt
              nobis. Distinctio id cum error alias eum, libero, omnis nostrum
              iure vel laboriosam odio. Tempore eveniet non quia delectus.
            </div>
          </div>
          <div className="border border-slate-200 rounded-2xl shadow-md w-full lg:w-1/6 min-h-[350px] bg-white/90"></div>
        </div>
      </div>
    </div>
  );
}

export default Project_page;
