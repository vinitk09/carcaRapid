"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setExpandedDropdown(expandedDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between px-4 md:px-8 md:justify-around py-2 text-white transition-all duration-300 ${
          isScrolled ? "w-full max-w-none bg-black" : "w-full max-w-none bg-transparent md:max-w-9xl md:bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/carcalogo.png" alt="logo" width={80} height={80} className="text-2xl font-bold md:w-[100px] md:h-[100px] w-[70px] h-[70px]" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-14 font-semibold text-md items-center">
          
          {/* Home Dropdown */}
          <div className="relative group py-2">
            <div className="hover:text-yellow-500 cursor-pointer transition-colors">
              Home
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <div className="hover:text-yellow-500 cursor-pointer transition-colors">
              Services
            </div>
            <div className="absolute left-0 top-full z-50 w-56 rounded-md bg-white p-3 text-black shadow-lg opacity-0 invisible transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex flex-col gap-2 text-sm">
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Core Services</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Transport Services</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Warehousing Services</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Supply Chain Services</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Consulting Services</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">Import Export Services</div>
              </div>
            </div>
          </div>

          {/* Who We Are Dropdown */}
          <div className="relative group py-2">
            <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Who We Are</div>
            <div className="absolute left-0 top-full z-50 w-56 rounded-md bg-white p-3 text-black shadow-lg opacity-0 invisible transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="flex flex-col gap-2 text-sm">
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">About Us</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">CARCA Group</div>
                <div className="cursor-pointer rounded px-4 py-2 transition-colors hover:bg-gray-100 hover:text-yellow-500">CSR</div>
              </div>
            </div>
          </div>

          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Services</div>
          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Why Carca</div>
          <div className="hover:text-yellow-500 cursor-pointer py-2 transition-colors">Contact Us</div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 right-0 z-40 bg-black bg-opacity-95 text-white pt-4 pb-6">
          <div className="flex flex-col gap-4 px-6">
            
            {/* Home */}
            <div className="py-2 border-b border-gray-700">
              <div className="hover:text-yellow-500 cursor-pointer transition-colors">
                Home
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full py-2 flex justify-between items-center hover:text-yellow-500 transition-colors"
              >
                <span>Services</span>
                <span className={`transition-transform ${expandedDropdown === "services" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {expandedDropdown === "services" && (
                <div className="flex flex-col gap-2 pl-4 py-2 text-sm">
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Core Services</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Transport Services</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Warehousing Services</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Supply Chain Services</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Consulting Services</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">Import Export Services</div>
                </div>
              )}
            </div>

            {/* Who We Are Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleDropdown("about")}
                className="w-full py-2 flex justify-between items-center hover:text-yellow-500 transition-colors"
              >
                <span>Who We Are</span>
                <span className={`transition-transform ${expandedDropdown === "about" ? "rotate-180" : ""}`}>▼</span>
              </button>
              {expandedDropdown === "about" && (
                <div className="flex flex-col gap-2 pl-4 py-2 text-sm">
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">About Us</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">CARCA Group</div>
                  <div className="cursor-pointer py-2 hover:text-yellow-500 transition-colors">CSR</div>
                </div>
              )}
            </div>

            <div className="py-2 border-b border-gray-700">
              <div className="hover:text-yellow-500 cursor-pointer transition-colors">
                Why Carca
              </div>
            </div>

            <div className="py-2">
              <div className="hover:text-yellow-500 cursor-pointer transition-colors">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;