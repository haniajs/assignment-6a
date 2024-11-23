import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import React from "react";
import Courses from "@/components/Courses";
import Achievement from "@/components/Achievement";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home () {
  return (
    <div>
      <Start />
      <br className="hidden sm:block"/>
      <Navbar />
      <Hero />
      
      <div className="block sm:hidden">
        <Image src={"/images/4b.png"} alt="4b" height={500} width={500}
        className="w-[640px] h-[239.34px]"/>
      </div>

      <div className="hidden sm:block">
        <Image src={"/images/4a.png"} alt="4a" height={1000} width={1000}
        className="w-[1280px] h-[228px]"/>
      </div>
     
     <Courses />
     <Achievement />
     <Services />
     <About />
     <Testimonial />
     <Footer />
    </div>
  )
}

