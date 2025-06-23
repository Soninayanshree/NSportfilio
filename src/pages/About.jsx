import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto flex  bg-[#0f0f10] text-[#D8DBE2]  px-6 py-4 md:px-20 pt-20"
    >
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
            className="bg-[#1b1b1e] rounded-2xl p-8 shadow-xl"
          >
            <p className="text-[#D8DBE2] text-lg leading-relaxed mb-6">
              Hello! I’m Nayanshree Soni, a B.Tech graduate in Information
              Technology with a strong interest in building functional and
              user-friendly digital solutions. I have developed a solid
              foundation in HTML, CSS, Java, and JavaScript, and I also have
              hands-on experience working with React. To further strengthen my
              skills, I completed a professional training program in MERN Stack
              development at Makerspace Technology (BECIL). This experience
              enhanced my ability to work on full-stack applications and
              deepened my understanding of modern web development tools and
              practices. I'm passionate about writing clean, efficient code and
              enjoy turning ideas into real-world projects. I thrive on
              challenges and am always eager to learn, grow, and contribute to
              meaningful work.
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
