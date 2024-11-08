import React from "react";

const PopularAreas = () => {
  return (
    <div>
      <section className="lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20">
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          <div>
            <h1 className="text-red-500 text-xl dark:text-white">
              POPULAR AREAS
            </h1>
            <h1 className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white">
              Explore most
              <br /> Popular areas
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              style={{ backgroundImage: "url('/images/area1.jpg')" }}
              className="h-[400px] bg-cover bg-center rounded-xl">
              <span className="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, repellendus!
              </span>
            </div>
            <div
              style={{ backgroundImage: "url('/images/area2.jpg')" }}
              className="h-[400px] bg-cover bg-center rounded-xl">
              <span className="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, repellendus!
              </span>
            </div>
            <div
              style={{ backgroundImage: "url('/images/area3.jpg')" }}
              className="h-[400px] bg-cover bg-center rounded-xl">
              <span className="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, repellendus!
              </span>
            </div>
          </div>
        </div>

        <div
          id="bottom"
          className="flex flex-col w-full lg:justify-center lg:flex-row justify-start items-center gap-6 ">
          <div className="flex justify-center lg:items-center gap-8 w-full">
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              {" "}
              5K
            </h1>
            <h1 className="text-gray-500 text-[18px]">
              ACTIVE
              <br />
              LISTINGS
            </h1>
          </div>
          <div className="flex justify-center lg:items-center gap-8 w-full">
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              9K
            </h1>
            <h1 className="text-gray-500 text-[18px]">
              SOLID
              <br />
              LISTINGS
            </h1>
          </div>
          <div className="flex justify-center lg:items-center gap-8 w-full">
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              6K
            </h1>
            <h1 className="text-gray-500 text-[18px]">
              CLIENTS
              <br />
              WE`VE SERVED
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
