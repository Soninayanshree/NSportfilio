import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaBook } from "react-icons/fa";

const qualifications = [
  {
    title: "B.Tech in Information Technology",
    institution: "RGPV University, Madhya Pradesh",
    year: "2021 - 2025",
    icon: <FaUniversity className="text-4xl text-[#58A4B0]" />,
  },
  {
    title: "Higher Secondary (12th)",
    institution: "CBSE",
    year: "2020 - 2021",
    icon: <FaSchool className="text-4xl text-[#58A4B0]" />,
  },
  {
    title: "Secondary School (10th)",
    institution: "CBSE",
    year: "2018 - 2019",
    icon: <FaBook className="text-4xl text-[#58A4B0]" />,
  },
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      className="bg-[#0f0f10] text-[#D8DBE2] px-4 sm:px-6 md:px-12 lg:px-20 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#58A4B0]"
        >
          Qualification
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {qualifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1b1b1e] rounded-2xl p-6 shadow-md hover:shadow-[#58A4B0]/40 border border-[#2c2c2e] transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#58A4B0]">
                {item.title}
              </h3>
              <p className="text-sm mt-1">{item.institution}</p>
              <p className="text-xs text-gray-400 mt-1">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
