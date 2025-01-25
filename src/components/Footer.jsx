import React from 'react'
import logo from '../assets/logo.jpg'
import banner from '../assets/banner2.jpg'
import { FaFacebookF ,FaYoutube,FaLinkedin,FaInstagramSquare,FaPhoneAlt} from "react-icons/fa";
import { FaSquareXTwitter,FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <div className='w-full relative h-80 mt-32 bg-cover bg-center' style={{backgroundImage:`url(${banner})`}}>
    <div className='w-full  bg-footer bg-opacity-80 flex flex-col  pb-28 text-center '>
      <div className='mt-14 text-3xl  font-semibold text-white text-wrap '>Don't miss out weekly updates about fundraisers <br/>and new Investment </div>
      <div className='flex flex-row justify-center gap-10 mt-10 flex-wrap'><input className='bg-footer rounded-md text-black border border-black p-2' type='text' placeholder='Enter your email address...'/><button className='bg-[#ff7369] rounded-md  p-4'>SUBSCRIBE</button></div>
    </div>

    <div className='w-full bg-footer_blue flex flex-row flex-wrap  justify-around text-white  text-xs pt-10'>

      <div className='w-1/4'>

        <div className='flex flex-col gap-10  '>
          <div className='flex flex-row gap-4'>
          <img src={logo} className='bg-white w-28 h-20'/>
          <div className='flex flex-col justify-center align-middle'>
          <span className='text-sm font-bold'>Pitch Venture</span><span>Crowdfunding</span>
          </div>
          </div>
          <div>Pitch Venture is a Crowdfunding Platform for startups by Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, error.</div>
          <div className='flex flex-row gap-10 justify-center '>
          <FaFacebookF className='h-5'/><FaSquareXTwitter className='h-5'/><FaYoutube className='h-5'/><FaLinkedin className='h-5'/><FaInstagramSquare className='h-5'/>
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-wrap  xl:gap-16 lg:gap-10 md:gap-5 s' >
        <div className='flex flex-col gap-5'>
          <span className="text-sm font-bold">PitchVenture</span>
          <span>Why PV</span>
          <span>Enterprise</span>
          <span>Customer Story</span>
          <span>Security</span>
          <span>Pricing</span>
        </div>
        <div className='flex flex-col gap-5'>
          <span className="text-sm font-bold">Resources</span>
          <span>Download</span>
          <span>Events</span>
          <span>Guides</span>
          <span>Partner</span>
          <span>Directories</span>
        </div>
        <div className='flex flex-col gap-5'>
          <span className="text-sm font-bold">Company</span>
          <span>About us</span>
          <span>Contact us</span>
          <span>Products</span>
          <span>Login</span>
          <span>Sign Up</span>
          <span>FAQ</span>
        </div>
        <div className='flex flex-col gap-5 '>
          <span className="text-sm font-bold">Get in Touch with Us</span>
          <span><FaLocationDot className='inline'/>  832 Gachibowli DLF Hydrabad <br/> Telangana India</span>
          <span><FaPhoneAlt  className='inline'/>  392-091-4322</span>
          <span><IoMdMail className='inline'/>  support@pitchventure.com</span>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Footer
