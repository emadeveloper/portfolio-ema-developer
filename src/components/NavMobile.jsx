import React, { useState, useRef, useEffect } from "react";
import { navigation } from "../data";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Agrega un manejador de eventos para cerrar el menú cuando haces clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleCategoryClick = () => {
    setIsOpen(false);
  };

  /* FRAMER MOTION VARIANTS */
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative">
      {/* MENU ICON */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-white p-4"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>
      {/* CIRCLE */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      {/* MENU */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden bg-gray-800`}
        ref={menuRef}
      >
        {/* CLOSE ICON */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8 text-white"
        >
          <XIcon className="w-8 h-8" />
        </div>
        {navigation.map((item, index) => (
          <li key={index} className="mb-6 border-b">
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white text-3xl cursor-pointer capitalize transition duration-300 hover:text-accent"
              onClick={handleCategoryClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
