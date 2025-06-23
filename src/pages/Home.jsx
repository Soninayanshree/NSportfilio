import React from 'react';
import { motion } from 'framer-motion';
import Wave from 'react-wavify';
import profile from '../assets/profileimg.png'; // Add your image file here

const Home = () => {
  return (
    <>
      <section id='home' className="min-h-screen bg-[#0f0f10] pt-20">
        <div className="min-h-[65vh]  flex flex-col md:flex-row justify-center md:justify-around items-center md:items-end  px-4 text-center md:text-left  space-y-6 md:space-y-0 ">
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#d8dbe2] mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 60, delay: 0.2 }}
            >
              Hi, I'm <span className="text-[#58a4b0]">Nayanshree Soni</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#a9bcd0] max-w-xl mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm a Frontend Developer who loves crafting clean UI, smooth interactions, and responsive designs.
            </motion.p>
          </div>

          <motion.img
            src={profile}
            alt="Profile"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mb-4 border-4 border-[#58a4b0] shadow-lg bg-bottom-right "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <Wave
          fill="#58a4b0"
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 80,
            amplitude: 50,
            speed: 0.1,
            points: 8,
          }}
        />
      </section>
    </>
  );
};

export default Home;
