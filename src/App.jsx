import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import Recommendations from "./components/Recommendations";

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Recommendations />
        <FAQ />
        <Contact />
        <SocialBar/>
      </main>
      <footer className="text-center text-gray-600 py-6 bg-white select-none">
        © {new Date().getFullYear()} Yuvif
      </footer>
    </div>
  );
};

export default App;
