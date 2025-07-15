import { motion } from "framer-motion";
import logoBlue from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="relative h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col items-center justify-center px-6 overflow-hidden select-none">

      {/* Background video with dark overlay */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-50"
          src="/videos/athlete-rehab.mp4"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Neon glowing animated ring behind logo */}
      <motion.div
        className="absolute z-10 rounded-full"
        style={{
          width: 280,
          height: 280,
          border: "4px solid transparent",
          boxShadow:
            "0 0 30px 10px rgba(20,184,166,0.7), 0 0 60px 20px rgba(59,130,246,0.6)",
          borderRadius: "9999px",
        }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px 8px rgba(20,184,166,0.6), 0 0 50px 18px rgba(59,130,246,0.5)",
            "0 0 30px 10px rgba(20,184,166,0.7), 0 0 60px 20px rgba(59,130,246,0.6)",
            "0 0 20px 8px rgba(20,184,166,0.6), 0 0 50px 18px rgba(59,130,246,0.5)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Centered logo above the ring */}
      <motion.img
        src={logoBlue}
        alt="לוגו"
        className="relative z-20 cursor-pointer max-w-[250px] md:max-w-[300px]"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.2,
          filter: "drop-shadow(0 0 20px #14b8a6)",
          transition: { duration: 0.3 },
        }}
      />

      {/* Hero text block below */}
      <motion.div
        className="relative z-20 mt-16 max-w-xl text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide">
          Get Back in the Game
          <br />
          <span className="text-teal-300">Stronger & Pain-Free</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mt-4">
          טיפולים מתקדמים שמחזירים אותך לביצועים המיטביים
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-gradient-to-r from-teal-400 to-blue-500 hover:scale-105 transform transition rounded-full px-8 py-4 text-xl font-semibold shadow-lg"
          aria-label="קבע פגישה עכשיו"
        >
          קבע פגישה עכשיו
        </a>
      </motion.div>
    </header>
  );
};

export default Hero;
