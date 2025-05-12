// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-bold font-aclonica">Logo</div>

      {/* Menu */}
      <ul className="flex space-x-6 text-sm font-bold">
        <li>
          <Link to="/" className="hover:underline hover:text-gray-800 font-montserrat">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline hover:text-gray-800 font-montserrat">
            About
          </Link>
        </li>
        <li>
          <Link to="/product" className="hover:underline hover:text-gray-800 font-montserrat">
            Product
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline hover:text-gray-800 font-montserrat">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;