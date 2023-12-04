import React, { useState, useEffect } from "react";
import Logo from "../assets/img/Logo-Ema-1.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* LOGO */}
        <a href="">
          <img className="w-[150px] h-[50px]" src={Logo} alt="/" />
        </a>
        {/* NAV */}
        <div className="hidden lg:block">
            <Nav />
        </div>
        {/* SOCIALS */}
        <div className="hidden lg:block">
            <Socials />
        </div>
        {/* NAV MOBILE */}
        <div className="lg:hidden">
            <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
