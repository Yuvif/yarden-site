import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
        <SocialBar/>
      </main>
      <footer className="text-center text-gray-600 py-6 bg-white">
        © {new Date().getFullYear()} ירדן | טיפול ספורטיבי
      </footer>
    </div>
  );
};

export default App;
