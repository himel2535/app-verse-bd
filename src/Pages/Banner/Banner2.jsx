import React from "react";

const Banner2 = () => {
  return (
    <div className="py-6 w-full text-center items-center justify-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
      <h2 className="font-bold text-xl mb-3">
        Trusted by Millions, Built for You
      </h2>
      <div className="grid grid-cols-3 justify-center ">
        <div>
          <p className="text-xs md:text-sm text-gray-300">Total Downloads</p>
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl my-1">
            29.6M
          </h1>
          <p className="text-gray-300 text-xs md:text-sm">
            21% more than last month
          </p>
        </div>
        <div>
          <p className="text-xs md:text-sm text-gray-300">Total Reviews</p>
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl my-1">
            906K
          </h1>
          <p className="text-gray-300 text-xs md:text-sm">
            46% more than last month
          </p>
        </div>
        <div>
          <p className="text-xs md:text-sm text-gray-300">Active Apps</p>
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl my-1">
            132+
          </h1>
          <p className="text-gray-300 text-xs md:text-sm">
            31 more will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
