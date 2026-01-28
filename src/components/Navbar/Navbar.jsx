import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full">

  {/* Background Layer */}
  <div
    className={`
      absolute inset-0
      bg-black/80 backdrop-blur-lg
      transition-opacity duration-500 ease-in-out
      ${isScrolled ? 'opacity-100' : 'opacity-0'}
    `}
  />

  
  <div className="relative px-[6%] py-3.75 flex justify-between text-[14px]">

  
    <div className="flex items-center gap-12.5">
      <img src={logo} className="w-22.5" alt="logo" />
      <ul className="flex gap-5 list-none">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">TV Shows</li>
        <li className="cursor-pointer">Movies</li>
        <li className="cursor-pointer">New & Popular</li>
        <li className="cursor-pointer">My List</li>
        <li className="cursor-pointer">Browse by Languages</li>
      </ul>
    </div>

    
    <div className="flex items-center gap-5">
      <img src={search_icon} className="w-5 cursor-pointer" />
      <img src={bell_icon} className="w-5 cursor-pointer" />

      <div className="relative group flex items-center gap-2.5 cursor-pointer">
        <img src={profile_img} className="w-9 rounded-sm" />
        <img src={caret_icon} />

        <div className="absolute right-0 top-full hidden group-hover:block
                        bg-[#191919] px-5 py-4 no rounded text-[13px] underline">
          <p onClick={() => { logout() }}>Sign Out of Netflix</p>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}

export default Navbar
