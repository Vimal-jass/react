import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Brand */}
        <div className="text-3xl font-bold tracking-wide text-yellow-400">
          Jass<span className="text-white">.</span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-200">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Projects
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-300 flex items-center gap-2"
          >
            <FaPhoneAlt className="text-yellow-400" /> Contact
          </a>
        </nav>

        {/* Right: Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-yellow-500 text-gray-900 px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-yellow-400 hover:shadow-yellow-500/40 transition duration-300"
          >
            Create Appointment
          </a>
        </div>

        {/* Mobile Menu Button (optional future) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
