import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <h3 className="font-semibold text-lg">HERO.IO</h3>
        </div>

        {/* Right Side: Social Icons */}
        <nav>
          <div className="flex gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631..." />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642..." />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      <p className="mt-6 text-sm text-gray-400 text-center">
        Copyright © {new Date().getFullYear()} — All rights reserved by AppVerse
      </p>
    </footer>
  );
};

export default Footer;
