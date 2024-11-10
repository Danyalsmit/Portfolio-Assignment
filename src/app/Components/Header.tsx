// import React from 'react';
// import Image from 'next/image';

// const Header = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <header className="navbar-header z-10 w-full h-[65px] text-white bg-[#2d0055] flex flex-row justify-between items-center fixed p-6 md:jstify-center">
//         {/* Logo */}
//         <div className="navbar-logo flex items-center space-x-2">
//           <Image
//             src="/hacker.svg"
//             alt="hacker logo"
//             width={60}
//             height={18}
//             style={{height:"20px"}}
//           />
//           <span className='hidden sm:block'>Atech Solutions</span>
//         </div>

//         {/* Navbar Links */}
//         <div className="navbar-links ">
//           <ul className="flex flex-row gap-8 ">
//             <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">About</li>
//             <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">Projects</li>
//             <li className="text-sm sm:text-xs font-semibold text-white hover:text-gray-300">Contact Us</li>
//           </ul>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="top-0 left-0 right-0 z-10 bg-[#2d0055]">
        <header className="w-full h-[65px] text-white flex flex-row justify-between items-center p-6 md:px-8">
          {/* Logo */}
          <div className="navbar-logo flex items-center space-x-2">
            <Image
              src="/hacker.svg"
              alt="hacker logo"
              width={60}
              height={18}
              style={{ height: "20px" }}
            />
            <span className="hidden sm:block text-lg font-semibold">
              Danyal Khan
            </span>
          </div>

          {/* Navbar Links */}
          <div className="navbar-links hidden sm:block">
            <ul className="flex flex-row gap-8">
              <li className="cursor-pointer text-sm sm:text-base font-semibold text-white hover:text-gray-300">
                About
              </li>
              <li className="text-sm sm:text-base font-semibold text-white hover:text-gray-300">
                Projects
              </li>
              <li className="text-sm font-semibold text-white hover:text-gray-300 cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          {/* Mobile Navbar Links (Hidden on larger screens) */}
          <div className="navbar-links sm:hidden">
            <ul className="flex flex-col gap-4 text-center">
              <li className="text-sm font-semibold text-white hover:text-gray-300">
                About
              </li>
              <li className="text-sm font-semibold text-white hover:text-gray-300">
                Projects
              </li>
              {/* Remove <a> and use onClick */}
              <li className="text-sm font-semibold text-white hover:text-gray-300 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
