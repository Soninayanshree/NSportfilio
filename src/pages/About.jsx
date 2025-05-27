
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex  bg-[#1b1b1e] text-[#D8DBE2]  px-6 md:px-20 pt-20" >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-12 text-[#58A4B0] "
        >
          About Me
        </motion.h2>

        <div className="">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#373F51] rounded-2xl p-8 shadow-xl"
          >
            <p className="text-[#D8DBE2] text-lg leading-relaxed mb-6">
              Hello! I'm a creative developer with a passion for design, performance,
              and clean code. I love building intuitive interfaces that feel great to use,
              and I'm always learning something new to stay ahead in tech.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* <a
                href="#contact"
                className="bg-[#58A4B0] text-[#1B1B1E] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
              >
                Hire Me
              </a> */}
              <a
                href="/cv.pdf"
                download
                className="border border-[#58A4B0] text-[#58A4B0] px-6 py-2 rounded-full hover:bg-[#58A4B0] hover:text-[#1B1B1E] transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

