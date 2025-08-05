import React from 'react'
import logo from '../assets/logo.jpg'
import banner from '../assets/banner2.jpg'
import { FaFacebookF ,FaYoutube,FaLinkedin,FaInstagramSquare,FaPhoneAlt} from "react-icons/fa";
import { FaSquareXTwitter,FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-green-50 via-white to-slate-100 pt-16 pb-0 mt-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 pb-10 border-b border-slate-200">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} className="w-20 h-14 rounded-lg border border-slate-200 shadow-sm bg-white" alt="Pitch Venture Logo" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-green-700">Pitch Venture</span>
                <span className="text-xs text-slate-500">Crowdfunding</span>
              </div>
            </div>
            <div className="text-slate-600 text-sm max-w-xs text-center md:text-left">Pitch Venture is a Crowdfunding Platform for startups. Empowering innovation and growth for founders and investors.</div>
            <div className="flex flex-row gap-4 justify-center md:justify-start mt-2">
              <FaFacebookF className="h-5 w-5 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer" />
              <FaSquareXTwitter className="h-5 w-5 text-slate-500 hover:text-black transition-colors cursor-pointer" />
              <FaYoutube className="h-5 w-5 text-slate-500 hover:text-red-600 transition-colors cursor-pointer" />
              <FaLinkedin className="h-5 w-5 text-slate-500 hover:text-blue-800 transition-colors cursor-pointer" />
              <FaInstagramSquare className="h-5 w-5 text-slate-500 hover:text-pink-500 transition-colors cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-end">
            <div className="text-2xl font-semibold text-green-700 mb-2">Stay Updated</div>
            <div className="flex flex-row gap-2">
              <input className="rounded-md border border-slate-300 px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-200 bg-white" type="text" placeholder="Enter your email address..." />
              <button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-5 py-2 font-semibold transition-colors">SUBSCRIBE</button>
            </div>
            <div className="text-xs text-slate-400 mt-1">Don't miss weekly updates about fundraisers and new investments.</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 py-6 gap-4">

        <div className="flex flex-row gap-8 md:gap-16 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-700 mb-1">PitchVenture</span>
            <span className="hover:text-green-700 cursor-pointer">Why PV</span>
            <span className="hover:text-green-700 cursor-pointer">Enterprise</span>
            <span className="hover:text-green-700 cursor-pointer">Customer Story</span>
            <span className="hover:text-green-700 cursor-pointer">Security</span>
            <span className="hover:text-green-700 cursor-pointer">Pricing</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-700 mb-1">Resources</span>
            <span className="hover:text-green-700 cursor-pointer">Download</span>
            <span className="hover:text-green-700 cursor-pointer">Events</span>
            <span className="hover:text-green-700 cursor-pointer">Guides</span>
            <span className="hover:text-green-700 cursor-pointer">Partner</span>
            <span className="hover:text-green-700 cursor-pointer">Directories</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-700 mb-1">Company</span>
            <span className="hover:text-green-700 cursor-pointer">About us</span>
            <span className="hover:text-green-700 cursor-pointer">Contact us</span>
            <span className="hover:text-green-700 cursor-pointer">Products</span>
            <span className="hover:text-green-700 cursor-pointer">Login</span>
            <span className="hover:text-green-700 cursor-pointer">Sign Up</span>
            <span className="hover:text-green-700 cursor-pointer">FAQ</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold">Get in Touch with Us</span>
            <span><FaLocationDot className='inline'/>  832 Gachibowli DLF Hydrabad <br/> Telangana India</span>
            <span><FaPhoneAlt  className='inline'/>  392-091-4322</span>
            <span><IoMdMail className='inline'/>  support@pitchventure.com</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer
