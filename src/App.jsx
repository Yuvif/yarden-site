import React, { lazy, Suspense } from "react";
const Navbar = lazy(() =>import('./components/Navbar'))
const Hero = lazy(() =>import('./components/Hero'))
const About = lazy(() =>import('./components/About'))
const Services = lazy(() =>import('./components/Services'))
const FAQ = lazy(() =>import('./components/FAQ'))
const Contact = lazy(() =>import('./components/Contact'))
const SocialBar = lazy(() =>import('./components/SocialBar'))


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
