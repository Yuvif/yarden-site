import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import logoBlue from "../compressed/logo.webp";
import heroImage from "../compressed/fitness-concept-with-dumbbells.webp";

const deepTeal = "rgba(3,127,174,1)";
const softGray = "rgba(185,185,185,1)";
const painFreeGradient = "linear-gradient(90deg, #0477A2, #05B0DB)";

const HeroTextSection = ({ showPainFree }) => {
  return (
    <div className="relative z-10 text-center max-w-3xl px-4 mt-16 select-none">
      {/* Main heading */}
      <h1
        className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight"
        style={{
          position: "relative",
          color: deepTeal,
          textShadow: `
            0 0 10px ${softGray},
            0 2px 8px rgba(3,127,174,0.7),
            0 6px 30px rgba(76,163,187,0.3)
          `,
        }}
      >
        Get Back in the Game
        <span
          style={{
            position: "absolute",
            left: "50%",
            bottom: -14,
            width: "140%",
            height: 22,
            background:
              `linear-gradient(90deg, ${softGray}90 0%, ${deepTeal}CC 100%)`,
            borderRadius: 120,
            transform: "translateX(-50%)",
            filter: "blur(12px)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
      </h1>

      {/* Stronger & Pain-Free text toggled */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={showPainFree ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-6 text-4xl font-semibold select-none"
        style={{
          background: painFreeGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 8px rgba(3,127,174,0.7)",
          fontStyle: "italic",
          position: "relative",
          zIndex: 10,
        }}
      >
        Stronger & Pain-Free

        {/* Decorative glowing ellipse behind text */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "140%",
            height: "1.3em",
            background:
              "radial-gradient(circle, rgba(3,127,174,0.3) 40%, transparent 80%)",
            filter: "blur(12px)",
            borderRadius: "9999px",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
      </motion.h2>
    </div>
  );
};

const Hero = () => {
  const bgControls = useAnimation();
  const [showPainFree, setShowPainFree] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const opacity = Math.max(1 - y / 500, 0.6);
      const translateY = Math.min(y / 3, 100);

      bgControls.start({
        opacity,
        y: -translateY,
        transition: { ease: "easeOut", duration: 0.3 },
      });

      setShowPainFree(y > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bgControls]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute sm:fixed inset-0 w-full h-full z-[-20] bg-center bg-cover select-none"
        style={{ backgroundImage: `url(${heroImage})` }}
        animate={bgControls}
        initial={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo */}
        <motion.img
          src={logoBlue}
          alt="לוגו"
          className="max-w-[240px] select-none will-change-transform-opacity"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            filter: `drop-shadow(0 0 18px ${deepTeal})`,
          }}
          style={{
            filter: `drop-shadow(0 0 22px ${deepTeal})`,
          }}
        />

        {/* Text section */}
        <HeroTextSection showPainFree={showPainFree} />
      </div>
    </section>
  );
};

export default Hero;
