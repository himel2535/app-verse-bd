import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-screen-xl flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <h3 className="font-semibold text-lg">HERO.IO</h3>
        </div>

        {/* Right: Social Icons */}
        <nav className="flex gap-4">
          {/* Twitter */}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 3c-2.734 0-4.951 2.216-4.951 4.951 0 .39.043.765.127 1.125A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0-.666 2.488c0 1.717.874 3.232 2.202 4.118a4.903 4.903 0 0 1-2.242-.619v.062c0 2.398 1.704 4.398 3.965 4.851a4.935 4.935 0 0 1-2.224.084c.627 1.956 2.444 3.381 4.6 3.419A9.868 9.868 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.009-7.513 14.009-14.01 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184C16.011 2.938 7.984 2.939 4.385 3.184c-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6c0-.955.192-1.333 1.115-1.333H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </nav>
      </div>

      <p className="mt-6 text-sm text-gray-400 text-center">
        Copyright © {new Date().getFullYear()} — All rights reserved by AppVerse
      </p>
    </footer>
  );
};

export default Footer;
