import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close, navIcon1, navIcon2, navIcon3 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const buttonStyles = {
    fontWeight: 700,
    color: "#fff",
    border: "1px solid #fff",
    padding: "18px 34px",
    fontSize: "18px",
    marginLeft: "18px",
    position: "relative",
    backgroundColor: "transparent",
    transition: "0.3s ease-in-out",
  };

  const buttonSpanStyles = {
    zIndex: 1,
  };

  const buttonBeforeStyles = {
    content: '""',
    width: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
    left: 0,
    top: 0,
    zIndex: -1,
    transition: "0.3s ease-in-out",
  };

  const socialIconStyles = {
    display: "inline-block",
    marginLeft: "14px",
  };

  const socialIconLinkStyles = {
    width: "42px",
    height: "42px",
    background: "rgba(217, 217, 217, 0.1)",
    display: "inline-flex",
    borderRadius: "50%",
    marginRight: "6px",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    border: "1px solid rgba(255, 255, 255, 0.5)",
  };

  const socialIconBeforeStyles = {
    content: '""',
    width: "42px",
    height: "42px",
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    transform: "scale(0)",
    transition: "0.3s ease-in-out",
  };

  const socialIconImgStyles = {
    width: "40%",
    zIndex: 1,
    transition: "0.3s ease-in-out",
  };

  //
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain " />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Ahmed &nbsp;
            <span className="sm:block hidden"> | Software Engineer </span>
          </p>
        </Link>

        {/* Social Icons and Connect Button */}
        <span className="navbar-text mx-auto sm:hidden">
          <div style={socialIconStyles} className="social-icon">
            <a
              href="https://www.linkedin.com/in/ahmedesmailofficial"
              target="_blank"
              style={socialIconLinkStyles}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img src={navIcon1} alt="LinkedIn" style={socialIconImgStyles} />
              <span style={socialIconBeforeStyles}></span>
            </a>
            <a
              href="https://github.com/ahmed-esmail-1"
              target="_blank"
              style={socialIconLinkStyles}
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img src={navIcon2} alt="GitHub" style={socialIconImgStyles} />
              <span style={socialIconBeforeStyles}></span>
            </a>
          </div>
        </span>

        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursur-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
