import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0f0f10] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16 border-2 rounded-full"
          />
        </motion.div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#58a4b0]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-medium">
          {['home', 'about', 'qualification' , 'skills', 'projects', 'contact'].map((item) => (
            <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item}`}
                className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden px-4 pb-4 pt-2 space-y-2 shadow-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {['home', 'about', 'qualification', 'skills', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0] "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
