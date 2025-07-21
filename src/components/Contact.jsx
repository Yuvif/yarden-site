import React from "react";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import contactImg from "../compressed/d5f20086-d8a1-4bf1-8c4d-35d912b06af3.webp";

const Contact = () => {
  return (
    <section
      id="contact"
      dir="rtl"
      className="w-full bg-[#f4f4f4] py-24 px-6 md:px-20 lg:px-28 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Static image with glow */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Ambient glow behind image */}
          <div className="absolute -inset-10 rounded-3xl bg-[#4DA2BB]/20 blur-3xl pointer-events-none" />
          <img
            src={contactImg}
            alt="טיפול פיזיותרפיה"
            className="object-cover w-full h-full max-h-[600px] relative rounded-3xl z-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-3xl z-20 pointer-events-none" />
        </div>

        {/* Right Side: Contact info and form */}
        <div className="space-y-10">
          <h2 className="text-4xl font-extrabold text-[#4DA2BB] mb-6">
            צרו קשר
          </h2>

          {/* Contact Info */}
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
            }].map(({ icon: IconComp, label, key }) => (
              <div
                key={key}
                className="flex items-center gap-4"
              >
                <IconComp size={28} color="rgba(186,186,186,1)" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="mt-10 space-y-4">
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
            <button
              type="submit"
              className="bg-[#4DA2BB] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#005096] transition-all duration-200"
            >
              שלח הודעה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;