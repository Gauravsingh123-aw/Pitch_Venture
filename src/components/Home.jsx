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
        <div className="flex flex-col min-h-screen w-full font-roboto bg-gradient-to-br from-white via-slate-50 to-slate-200">
            <Top />
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row w-full max-w-7xl mx-auto py-16 px-6 md:px-12 items-center gap-8 md:gap-0">
                <div className="md:w-1/2 flex flex-col gap-6">
                    <span className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight">Pitch Venture</span>
                    <h1 className="text-3xl md:text-5xl font-bold font-mono leading-tight text-slate-900">We help Surface <br className="hidden md:block"/>Innovations in Technology</h1>
                    <p className="text-lg md:text-xl text-slate-700 mt-2">Empowering visionaries to bring their ideas to life. Join us to discover, invest, and grow with the next generation of startups.</p>
                    <div className="flex flex-row flex-wrap gap-4 mt-6">
                        <Link to="/login">
                            <button className="bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg py-3 px-7 text-white font-semibold shadow-md flex items-center gap-2">
                                Learn more <FaLongArrowAltRight />
                            </button>
                        </Link>
                        <button className="bg-green-600 hover:bg-green-700 transition-colors rounded-lg py-3 px-7 text-white font-semibold shadow-md flex items-center gap-2">
                            Invest <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md h-64 md:h-80">
                    <defs>
                      <linearGradient id="cfGradient" x1="0" y1="0" x2="400" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4f46e5" />
                        <stop offset="0.5" stopColor="#22c55e" />
                        <stop offset="1" stopColor="#a21caf" />
                      </linearGradient>
                      <radialGradient id="coinGradient" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e42" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="200" cy="160" rx="180" ry="120" fill="url(#cfGradient)" opacity="0.12" />
                    {/* Hands */}
                    <path d="M90 250 Q110 230 130 250 Q150 270 170 250" stroke="#4f46e5" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M310 250 Q290 230 270 250 Q250 270 230 250" stroke="#22c55e" strokeWidth="6" fill="none" strokeLinecap="round" />
                    {/* Coins */}
                    <ellipse cx="150" cy="220" rx="18" ry="18" fill="url(#coinGradient)" stroke="#fbbf24" strokeWidth="2" />
                    <ellipse cx="250" cy="220" rx="18" ry="18" fill="url(#coinGradient)" stroke="#fbbf24" strokeWidth="2" />
                    <ellipse cx="200" cy="180" rx="22" ry="22" fill="url(#coinGradient)" stroke="#fbbf24" strokeWidth="2" />
                    {/* Lightbulb (idea/startup) */}
                    <ellipse cx="200" cy="110" rx="28" ry="28" fill="#fffde7" stroke="#fbbf24" strokeWidth="3" />
                    <rect x="192" y="135" width="16" height="18" rx="6" fill="#fbbf24" />
                    <rect x="196" y="153" width="8" height="8" rx="2" fill="#fbbf24" />
                    <path d="M200 138 v-10" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                    <path d="M190 110 Q200 90 210 110" stroke="#fbbf24" strokeWidth="2" fill="none" />
                    {/* Sparkles */}
                    <circle cx="170" cy="90" r="3" fill="#a21caf" />
                    <circle cx="230" cy="80" r="2.5" fill="#22c55e" />
                    <circle cx="220" cy="140" r="2" fill="#4f46e5" />
                  </svg>
                </div>
            </section>

            {/* Partners Section */}
            <section className="w-full max-w-5xl mx-auto mt-8 mb-4 px-6">
                <div className="text-center text-lg font-semibold text-green-700 mb-2 tracking-wide">Our Partners</div>
                <div className="flex flex-wrap justify-center gap-12 md:gap-20 text-xl font-medium">
                    <div className="bg-white/80 rounded-xl shadow-md px-8 py-4 flex items-center gap-4 hover:scale-105 transition-transform border border-green-100">
                        <img src="https://img.icons8.com/color/48/000000/diamond.png" alt="HighGlow" className="w-8 h-8" />
                        <span className="text-green-800 font-bold">HighGlow</span>
                    </div>
                    <div className="bg-white/80 rounded-xl shadow-md px-8 py-4 flex items-center gap-4 hover:scale-105 transition-transform border border-green-100">
                        <img src="https://img.icons8.com/color/48/000000/idea.png" alt="Emajine" className="w-8 h-8" />
                        <span className="text-blue-700 font-bold">Emajine</span>
                    </div>
                    <div className="bg-white/80 rounded-xl shadow-md px-8 py-4 flex items-center gap-4 hover:scale-105 transition-transform border border-green-100">
                        <img src="https://img.icons8.com/color/48/000000/sparkling.png" alt="GlowUp" className="w-8 h-8" />
                        <span className="text-pink-600 font-bold">GlowUp</span>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="w-full max-w-6xl mx-auto mt-16 px-6">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="text-lg font-bold text-green-700 uppercase tracking-wider">Categories</div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-900">Explore Our Investment</div>
                    <div className="text-2xl md:text-3xl font-bold text-slate-900">Featured Categories</div>
                    <div className="text-sm text-slate-500 mt-2 text-center max-w-xl">
                        Discover a wide range of sectors to invest in, from cutting-edge technology to creative industries. Find your passion and make an impact.
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="border-2 border-green-100 flex flex-col justify-center items-center p-6 h-48 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
                        <GiCircuitry className="w-16 h-16 text-green-600 mb-2" />
                        <span className="font-semibold text-lg">Technology</span>
                    </div>
                    <div className="border-2 border-green-100 flex flex-col justify-center items-center p-6 h-48 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
                        <GiBookCover className="w-16 h-16 text-blue-600 mb-2" />
                        <span className="font-semibold text-lg">Education</span>
                    </div>
                    <div className="border-2 border-green-100 flex flex-col justify-center items-center p-6 h-48 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
                        <FaBriefcaseMedical className="w-16 h-16 text-red-600 mb-2" />
                        <span className="font-semibold text-lg">Healthcare</span>
                    </div>
                    <div className="border-2 border-green-100 flex flex-col justify-center items-center p-6 h-48 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
                        <GiTShirt className="w-16 h-16 text-pink-500 mb-2" />
                        <span className="font-semibold text-lg">Fashion</span>
                    </div>
                    <div className="border-2 border-green-100 flex flex-col justify-center items-center p-6 h-48 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow">
                        <GiArtificialIntelligence className="w-16 h-16 text-purple-600 mb-2" />
                        <span className="font-semibold text-lg">AI</span>
                    </div>
                </div>
            </section>

            {/* Recent Projects Section */}
            <section className="w-full max-w-6xl mx-auto mt-20 px-4 md:px-6">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-100 via-green-50 to-green-200 shadow text-green-800 text-lg font-bold uppercase tracking-wider">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                        Recent Projects
                    </div>
                    <div className="text-sm text-slate-500 text-center max-w-xl mt-2">
                        Explore the latest projects from innovative founders. Support, invest, and be part of their journey.
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                  {obj.map((project, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md border border-slate-100 flex flex-col overflow-hidden hover:shadow-lg transition-shadow w-full max-w-[180px] mx-auto md:max-w-[220px]"
                    >
                      <img
                        src={project.img}
                        alt={project.project_head}
                        className="w-full h-24 sm:h-28 md:h-32 object-cover"
                      />
                      <div className="p-3 md:p-4 flex flex-col gap-1 flex-1">
                        <span className="text-[11px] md:text-xs font-bold text-green-600 tracking-widest uppercase mb-1">{project.field}</span>
                        <h3 className="text-[13px] md:text-base font-semibold text-slate-900 line-clamp-2">{project.project_head}</h3>
                        <div className="flex flex-row justify-between items-center mt-1 md:mt-2">
                          <span className="text-[10px] md:text-xs text-slate-500 font-medium">By {project.founder_name}</span>
                          <span className="text-[10px] md:text-xs bg-green-100 text-green-700 rounded px-2 py-1">{project.days_left}d</span>
                        </div>
                        <div className="flex flex-row justify-between items-center mt-1 md:mt-2">
                          <span className="text-[10px] md:text-xs text-slate-400">Raised</span>
                          <span className="text-[13px] md:text-base font-bold text-green-700">{project.fundraised}</span>
                        </div>
                        <button className="mt-2 md:mt-3 bg-green-600 hover:bg-green-700 text-white rounded-lg py-1.5 md:py-2 px-3 md:px-4 font-semibold transition-colors w-full text-xs md:text-sm">Invest</button>
                      </div>
                    </div>
                  ))}
                </div>
            </section>

            {/* Partners Page Section */}
            <section className="w-full max-w-6xl mx-auto mt-20 px-6">
                <Partners_page />
            </section>

            {/* Testimonials Section */}
            <section className="w-full max-w-6xl mx-auto mt-32 px-6">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 via-pink-50 to-pink-200 shadow text-purple-800 text-2xl md:text-3xl font-bold">
                        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2" /><circle cx="12" cy="7" r="4" /></svg>
                        Testimonials
                    </div>
                    <div className="text-sm text-slate-500 text-center max-w-xl mt-2">
                        Hear from our investors and founders about their experience with Pitch Venture.
                    </div>
                </div>
                <div className="bg-white/80 rounded-2xl shadow-lg p-6 md:p-10">
                    <Suspense fallback={<div>Loading..</div>}>
                        <Testimonials props={testimonials} />
                    </Suspense>
                </div>
            </section>

            {/* News segment placeholder */}
            {/* <section className="w-full max-w-6xl mx-auto mt-20 px-6">News segment will be here</section> */}
        </div>
    );
}
