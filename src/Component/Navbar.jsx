import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState); // Notify Heading component to adjust margin
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    onMenuToggle(false); // Notify Heading component to adjust margin
  };

  return (
    <nav className=" shadow-both-3xl  bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 px-4 py-3 flex items-center justify-between rounded-full ">
      {/* Logo */}
      <div className="text-white font-bold flex items-center space-x-2">
        <span className="bg-white rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M3.75 12h16.5" />
          </svg>
        </span>
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#" className="text-white hover:text-gray-300">Documentation</a>
        <a href="#" className="text-white hover:text-gray-300">Blogs</a>
        <a href="#" className="text-white hover:text-gray-300">LYNC Portal</a>
        <a href="#" className="text-white hover:text-gray-300">Request a demo</a>
      </div>

      {/* Hamburger Icon for smaller screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* CTA Button */}
      <div>
        <a href="#" className="bg-white text-purple-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300 flex items-center space-x-2">
          <span className="hidden sm:inline">Get started</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu - Toggled visibility */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-purple-900 p-4 flex justify-center items-center flex-col`}>
        <a href="#" className="block text-white hover:text-gray-300 py-2">Home</a>
        <a href="#" className="block text-white hover:text-gray-300 py-2">Documentation</a>
        <a href="#" className="block text-white hover:text-gray-300 py-2">Blogs</a>
        <a href="#" className="block text-white hover:text-gray-300 py-2">LYNC Portal</a>
        <a href="#" className="block text-white hover:text-gray-300 py-2">Request a demo</a>
        
        {/* Close Link */}
        <a href="#" onClick={closeMenu} className="block text-white hover:text-gray-300 py-2 mt-4 text-center">Close</a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
};

export default Navbar;
