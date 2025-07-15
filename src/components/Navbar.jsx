import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { id: "about", label: "אודות" },
  { id: "services", label: "שירותים" },
  { id: "faq", label: "שאלות ותשובות" },
  { id: "contact", label: "צור קשר" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      dir="rtl"
      className={`select-none fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl"
          : "bg-white/90 shadow-md"
      }`}
      style={{ height: 80 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-full">
        <h1
          onClick={() => scrollTo("hero")}
          className={`cursor-pointer font-extrabold text-blue-900 select-none transition-colors duration-300 text-2xl md:text-3xl ${
            scrolled ? "text-teal-600" : "text-blue-900"
          }`}
          tabIndex={0}
          aria-label="Go to top"
        >
          ירדן | טיפול ספורטיבי
        </h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map(({ id, label }) => (
            <motion.li
              key={id}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 350 }}
            >
              <button
                onClick={() => scrollTo(id)}
                className={`select-none text-lg font-semibold px-6 py-2 rounded-full border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  scrolled
                    ? "text-teal-700 hover:bg-teal-100 hover:border-teal-400"
                    : "text-blue-900 hover:bg-blue-100 hover:border-blue-400"
                }`}
              >
                {label}
              </button>
            </motion.li>
          ))}
        </ul>
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`select-none md:hidden rounded focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-300 ${
            scrolled ? "text-teal-600" : "text-blue-900"
          }`}
        >
          {menuOpen ? <X size={32} /> : <List size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 pb-6 space-y-5"
          >
            {navItems.map(({ id, label }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => scrollTo(id)}
                  className="select-none block w-full text-right text-teal-700 font-semibold px-5 py-3 rounded-full hover:bg-teal-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
