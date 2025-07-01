import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";
import Qualification from "./pages/Qualification";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Qualification/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
