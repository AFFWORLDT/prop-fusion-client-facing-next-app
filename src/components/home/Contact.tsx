import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className=" lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10">
        <div
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send a message today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="email"
            placeholder="Enter your valid email here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            type="number"
            placeholder="Enter your valid mobile number here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="Enter your mesaage here...."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            {" "}
            SEND EMAIL
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white">
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            cum.
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            voluptatum architecto, illum unde quaerat pariatur sunt aliquam
            ipsum deleniti! Ratione.
          </p>
          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:text-white">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
