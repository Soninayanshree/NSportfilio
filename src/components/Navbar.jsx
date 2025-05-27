import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1b1b1e] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <img src={logo} alt="Logo" className="w-10 h-15 md:w-20 md:h-15 border-2 rounded-full" />
        </motion.div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#58a4b0]">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#home" className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]">
              Home
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#about" className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]">
              About
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#skills" className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]">
              Skills
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#projects" className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]">
              Projects
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" className="text-[#d8dbe2] hover:text-[#58a4b0] px-2 py-1 border-b-2 border-transparent hover:border-[#58a4b0]">
              Contact
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1b1b1e] px-4 pb-4 pt-2 space-y-2 shadow-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className="block text-[#d8dbe2] hover:text-[#58a4b0] border-b py-2">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block text-[#d8dbe2] hover:text-[#58a4b0] border-b py-2">
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-[#d8dbe2] hover:text-[#58a4b0] border-b py-2">
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-[#d8dbe2] hover:text-[#58a4b0] border-b py-2">
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-[#d8dbe2] hover:text-[#58a4b0] border-b py-2">
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
