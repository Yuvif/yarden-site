import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import logoBlue from "../compressed/logo.webp";
import heroImage from "../assets/osteopathic-doctor-checking-female-patient-s-leg-movement.jpg";

const Hero = () => {
  const bgControls = useAnimation();
  const [showPainFree, setShowPainFree] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      bgControls.start({
        opacity: Math.max(1 - y / 400, 0.6),
        y: -y * 0.3,
        transition: { duration: 0.3, ease: "easeOut" },
      });
      setShowPainFree(y > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [bgControls]);

  return (
    <section className="relative w-full min-h-[85svh] overflow-hidden text-white flex items-center justify-start px-4 sm:px-10 pt-[96px] sm:pt-50 select-none">

  {/* Responsive Background Image */}
  <motion.img
    src={heroImage}
    alt="Physiotherapy session"
    className="inset-0 w-full h-full object-cover object-center z-[-10] absolute sm:fixed"
  />

  {/* Overlay for contrast */}
  <div className="absolute inset-0 z-[-9] bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

  {/* Logo */}
  <img
    src={logoBlue}
    alt="לוגו"
    className="absolute top-6 right-2 sm:top-10 sm:right-10 w-20 sm:w-44 drop-shadow-[0_0_18px_rgba(3,127,174,0.5)]"
  />

  {/* Hero Content */}
  <div className="z-10 max-w-md text-left">
    <motion.h1
      className="text-4xl sm:text-7xl font-extrabold leading-tight"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
    >
      Get Back In<br />
      The Game
    </motion.h1>

    {showPainFree && (
      <motion.h2
        className="text-base sm:text-2xl mt-4 font-medium italic bg-gradient-to-r from-[#037fae] to-[#05b0db] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{ textShadow: "0 1px 4px rgba(3,127,174,0.4)" }}
      >
        Stronger & Pain-Free
      </motion.h2>
    )}

    <motion.a
      href="#contact"
      className="inline-block mt-6 px-6 py-3 bg-[#037fae] text-white font-semibold rounded-full shadow-md hover:bg-[#059ccd] transition-all duration-300"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      קבע פגישה עכשיו
    </motion.a>
  </div>
</section>
  );
};

export default Hero;
