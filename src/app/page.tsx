import About from "@/components/home/About";
import Clients from "@/components/home/Clients";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import PopularAreas from "@/components/home/PopularAreas";
import Properties from "@/components/home/Properties";
import Services from "@/components/home/Services";
import React from "react";

function Home() {
  return (
    <>
     <Hero/>      
     <About/>
     <PopularAreas/>
     <Properties/>
     <Services/>
     <Clients/>
     <Contact/>
    </>

    
  );
}

export default Home;
