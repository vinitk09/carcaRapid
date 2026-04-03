"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoPersonAddOutline } from "react-icons/io5";
import {
  FaGlobeAmericas,
  FaLaptopCode,
  FaHandshake,
  FaMedal,
} from "react-icons/fa";

const Logistics = () => {
  const logisticServices = [
    {
      id: 1,
      title: "Reliable Expertise",
      description:
        "Count on our seasoned professionals for a reliable and secure logistics experience. Your shipments are handled with precision and care.",
      icon: <IoPersonAddOutline />,
    },
    {
      id: 2,
      title: "Pan India, Local Excellence",
      description:
        "Benefit from our extensive worldwide network, ensuring seamless operations across borders. We provide a truly global reach with local expertise.",
      icon: <FaGlobeAmericas />,
    },
    {
      id: 3,
      title: "Tech-Driven Solutions",
      description:
        "Embrace cutting-edge technology with real-time tracking, data analytics, and tailored reporting. Stay informed, gain insights, and maintain control over your supply chain.",
      icon: <FaLaptopCode />,
    },
    {
      id: 4,
      title: "Customer-Centric Commitment",
      description:
        "Your satisfaction is our priority. Our customer-centric approach ensures personalized services, addressing your unique logistics requirements.",
      icon: <FaHandshake />,
    },
    {
      id: 5,
      title: "Carca Advantage",
      description:
        "Experience the distinctive Carca Advantage in Logistics Excellence. Choose us for unparalleled service, reliability, and tailored solutions for your logistics needs.",
      icon: <FaMedal />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Section with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 p-4  bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Unlocking Logistics
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive logistics solutions to meet your business
            needs. Our services include transportation, warehousing, supply
            chain management, and more. With our advanced tracking systems and
            dedicated customer support, we ensure your shipments are delivered
            on time and in perfect condition.
          </p>
        </motion.div>

        {/* Cards Grid with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {logisticServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group  bg-white p-6 cursor-pointer shadow-md hover:shadow-2xl"
            >
              <motion.h2
                className="mb-3 flex items-center gap-3 text-xl font-bold"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full  text-blue-600"
                  whileHover={{
                    scale: 1.2,
                    rotate: 6,
                    backgroundColor: "#eab308",
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.span>
                {service.title}
              </motion.h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logistics;
