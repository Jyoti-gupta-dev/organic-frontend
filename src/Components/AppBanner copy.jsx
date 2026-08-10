
import React from "react";

import appleapp from "../Images/appleapp.png";
import playstore from "../Images/playstore.png";
 import rightapp from "../Images/rightapp.png";

const AppBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-[#F8BE18] rounded-[35px] overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[220px]">

          {/* Left Content */}
          <div className="px-8 md:px-16 ml-10">

            <h2 className="text-4xl lg:text-3xl font-bold text-[#1d1d1d] leading-tight">
              Download Organic App
            </h2>

            <p className="mt-4 text-gray-700 text-lg">
              Online Orders made easy, fast and reliable
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
 
              <img
                src={appleapp}
                alt="appleapp"
                className="w-44 hover:scale-105 transition duration-300 cursor-pointer"
              />

              <img
                src={playstore}
                alt="Playstore"
                className="w-44 hover:scale-105 transition duration-300 cursor-pointer"
              /> 

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center lg:justify-end items-end h-full">

            <img
              src={rightapp}
              alt="rightapp"
              className="w-[620px] max-w-full object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppBanner;