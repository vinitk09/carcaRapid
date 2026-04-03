"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      company: "Swift Retail Pvt Ltd",
      quote:
        "Carca transformed our delivery timelines. Their team communicates clearly and every shipment is tracked end-to-end.",
    },
    {
      id: 2,
      name: "Nisha Kapoor",
      company: "BlueWave Exports",
      quote:
        "We handle sensitive cargo and needed precision. Carca consistently delivers with reliability and zero operational stress.",
    },
    {
      id: 3,
      name: "Rohan Verma",
      company: "Urban Cart Logistics",
      quote:
        "From pickup to warehousing, everything feels streamlined. Their logistics support has helped us scale faster.",
    },
    {
      id: 4,
      name: "Priya Nair",
      company: "NorthStar Traders",
      quote:
        "Their response time is excellent and delivery updates are always accurate. We trust Carca for critical shipments.",
    },
    {
      id: 5,
      name: "Kabir Sharma",
      company: "PrimeTech Supplies",
      quote:
        "The team is proactive and transparent. Carca helped us reduce delays and improve customer satisfaction.",
    },
    {
      id: 6,
      name: "Meera Joshi",
      company: "Atlas Distribution",
      quote:
        "Excellent service quality with smooth coordination across regions. Their logistics planning is genuinely impressive.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const visibleTestimonials = Array.from({ length: visibleCards }, (_, idx) => {
    return testimonials[(currentIndex + idx) % testimonials.length];
  });

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          Our Estimeed Clients
        </h2>

        <div className="relative mx-auto overflow-hidden">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <p className="mb-6 text-base leading-relaxed text-gray-700">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <FaUserCircle className="text-3xl text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
