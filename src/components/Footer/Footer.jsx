import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer py-7.5 px-[4%] max-w-250 my-0 mx-auto'>
      <div className="footer-icons flex gap-5 my-10 mx-0">
         <img className='w-7.5 cursor-pointer' src={facebook_icon} alt="" />
         <img className='w-7.5 cursor-pointer' src={instagram_icon} alt="" />
         <img className='w-7.5 cursor-pointer' src={twitter_icon} alt="" />
         <img className='w-7.5 cursor-pointer' src={youtube_icon} alt="" />
      </div>
        <ul className='grid list-none p-0 mb-7.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.75 '>
          <li>Audio Description</li>
          <li>Help CCentre</li>
          <li>Gift Card</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text text-gray-500 text-[14px]'>© 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
