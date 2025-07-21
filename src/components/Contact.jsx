import React from "react";
import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import contactImg from "../assets/d5f20086-d8a1-4bf1-8c4d-35d912b06af3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
  }),
};

const formVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.7, duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      dir="rtl"
      className="w-full bg-[#f4f4f4] py-24 px-6 md:px-20 lg:px-28 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image with gentle floating animation + glow */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl will-change-transform-opacity"
          style={{ perspective: 800 }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Ambient glow behind image */}
          <div className="absolute -inset-10 rounded-3xl bg-[#4DA2BB]/20 blur-3xl pointer-events-none" />
          <img
            src={contactImg}
            alt="טיפול פיזיותרפיה"
            className="object-cover w-full h-full max-h-[600px] relative rounded-3xl z-10"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-3xl z-20 pointer-events-none" />
        </motion.div>

        {/* Right Side: Contact info and form with staggered icon animations */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10 will-change-transform-opacity"
        >
          <h2 className="text-4xl font-extrabold text-[#4DA2BB] mb-6">
            צרו קשר
          </h2>

          {/* Contact Info with staggered icon animations */}
          <div className="space-y-6 text-lg leading-relaxed font-medium text-gray-900">
            {[{
              icon: Phone,
              label: "054-6197010",
              key: "phone",
            }, {
              icon: EnvelopeSimple,
              label: "yard.levy@gmail.com",
              key: "email",
            }, {
              icon: MapPin,
              label: "דרך לוי אשכול 196, קריית אונו",
              key: "location",
            }].map(({ icon: IconComp, label, key }, i) => (
              <motion.div
                key={key}
                custom={i}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 will-change-transform-opacity"
              >
                <IconComp size={28} color="rgba(186,186,186,1)" />
                <span>{label}</span>
              </motion.div>
            ))}
          </div>

          {/* Form slides in from right */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 space-y-4 will-change-transform-opacity"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-[#4DA2BB]">
                שם מלא
              </label>
              <input
                id="name"
                type="text"
                className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/70 backdrop-blur placeholder-gray-400"
                placeholder="הכניסו את שמכם"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-[#4DA2BB]">
                אימייל
              </label>
              <input
                id="email"
                type="email"
                className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/70 backdrop-blur placeholder-gray-400"
                placeholder="הכניסו את כתובת המייל"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-[#4DA2BB]">
                הודעה
              </label>
              <textarea
                id="message"
                rows={4}
                className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/70 backdrop-blur placeholder-gray-400"
                placeholder="כתבו את הודעתכם כאן..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(77,162,187,0.7)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#4DA2BB] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#005096] transition-all duration-200 will-change-transform-opacity"
            >
              שלח הודעה
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
