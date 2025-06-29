import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [popup, setPopup] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setPopup("Sending...");
    setShowPopup(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setPopup("✅ Message Sent Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setPopup("❌ " + (data.message || "Something went wrong"));
    }

    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 4s
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#1b1b1e] to-[#0f0f10] flex items-center justify-center px-4 py-16 relative"
    >
      {/* Centered Animated Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred background overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/40 z-10"></div>

          {/* Popup message */}
          <div className="relative z-20 bg-[#1b1b1e] border border-[#58a4b0] text-white px-6 py-4 rounded-2xl shadow-xl text-center max-w-sm mx-auto">
            {popup}
          </div>
        </div>
      )}

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0f0f10] border border-[#2a2a40] shadow-xl rounded-3xl p-8 max-w-xl w-full text-white space-y-6"
      >
        <h2 className="text-3xl font-bold text-[#58a4b0] text-center">
          Let's Talk 👋
        </h2>
        <p className="text-[#d8dbe2] text-center text-sm">
          Fill out the fields like you're sending a message to a friend.
        </p>

        {/* Name */}
        <div className="bg-[#1b1b1e] p-4 rounded-xl">
          <p className="text-[#d8dbe2] text-sm">👤 What should I call you?</p>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] focus:ring-0"
          />
        </div>

        {/* Email */}
        <div className="bg-[#1b1b1e] p-4 rounded-xl">
          <p className="text-[#d8dbe2] text-sm">
            📧 What's your email address?
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] focus:ring-0"
          />
        </div>

        {/* Message */}
        <div className="bg-[#1b1b1e] p-4 rounded-xl">
          <p className="text-[#d8dbe2] text-sm">
            💬 What would you like to say?
          </p>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Let's work together!"
            className="mt-2 w-full bg-transparent border-none outline-none text-white placeholder:text-[#777] resize-none focus:ring-0"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="block w-full mt-4 bg-[#58a4b0] text-black font-semibold py-2 rounded-lg hover:bg-[#46909d] transition"
        >
          Send ✈️
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
