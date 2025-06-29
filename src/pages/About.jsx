import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/NayanshreeResume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f0f10] text-[#D8DBE2] px-4 sm:px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-[#58A4B0]"
        >
          About Me
        </motion.h2>

        <div className="bg-[#1b1b1e] rounded-2xl p-6 sm:p-8 shadow-xl">
          <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-6">
            Hello! I’m Nayanshree Soni, a B.Tech graduate in Information
            Technology with a strong interest in building functional and
            user-friendly digital solutions. I have developed a solid
            foundation in HTML, CSS, Java, and JavaScript, and I also have
            hands-on experience working with React. To further strengthen my
            skills, I completed a professional training program in MERN Stack
            development at Makerspace Technology (BECIL). This experience
            enhanced my ability to work on full-stack applications and deepened
            my understanding of modern web development tools and practices.
            I’m passionate about writing clean, efficient code and enjoy turning
            ideas into real-world projects. I thrive on challenges and am always
            eager to learn, grow, and contribute to meaningful work.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#58A4B0] text-[#58A4B0] px-6 py-2 rounded-full hover:bg-[#58A4B0] hover:text-[#1B1B1E] transition text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
