import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight,FaBriefcaseMedical } from "react-icons/fa";
import { GiCircuitry,GiTShirt,GiBookCover,GiArtificialIntelligence } from "react-icons/gi";
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <div className='flex flex-col w-full h-auto font-roboto'>
        <div className='flex flex-row w-full '>
            <div className="w-2/3 mt-12 ml-9">
                <span className='text-3xl text-green-600 p-4 pl-0'>-Pitch Venture</span>
                <div className='text-5xl font-bold  font-mono '>We help Surface</div>
                <span className='text-5xl '>Innovations in Technology</span>
                <div className='text-xl mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, suscipit. Eius laudantium nobis vitae nesciunt, quibusdam omnis nam, iusto ad impedit, molestiae a. Consectetur totam rerum labore laudantium nulla, asperiores nostrum cumque voluptas temporibus quas praesentium, minus deserunt dolores alias maiores, modi sit nam itaque? Eius consectetur ipsum veritatis cupiditate?</div>
                <div className='flex flex-row gap-10 text-white'>
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
            <div>
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
            <div className='text-lg font-bold text-green-700'>Recent Projects</div>
            <div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, tempore!</div>
            </div>
            </div> 
        </div>
      
    )
}
