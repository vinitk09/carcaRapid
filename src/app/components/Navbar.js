"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* This is the outer section  */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-around py-2 text-white transition-all duration-300 ${
          isScrolled ? "w-full max-w-none bg-black" : "max-w-9xl bg-transparent"
        }`}
      >
        <div>
          <Image src="/carcalogo.png" alt="logo" width={100} height={100} className="text-2xl font-bold" />
        </div>
        
        <div className="flex gap-14 font-semibold text-md items-center justify-stretch">
          
          {/* Home Dropdown */}
          <div className="relative group py-2">
            <div className="hover:text-yellow-500 cursor-pointer transition-colors">
              Home
            </div>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full z-50 w-44 rounded-md bg-white p-3 text-black shadow-lg opacity-0 invisible transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex flex-col gap-2 text-sm">
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Overview</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Updates</div>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <div className="hover:text-yellow-500 cursor-pointer transition-colors">
              Services
            </div>
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full z-50 w-56 rounded-md bg-white p-3 text-black shadow-lg opacity-0 invisible transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex flex-col gap-2 text-sm">
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Air Freight</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Ocean Transport</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Warehousing</div>
              </div>
            </div>
          </div>

          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Who We Are</div>
          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Services</div>
          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Why Carca</div>
          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Contact Us</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;