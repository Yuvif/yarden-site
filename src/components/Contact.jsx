import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Still needed for blob animation

const Contact = () => (
  <section
    id="contact"
    className="select-none relative scroll-mt-32 py-28 px-6 md:px-20 bg-gradient-to-b from-[#e4f3ff] to-[#f9feff] text-gray-800 overflow-hidden"
  >
    {/* Background Blobs */}
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-12 text-center">צור קשר</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/50 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/30 space-y-6 will-change-transform"
        >
          <FloatingInput type="text" label="שם" />
          <FloatingInput type="email" label="אימייל" />
          <FloatingTextarea label="הודעה" />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            שלח הודעה
          </button>
        </motion.form>

        {/* Info Panel */}
        <motion.div
          className="space-y-6 text-right bg-white/50 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-xl will-change-transform"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactInfo label="📍 מיקום" value="לוי אשכול 196, קריית אונו" />
          <ContactInfo
            label="📞 טלפון"
            value={<a href="tel:+97546197010" className="text-blue-600 hover:underline">054-6197010</a>}
          />
          <ContactInfo
            label="📧 אימייל"
            value={<a href="mailto:yard.levy@gmail.com" className="text-blue-600 hover:underline">yard.levy@gmail.com</a>}
          />
          <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-blue-100 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Inputs
const FloatingInput = ({ label, type }) => (
  <div className="relative">
    <input
      type={type}
      placeholder=" "
      required
      className="peer w-full p-4 pt-6 border-2 border-transparent rounded-lg text-right bg-white bg-opacity-80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
    />
    <label className="absolute right-4 top-4 text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({ label }) => (
  <div className="relative">
    <textarea
      placeholder=" "
      required
      className="peer w-full p-4 pt-6 border-2 border-transparent rounded-lg h-32 text-right bg-white bg-opacity-80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
    ></textarea>
    <label className="absolute right-4 top-4 text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

// Info Block
const ContactInfo = ({ label, value }) => (
  <div className="relative pr-4">
    <div className="absolute right-0 top-2 h-4 w-1.5 bg-blue-400 rounded-sm"></div>
    <h3 className="text-xl font-semibold text-blue-900 mb-1">{label}</h3>
    <p className="text-gray-700">{value}</p>
  </div>
);

export default Contact;
