import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About Us", path: "/about" },
    { id: 4, name: "Our Work", path: "/portfolio" },
  ];

  const services = [
    { id: 1, name: "Web Development", path: "/" },
    { id: 2, name: "App Development", path: "/" },
    { id: 3, name: "UI/UX Design", path: "/" },
    { id: 4, name: "Data Science", path: "/" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <NavLink to="/" className="text-2xl font-bold text-white block">
            TreoStudios.
          </NavLink>
          <p className="text-gray-300 text-sm">
            Treo Studios - Empowering your vision with cutting-edge technology.
          </p>
          <p className="text-white text-sm">
            Building the future of technology with scalable, reliable, and innovative solutions. At Treo Studios, we turn visions into reality.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded transition-all duration-300 cursor-pointer">
            Schedule a Meeting
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:pl-2 ${
                      isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {services.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:pl-2"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Company Information</h3>
            <p className="text-gray-400 text-sm">📍 Wah Cantt, Pakistan</p>
            <p className="text-gray-400 text-sm">📧 contact@treostudios.com</p>
            <p className="text-gray-400 text-sm">📞 +92 300 1234567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-500 transition duration-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600 transition duration-300"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-pink-500 transition duration-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-white text-md">
        © 2025 Treo Studios. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;