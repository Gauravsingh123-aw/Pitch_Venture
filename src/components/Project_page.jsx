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
    <div className="w-full relative h-full">
            {console.log(data)}

      <div
        className="w-full relative bg-center bg-cover h-32"
        style={{ backgroundImage: `url(${project_banner})` }}
      >
        <div className="w-full bg-footer h-32 opacity-80 flex justify-center items-center text-white text-3xl font-bold">
          <span>Project Details</span>
        </div>
      </div>
      <div className="flex flex-col  items-center h-1/1">
        {/* first half */}
        <div className="flex flex-row justify-center items-center border shadow-lg w-4/5 h-[400px] rounded-lg overflow-hidden">
          <img src={project_banner} className="h-5/6 w-1/2 rounded-lg" />

          <div className="info flex flex-col gap-5 mt-16 pl-4 pt-4  h-full">
            <div className="owner   font-serif ">
              {" "}
              <img
                src="https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?w=1060 "
                className="w-10 h-10 rounded-3xl inline"
              />
              Heny
            </div>
            <div className="font-semibold text-xl">
              {" "}
              Samsung okulus rivt Pc- Powered VR Gaming headset
            </div>
            <div className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              explicabo iste nam consequuntur quidem praesentium, adipisci
              similique aspernatur molestiae iusto quia reiciendis dolore
              aliquam aperiam ipsam natus sint quos et quam? Ea veniam at eaque
              laudantium beatae eveniet eos nesciunt molestiae aut soluta
              molestias quaerat sequi unde, eius qui impedit.
            </div>
            <div className="w-11/12 bg-gray-300 rounded-full h-3 overflow-hidden ">
              {/* Progress bar */}
              <div
                className="bg-[#fe7469] h-full transition-all duration-300 overflow-hidden "
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="flex flex-row justify-evenly text-lg">
              <RiCurrencyLine className="inline bg-gray-200 opacity-80 w-6 h-6" />
              $65,235 Total raised <FaCalendarDays className="inline" />
              235 days to go
              <button className="bg-footer rounded-md text-sm p-1 ">
                Fund this Project
              </button>
            </div>
          </div>
        </div>
        {/* second half */}
        <div className="flex flex-col lg:flex-row md:flex-row justify-between w-4/5 mt-12">
          <div className="imp border border-black rounded-lg shadow-md w-4/6 flex flex-col min-h-[400px] overflow-y-auto">
            <div className="flex flex-row pl-10 pt-5 text-lg font-semibold gap-20">
              <div>About Projects</div>
              <div>Updates</div>
              <div>Reviews</div>
            </div>

            <div className=" text-center whitespace-pre-line m-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa et
              odit architecto placeat ducimus, quasi blanditiis magni corrupti
              totam in?
            </div>

            <img src={banner} className="max-h-[250px] m-5 object-cover rounded-lg" />

            <div className="overflow-y-auto m-5 text-center">
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

          <div className="border border-black rounded-lg  shadow-md w-1/6"></div>
        </div>
      </div>
    </div>
  );
}

export default Project_page;
