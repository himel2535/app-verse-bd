import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import githubLogo from "../../assets/Vector (1).png";

const Navbar = () => {
  const activeLinkStyle = `
    relative font-semibold
    text-transparent bg-clip-text 
    bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-full after:h-[4px]
    after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]
  `;

  const normalLinkStyle = `
  text-gray-700 font-medium
`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="font-semibold text-xl flex items-center gap-1">
          <img className="w-8 h-8" src={logo} alt="" />
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : normalLinkStyle
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/himel2535"
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          <img src={githubLogo} alt="GitHub Logo" className="w-5 h-5" />
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
