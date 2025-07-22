import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, User, ChatText, Info, Question, Phone } from "@phosphor-icons/react";

const navItems = [
  { id: "about", label: "אודות", icon: <User size={16} /> },
  { id: "services", label: "שירותים", icon: <ChatText size={16} /> },
  { id: "recommendations", label: "המלצות", icon: <Info size={16} /> },
  { id: "faq", label: "שאלות ותשובות", icon: <Question size={16} /> },
  { id: "contact", label: "צור קשר", icon: <Phone size={16} /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeButtonRect, setActiveButtonRect] = useState(null);

  const desktopRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sectionIds = ["hero", ...navItems.map(({ id }) => id)];
      const scrollOffset = window.innerHeight / 2;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
          current = id;
          break;
        }
      }

      setActiveSection(current === "hero" ? "" : current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection && desktopRefs.current[activeSection]) {
      const buttonEl = desktopRefs.current[activeSection];
      const container = document.querySelector(".nav-container")?.getBoundingClientRect();
      const rect = buttonEl.getBoundingClientRect();

      if (container) {
        setActiveButtonRect({
          left: rect.left - container.left,
          width: rect.width,
        });
      }
    } else {
      setActiveButtonRect(null);
    }
  }, [activeSection, menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getDesktopButtonClass = (id) =>
    `relative select-none text-base md:text-2xl font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 ${
      activeSection === id
        ? "text-white bg-[#037fae] shadow"
        : "text-white hover:text-[#037fae] hover:bg-white/30"
    }`;

  const getMobileButtonClass = (id) =>
    `select-none block w-full text-right font-semibold px-5 py-3 rounded-full transition-all duration-300 ${
      activeSection === id
        ? "text-white bg-[#037fae]"
        : "text-blue-900 hover:bg-blue-100"
    }`;

  return (
    <motion.nav
      dir="rtl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`will-change-transform-opacity fixed top-6 left-0 right-0 mx-auto w-fit max-w-full px-6 py-3 z-50 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 ${
        scrolled ? "shadow-lg bg-white/60 text-sky-900" : "shadow-xl bg-white/10 text-white"
      } hover:shadow-2xl before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#037fae]/30 before:to-white/10 before:blur-2xl`}
    >
      <div className="relative flex justify-between items-center gap-8 z-10 select-none">
        <div
          onClick={() => scrollTo("hero")}
          className="cursor-pointer font-extrabold text-base md:text-xl hover:text-[#037fae] transition-colors flex items-center gap-2"
        >
          ירדן לוי | טיפול ספורטיבי
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block relative nav-container">
          <ul className="flex gap-3 items-center relative">
            {navItems.map(({ id, label, icon }) => (
              <li key={id} className="relative">
                <button
                  ref={(el) => (desktopRefs.current[id] = el)}
                  onClick={() => scrollTo(id)}
                  className={getDesktopButtonClass(id)}
                >
                  <span className="flex items-center gap-1">{icon} {label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sky-800 hover:text-[#037fae]"
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 px-4 pb-4 space-y-3 rounded-xl will-change-transform-opacity"          >
            {navItems.map(({ id, label, icon }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => scrollTo(id)}
                  className={getMobileButtonClass(id)}
                >
                  <span className="inline-flex items-center gap-1">
                    {icon}
                    {label}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
