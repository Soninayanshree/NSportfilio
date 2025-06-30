import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/NayanshreeResume.pdf";

const About = () => {
  return (
     <section
      id="about"
      className="bg-[#0f0f10] text-[#D8DBE2] px-4 sm:px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#58A4B0]"
        >
          About Me
        </motion.h2>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1b1b1e] rounded-2xl p-6 sm:p-10 shadow-2xl"
        >
          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            👋 Hi, I'm <span className="text-[#58A4B0] font-semibold">Nayanshree Soni</span>, a B.Tech graduate in Information Technology. I'm passionate
            about building digital solutions that are both <span className="font-medium text-white">functional</span> and <span className="font-medium text-white">user-friendly</span>.
            With a strong foundation in <span className="text-[#58A4B0]">HTML, CSS, Java, and JavaScript</span> and hands-on experience in <span className="text-[#58A4B0]">React</span>, I love transforming ideas into impactful, real-world projects.
            I'm always eager to embrace challenges, grow my skillset, and create meaningful user experiences.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#58A4B0] text-[#58A4B0] px-8 py-3 rounded-full hover:bg-[#58A4B0] hover:text-[#1B1B1E] transition font-medium shadow-md"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

