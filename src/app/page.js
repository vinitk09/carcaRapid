import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Logistics from "./components/Logistics";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
    {/* <main> */}
    <Navbar/>
    <Hero/>
    <Services/>
    <Logistics/>
    <Testimonial/>
    {/* </main> */}
    </>
  );
}
