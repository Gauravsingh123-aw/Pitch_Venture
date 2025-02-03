import React, { Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight,FaBriefcaseMedical } from "react-icons/fa";
import { GiCircuitry,GiTShirt,GiBookCover,GiArtificialIntelligence } from "react-icons/gi";
import hero from '../assets/hero.png'
import Partners_page from './Partners_page.jsx';
const ProjCard_Home=React.lazy(()=>import('./ProjCard_Home.jsx'))
const Testimonials=React.lazy(()=>import('./Testimonials.jsx'))
const Top=React.lazy(()=>import('./Top')) 


export default function Home() {
    // dummy object for project card {later to be replaced }
    let obj=[
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
    },{
        img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        project_head:"Self driving robot for shooting game cghghdfh ghgh",
        fundraised:'$43534',
        days_left:45,
        founder_name:'VV abit',
        field:"TECHNOLOGY"
    },{
        img:"https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        project_head:"Self driving robot for shooting game cghghdfh ghgh",
        fundraised:'$43534',
        days_left:45,
        founder_name:'VV abit',
        field:"TECHNOLOGY"
    }

];
    // dummy obj for testimonial {to be replace later with API data}
    const testimonials = [
        {
          name: "John Doe",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rem provident temporibus eligendi eius molestias excepturi id voluptatem nam dolore, error dicta odio cum adipisci, consequuntur placeat quis veniam consectetur exercitationem ipsam rerum labore? Enim delectus quae odit excepturi vel possimus. Laboriosam, sequi tenetur? Consectetur cupiditate blanditiis quod earum." ,
        //   image: "https://www.google.com/search?sca_esv=12a61663b916a70f&sxsrf=AHTn8zpyTuJeBX1NVDELpCXNpvwZ-_SeGQ:1737786418524&q=sample+profile+imag3&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBs5KbvfUChveCKqCmofFTOmkNOxr9C3wSBM2FopsNumVdJFNgdVRjFupp7nXx58Iv5za63TXiXEdAgiaY2HHhPXCcCKkl-Ehj5MiVliQBY-3khfjI5td2Zrpx9AiJTNYZ65i01yFrg-Qp0medfCY4F6MqL7tcq_b0-FSVxPFdJl6cAEhFA&sa=X&ved=2ahUKEwiOrq_xnpCLAxWCwjgGHdFSG2EQtKgLegQIERAB&biw=1920&bih=945&dpr=1#vhid=8cXNhxYPuJKT3M&vssid=mosaic",
        },
        {
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rem provident temporibus eligendi eius molestias excepturi id voluptatem nam dolore, error dicta odio cum adipisci, consequuntur placeat quis veniam consectetur exercitationem ipsam rerum labore? Enim delectus quae odit excepturi vel possimus. Laboriosam, sequi tenetur? Consectetur cupiditate blanditiis quod earum." ,
            // image: "https://www.google.com/search?sca_esv=12a61663b916a70f&sxsrf=AHTn8zpyTuJeBX1NVDELpCXNpvwZ-_SeGQ:1737786418524&q=sample+profile+imag3&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBs5KbvfUChveCKqCmofFTOmkNOxr9C3wSBM2FopsNumVdJFNgdVRjFupp7nXx58Iv5za63TXiXEdAgiaY2HHhPXCcCKkl-Ehj5MiVliQBY-3khfjI5td2Zrpx9AiJTNYZ65i01yFrg-Qp0medfCY4F6MqL7tcq_b0-FSVxPFdJl6cAEhFA&sa=X&ved=2ahUKEwiOrq_xnpCLAxWCwjgGHdFSG2EQtKgLegQIERAB&biw=1920&bih=945&dpr=1#vhid=8cXNhxYPuJKT3M&vssid=mosaic",
          },
        {
          name: "Jane Smith",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rem provident temporibus eligendi eius molestias excepturi id voluptatem nam dolore, error dicta odio cum adipisci, consequuntur placeat quis veniam consectetur exercitationem ipsam rerum labore? Enim delectus quae odit excepturi vel possimus. Laboriosam, sequi tenetur? Consectetur cupiditate blanditiis quod earum." ,
        //   image: "https://www.google.com/search?sca_esv=12a61663b916a70f&sxsrf=AHTn8zpyTuJeBX1NVDELpCXNpvwZ-_SeGQ:1737786418524&q=sample+profile+imag3&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBs5KbvfUChveCKqCmofFTOmkNOxr9C3wSBM2FopsNumVdJFNgdVRjFupp7nXx58Iv5za63TXiXEdAgiaY2HHhPXCcCKkl-Ehj5MiVliQBY-3khfjI5td2Zrpx9AiJTNYZ65i01yFrg-Qp0medfCY4F6MqL7tcq_b0-FSVxPFdJl6cAEhFA&sa=X&ved=2ahUKEwiOrq_xnpCLAxWCwjgGHdFSG2EQtKgLegQIERAB&biw=1920&bih=945&dpr=1#vhid=8cXNhxYPuJKT3M&vssid=mosaic",
        },
        {
          name: "Emily Johnson",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse rem provident temporibus eligendi eius molestias excepturi id voluptatem nam dolore, error dicta odio cum adipisci, consequuntur placeat quis veniam consectetur exercitationem ipsam rerum labore? Enim delectus quae odit excepturi vel possimus. Laboriosam, sequi tenetur? Consectetur cupiditate blanditiis quod earum." ,
        //   image: "https://www.google.com/search?sca_esv=12a61663b916a70f&sxsrf=AHTn8zpyTuJeBX1NVDELpCXNpvwZ-_SeGQ:1737786418524&q=sample+profile+imag3&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBs5KbvfUChveCKqCmofFTOmkNOxr9C3wSBM2FopsNumVdJFNgdVRjFupp7nXx58Iv5za63TXiXEdAgiaY2HHhPXCcCKkl-Ehj5MiVliQBY-3khfjI5td2Zrpx9AiJTNYZ65i01yFrg-Qp0medfCY4F6MqL7tcq_b0-FSVxPFdJl6cAEhFA&sa=X&ved=2ahUKEwiOrq_xnpCLAxWCwjgGHdFSG2EQtKgLegQIERAB&biw=1920&bih=945&dpr=1#vhid=8cXNhxYPuJKT3M&vssid=mosaic",
        },
      ];
    const elements=Array(5).fill(null);
    return (
        <div className='flex flex-col w-full h-auto font-roboto'>
         <Top/>
        <div className='flex flex-row w-full '>
            <div className="w-2/3 mt-24 ml-9">
                <span className='text-3xl text-green-600 p-4 pl-0'>-Pitch Venture</span>
                <div className='text-5xl font-bold  font-mono '>We help Surface</div>
                <span className='text-5xl '>Innovations in Technology</span>
                <div className='text-xl mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, suscipit. Eius laudantium nobis vitae nesciunt, quibusdam omnis nam, iusto ad impedit, molestiae a. Consectetur totam rerum labore laudantium nulla, asperiores nostrum cumque voluptas temporibus quas praesentium, minus deserunt dolores alias maiores, modi sit nam itaque? Eius consectetur ipsum veritatis cupiditate?</div>
                <div className='flex flex-row flex-wrap gap-10 text-white'>
                    <button className='bg-orange-700 mt-10 rounded-lg py-3 px-5'><Link to='/login'>Learn more <FaLongArrowAltRight className='inline'/></Link></button>
                    <button className='bg-orange-700 mt-10 rounded-lg py-3 px-10'>Invest <FaLongArrowAltRight className='inline'/></button>
                </div>
            </div>
            <div className="w-1/3">
                <img src={hero} />
            </div>
        </div>
        <div className='text-lg opacity-45 ml-10'>
            Our Partners
            <div className='flex flex-wrap gap-20'><span>HighGlow</span><span>Emajine</span><span>GlowUp</span></div>
        </div>
        <div className='flex flex-col justify-center items-center mt-16 gap-4'>
            <div className='text-lg font-bold text-green-700'>Categories</div>
            <div className='text-3xl font-bold'>Explore Our Investment </div>
            <div className='text-3xl font-bold'>Featured Categories</div>
            <div className='text-sm'>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
            </div>
            </div> 
            <div className='flex flex-wrap text-xl text-center items-center justify-around mt-10'>
                <div className="border-2 flex flex-col justify-center items-center p-5 h-48 w-48 shadow-lg shadow-slate-300 bg-white"><GiCircuitry className='w-20 h-24'/><span>Technology</span></div>
                <div className="border-2 flex flex-col justify-center items-center p-5 h-48 w-48 shadow-lg shadow-slate-300 bg-white"><GiBookCover className='w-20 h-24'/><span>Education</span></div>
                <div className="border-2 flex flex-col justify-center items-center p-5 h-48 w-48 shadow-lg shadow-slate-300 bg-white"><FaBriefcaseMedical className='w-20 h-24'/><span>Healthcare</span></div>
                <div className="border-2 flex flex-col justify-center items-center p-5 h-48 w-48 shadow-lg shadow-slate-300 bg-white"><GiTShirt className='w-20 h-24'/><span>Fashion</span></div>
                <div className='border-2 flex flex-col justify-center items-center p-5 h-48 w-48 shadow-lg shadow-slate-300 bg-white'><GiArtificialIntelligence className='w-20 h-24'/><span>AI</span></div>
            </div>
            <div className='flex flex-col justify-center items-center mt-16 gap-4'>
            <div className='text-xl font-bold text-green-700'>Recent Projects</div>
            <div className='text-sm'>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
            </div>
            </div> 
            <div className="flex flex-wrap flex-col  justify-around items-center lg:flex-row md:flex-row md:gap-4 sm:flex-col sm:items-center">
            <Suspense  fallback={<div>Loading..</div>} >
            <ProjCard_Home props={obj} limit={5}/>
            </Suspense>
            </div>
            <Partners_page/>
            {/* adding testimonial section using carasouels. */}
            <div className='flex flex-col justify-center items-center mt-48 gap-4'>
            <div className='text-4xl font-bold text-slate-950'>Testimonials</div>
            <div className='text-sm'>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
            </div>
            </div> 
            <div >
                <Suspense  fallback={<div>Loading..</div>}><Testimonials props={testimonials}/></Suspense>
            </div>

            {/* news segment will be here */}
            
            
        </div>
      
    )
}
