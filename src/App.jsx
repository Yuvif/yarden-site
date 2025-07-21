import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";

// Lazy load Recommendations
const Recommendations = React.lazy(() => import("./components/Recommendations"));

const App = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Suspense fallback={<div className="text-center py-20 text-gray-400">טוען המלצות...</div>}>
          <Recommendations />
        </Suspense>
        <FAQ />
        <Contact />
        <SocialBar />
      </main>
      <footer className="text-center text-gray-600 py-6 bg-white select-none">
        © {new Date().getFullYear()} Yuvif
      </footer>
    </div>
  );
};

export default App;
