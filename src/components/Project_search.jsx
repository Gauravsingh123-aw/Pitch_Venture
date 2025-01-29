import React, { Suspense } from "react";
import worldimg from "../assets/world-map.jpg";
import { CiSearch } from "react-icons/ci";
const Project_Card=React.lazy(()=>import('./ProjCard_Home.jsx'))
const Partners=React.lazy(()=>import('./Partners_page.jsx'))
import Spinner from '../Spinner.jsx'
function Project_search() {
  let obj=[{
    img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    project_head:"Self driving robot for shooting game cghghdfh ghgh",
    fundraised:'$43534',
    days_left:45,
    founder_name:'VV abit',
    field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
},
{
  img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project_head:"Self driving robot for shooting game cghghdfh ghgh",
  fundraised:'$43534',
  days_left:45,
  founder_name:'VV abit',
  field:"TECHNOLOGY"
}

];
  return (
    <div className="w-full relative">
      <div
        className="w-full  h-40 bg-cover bg-center "
        style={{ backgroundImage: `url(${worldimg})` }}
      >
        <div className="w-full h-full bg-footer bg-opacity-85 overflow-hidden text-3xl text-white text-opacity-75 font-bold flex flex-col justify-center items-center  ">
          <span>Let's find the crowdfunding projects</span>
          <span>across the world</span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="absolute w-1/3 h-10 mt-[-15px] bg-white text-black flex  items-center drop-shadow-xl">
          {/* This div will overlap the upper container */}
          <span className="w-1/4 pl-8 font-semibold">All category</span><CiSearch /><input type="text" placeholder="browse project"  className="pl-5 w-full outline-none"/>
        </div>
      </div>  
      <Suspense fallback={<Spinner/>}>
      <div className="flex flex-row justify-around h-auto">
      <div className="flex flex-col w-1/6 h-96 bg-slate-100 shadow-md items-start  mt-16 ml-10 py-8 px-10 gap-5 border ">
        <span className="text-gray-500 text-lg font-semibold">Category</span>
        <span className="border-b border-gray-200 w-48"><input type="checkbox"/> All Projects</span>
        <span className="border-b border-gray-200 w-48"><input type="checkbox"/> Technology</span>
        <span className="border-b border-gray-200 w-48"><input type="checkbox"/> Medical</span>
        <span className="border-b border-gray-200 w-48"><input type="checkbox"/> Business</span>
        <span className="border-b border-gray-200 w-48"><input type="checkbox"/> Fashion</span>
        <button className="bg-footer rounded-md w-full text-white mt-4 h-8 text-sm">SEARCH PROJECTS</button>
      </div>
      <Project_Card props={obj}/>
      </div>
        <Partners/>
      </Suspense>
        </div>
  );
}

export default Project_search;
