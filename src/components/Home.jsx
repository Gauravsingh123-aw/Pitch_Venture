import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <div className='flex flex-row w-full'>
            <div className="w-2/3 mt-20 ml-9">
                <span className='text-3xl text-green-600 p-4 pl-0'>-Pitch Venture</span>
                <div className='text-6xl font-bold  font-mono '>We help Surface</div>
                <span className='text-6xl '>Innovations in Technology</span>
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
    )
}
