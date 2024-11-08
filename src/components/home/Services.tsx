import React from "react";
import { service } from "../global/export";


const Services = () => {

  return (
    <div >
      <section
        id="services"
        className={` p-6 lg:w-[90%] bg-red-100 h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 py-20 gap-20`}>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white">
            Top real estate <br/> services available
          </h1>

          <div
            id="service-box"
            className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
            {service.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={index}
                className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer">
                <div className="p-6 rounded-full bg-red-200 ">
                  <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
                <h1 className="text-black text-[22px] font-semibold dark:text-white">
                  {item.title}
                </h1>
                <p className="text-lg text-slate-700 dark:text-white">
                  {item.desc}
                </p>
                <button className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
