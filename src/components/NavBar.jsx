import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Our Services" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
          <span className="text-xl font-semibold text-gray-800">RoyalStruct Consultants</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="text-gray-700 hover:text-black cursor-pointer transition-colors"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-gray-700 cursor-pointer"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <ul className="md:hidden flex flex-col items-center bg-white w-full py-4 shadow-md border-t">
          {links.map(({ id, link }) => (
            <li key={id} className="py-2">
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
                className="text-gray-700 hover:text-black text-lg"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
