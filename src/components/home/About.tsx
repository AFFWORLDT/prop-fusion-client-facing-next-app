import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
      <div>
        <Image
          width={500}
          height={600}
          src={"/images/about.jpg"}
          alt="about img"
          className="rounded-2xl lg:w-[500px] lg-h-[600px]"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500 text-xl dark:text-white">
          {" "}
          WHO WE ARE
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-dleay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          quam.
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-dleay="200"
          className="text-xl text-grey-600 dark:text-white text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed
          laudantium pariatur tempore vero sunt velit impedit quis, quia quod
          ipsum nobis aliquam, tempora, soluta placeat assumenda? Dolore, nobis
          nisi.
        </p>

        <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg py-2 px-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
          Read More{" "}
        </button>
      </div>
    </section>
  );
};

export default About;
