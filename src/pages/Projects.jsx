
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import TwooGoodImg from "../assets/twogood.png";
import BookStoreImg from "../assets/bookstore.png";
import BubbleGameImg from "../assets/bubblegame.png";
import ImageFinderImg from "../assets/imagefinder.png";
// import RecipeFinderImg from "../assets/recipefinder.png";


const projects = [
  {
    title: "Twoo Good Co Website",
    description:
      "A stylish frontend website for Twoo Good Co built using HTML, CSS, JavaScript, GSAP, and Locomotive.",
    image: TwooGoodImg,
    link: "https://soninayanshree.github.io/FrontendWebsites/",
  },
  {
    title: "E-commerce Website",
    description:
      "A book shopping site using JSP, Servlets, and MySQL with full CRUD operations.",
    image: BookStoreImg,
    link: "https://github.com/Soninayanshree/Ecommerce-website",
  },
  {
    title: "Bubble Game",
    description: "Fun browser game using JavaScript and DOM manipulation.",
    image: BubbleGameImg,
    link: "https://nsbubblegame.netlify.app/",
  },
  {
    title: "LetsFindImages",
    description: "Fetch and view images using a public API and JS.",
    image: ImageFinderImg,
    link: "https://lets-find-images.vercel.app/",
  },
  // {
  //   title: "Recipe Finder App",
  //   description: "Discover recipes using API and search ingredients.",
  //   image: RecipeFinderImg,
  //   link: "https://recipefinderapp.com",
  // },
];


const Projects = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="bg-[#0f0f10] text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#58a4b0] mb-10">
          Featured Projects
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg "
            >
              <img
                src={projects[index].image}
                alt={projects[index].title}
                className="w-full h-60 object-contain rounded-md mb-4"
              />
              <h3 className="text-2xl text-[#d8dbe2] font-semibold mb-2 text-center">
                {projects[index].title}
              </h3>
              <p className="text-[#a9bcd0] mb-4 text-center">{projects[index].description}</p>
              <a
                href={projects[index].link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#58a4b0] hover:underline text-center"
              >
                View Project <ExternalLink className="ml-2 h-4 w-4 " />
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-4">
            <button
              onClick={handlePrev}
              className="bg-[#1b1b1e] hover:bg-[#333]  rounded-full"
            >
              <ChevronLeft className="text-[#58a4b0]" />
            </button>
            <button
              onClick={handleNext}
              className="bg-[#1b1b1e] hover:bg-[#333] rounded-full"
            >
              <ChevronRight className="text-[#58a4b0]" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#58a4b0]" : "bg-[#a9bcd0]"
              }`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
