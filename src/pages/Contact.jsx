import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0f0f10] to-[#1a1a2e] flex items-center justify-center px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#121217] border border-[#2a2a40] shadow-xl rounded-3xl p-8 max-w-xl w-full text-white space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#58a4b0] text-center">
          Let's Talk 👋
        </h2>
        <p className="text-[#a9bcd0] text-center text-sm">
          Fill out the fields like you're sending a message to a friend.
        </p>

        <div className="space-y-5">
          <div className="bg-[#1f1f29] p-4 rounded-xl">
            <p className="text-[#d8dbe2] text-sm">👤 What should I call you?</p>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] focus:ring-0"
            />
          </div>

          <div className="bg-[#1f1f29] p-4 rounded-xl">
            <p className="text-[#d8dbe2] text-sm">📧 What's your email address?</p>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] focus:ring-0"
            />
          </div>

          <div className="bg-[#1f1f29] p-4 rounded-xl">
            <p className="text-[#d8dbe2] text-sm">💬 What would you like to say?</p>
            <textarea
              rows={4}
              placeholder="Let's work together!"
              className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] resize-none focus:ring-0"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="block w-full mt-4 bg-[#58a4b0] text-black font-semibold py-2 rounded-lg hover:bg-[#46909d] transition"
        >
          Send ✈️
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
