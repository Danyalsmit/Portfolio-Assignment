import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar-header z-10 w-full h-[65px] text-white bg-[#2d0055] flex flex-row justify-between items-center fixed p-6 border-b border-black">
        {/* Logo */}
        <div className="navbar-logo">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={140}
            height={38}
            priority
          />
        </div>

        {/* Navbar Links */}
        <div className="navbar-links">
          <ul className="flex flex-row gap-16 sm:gap-8 md:gap-12">
            <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">About</li>
            <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">Projects</li>
            <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
