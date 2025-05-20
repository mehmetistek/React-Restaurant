import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
   <p>© 2025 burger33.com</p>
  <div className='dfooter'> 
    <FaInstagram/>
   <BsTwitter/>
   <BsFacebook/>
   </div>
        </div>
    </div>
  )
}

export default Footer