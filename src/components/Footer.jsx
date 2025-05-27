import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1e] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo & Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold text-[#58a4b0]">Nayanshree Soni</h2>
          <p className="text-sm text-[#a9bcd0] mt-1">
            Built with 💻 & ❤️ using React + Tailwind
          </p>
        </motion.div>

        {/* Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-6 text-[#a9bcd0] text-xl"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a4b0] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a4b0] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-[#58a4b0] transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a4b0] transition"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>

      {/* Bottom text */}
      <p className="text-center text-xs text-[#6c7a89] mt-6">
        © {new Date().getFullYear()} NS. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
