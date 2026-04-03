"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Slide data
  const slides = [
    {
      image: "/hero.webp",
      title: "Your Lightning Fast Logistics",
      description: "Carca Rapid Solutions Private Limited, established on May 17, 2017, is a reputable Non-Government company registered with the Registrar of Companies in Jharkhand. The esteemed directors, Rajiv Sachdev, Sharda Sachdev, and Ekta Chachra, lead the company. You can reach out to them via email at carcarapid@gmail.com. The registered address, Flat No 204, Girish Apartment, Deo Nagar Baradwari, Jamshedpur, Purba Singhbhum, JH 831001, reflects the company's physical location."
    },
    {
      image: "/plane-on-runway.webp", // Add your second image
      title: "Fast & Reliable Delivery Services",
      description: "Experience lightning-fast logistics with our state-of-the-art fleet and dedicated team. We ensure your cargo reaches its destination safely and on time, every time."
    },
    
  ];

  // Auto-slide every 9 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const handleSlideChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const handlePrevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    handleSlideChange(newIndex);
  };

  return (
    <div className="relative h-full overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={slides[currentIndex].image}
          alt="Hero background"
          fill
          className="object-cover transition-all duration-700"
          priority
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Content with Fade Up Animation */}
      <div className={`relative z-10 flex flex-col items-center justify-center h-screen py-30 text-white px-4 sm:px-6 transition-all duration-500 ${
        fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-4xl flex flex-col gap-4 sm:gap-6 md:gap-8 text-center mt-16 sm:mt-20 md:mt-28">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-10 leading-relaxed px-2 sm:px-0">
            {slides[currentIndex].description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <button className="px-6 sm:px-8 md:px-12 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 whitespace-nowrap">
              Our Services
            </button>
            <button className="px-6 sm:px-8 md:px-12 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 whitespace-nowrap">
              Why Carca
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  );
};

export default Hero;