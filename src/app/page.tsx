import About from "@/components/home/About";
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
    </>

    
  );
}

export default Home;
