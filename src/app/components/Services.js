"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const sectionRefs = useRef([]);

  const services = [
    {
      id: 1,
      title: "Transportation",
      description: "We provide end-to-end logistics solutions including transportation, distribution, and supply chain management. Our advanced tracking systems ensure real-time visibility of your shipments.",
      image: "/transportation.jpg"
    },
    {
      id: 2,
      title: "Warehousing",
      description: "State-of-the-art warehousing facilities with climate control, inventory management, and 24/7 security. We offer flexible storage solutions tailored to your business needs.",
      image: "/warehousing.jpg"
    },
    {
      id: 3,
      title: "Supply Chain Management",
      description: "Optimize your supply chain with our integrated solutions. From procurement to delivery, we streamline operations for maximum efficiency and cost savings.",
      image: "/supplychain.jpg"
    }
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleServices((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
      );

      if (ref) {
        observer.observe(ref);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section className="text-black py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Fade In */}
        <div className="text-center mb-16 opacity-100 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your logistics needs
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, idx) => (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
                visibleServices.includes(idx)
                  ? "opacity-100 translate-x-0"
                  : idx % 2 === 0
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              }`}
            >
              {idx % 2 === 0 ? (
                <>
                  {/* Left: Image Slide In */}
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Right: Content Slide In */}
                  <div className="transform transition-all duration-700 delay-200">
                    <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm mb-4">
                      Service {service.id}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <button className="group relative px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2">
                        Learn More
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Left: Content Slide In */}
                  <div className="transform transition-all duration-700 delay-200 order-2 md:order-1">
                    <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold rounded-full text-sm mb-4">
                      Service {service.id}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <button className="group relative px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2">
                        Learn More
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  
                  {/* Right: Image Slide In */}
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group order-1 md:order-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add these styles to your global CSS or use a CSS module */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;