import React from "react";
const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 mt-8"
        style={{ backgroundImage: "url('/images/hero1.webp')" }}>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-opacity-40 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-white">
          <h1
            data-aos="zoom-in"
            className="text-5xl  lg:6xl font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]">
            Find your next Home in Las Vegas
          </h1>
          <p data-aos="zoom-in" className="text-xl lg:pr-[500px] pr-0 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            suscipit doloribus alias repudiandae consequuntur, dicta,
            perferendis perspiciatis eligendi neque velit aspernatur impedit
            voluptate aut accusamus? Ut maiores reprehenderit commodi dolore?
          </p>
        </div>
      </section>

      {/* Form Section Overlapping Hero */}
      <div className="relative z-30 -mt-16 flex justify-center">
        <div
          data-aos="zoom-in"
          id="form"
          className="bg-white lg:w-[70%] w-full grid lg:grid-cols-4 grid-cols-1 items-center gap-6 p-8 rounded-xl shadow-lg">
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city, or pincode"
              className="bg-white p-2 w-full border-b-[1px] border-[#c9c7c1] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          {/* Add other form fields here as needed */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white"> Types</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="Option1">Rentals</option>
              <option value="Option2">Seles</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Option1">Apartments</option>
              <option value="Option2">Duples</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
            </select>
          </div>

          <div className="w-full">
            <button className="bg-primary hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-2 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
