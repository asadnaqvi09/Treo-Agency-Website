import React from "react";
import Logo from "../assets/images/WebsiteLogo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = [
    { id:1,name: "Home", path: "/" },
    { id:2,name: "Services", path: "/services" },
    { id:3,name: "About-Us", path: "/about" },
    { id:4,name: "Our-Work", path: "/portfolio" },
    { id:5,name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative w-full text-slate-400">
      <div className="max-w-8xl mx-auto px-4 md:px-10 flex items-center justify-between h-16">
        {/* Logo with proper alignment */}
        <NavLink 
          to="/" 
          className="flex items-center h-full py-2"
        >
          {/* <img 
            src={Logo} 
            alt="Website Logo" 
            className="h-8 w-auto object-contain" // Adjusted height to match typical navbar height
          /> */}
          <span className="text-2xl font-bold text-black">TreoStudios.</span>
        </NavLink>

        {/* Desktop Navigation - aligned with logo */}
        <ul className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <li key={link.name} className="h-full flex items-center">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `no-underline h-full flex items-center py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-[#007BFF] font-regular text-md"
                      : "text-gray-400 font-regular hover:text-[#007BFF] text-md"

                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - perfectly aligned with logo */}
        <button
          className="md:hidden text-black cursor-pointer focus:outline-none h-full flex items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#121526]/95 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ top: "64px", zIndex: 40 }}
        >
          <div className="flex flex-col px-8 py-6 h-full">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-3 text-lg no-underline transition-colors duration-300 ${
                        isActive
                          ? "text-white font-medium"
                          : "text-slate-400 hover:text-white"
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;