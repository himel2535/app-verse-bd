import React from "react";
import { NavLink } from "react-router";
import playStoreLogo from "../../assets/fi_16076057.png";
import appStoreLogo from "../../assets/fi_5977575.png";
import hero from "../../assets/hero.png";

const Banner1 = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <h1 className="font-semibold text-4xl">
        We Build <br />{" "}
        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="my-3 text-gray-400">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className=" flex items-center gap-5 justify-center mt-5">
        <a
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2"
        >
          <img className="h-6" src={playStoreLogo} alt="Play Store" />
          Google Play
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2"
        >
          <img className="h-6" src={appStoreLogo} alt="App Store" />
          App Store
        </a>
      </div>
      <img
        className="mt-6 h-2/3 md:h-1/2 lg:h-1/3 w-2/3 md:w-1/2 lg:w-1/3"
        src={hero}
        alt=""
      />
    </div>
  );
};

export default Banner1;
