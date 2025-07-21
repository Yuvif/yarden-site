import { Heart, Target, User } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import servicesBackground from "../compressed/muscle-icon.webp";
const calmWave = new URL("../assets/calm-wave.svg", import.meta.url).href;


const services = [
  {
    icon: Target,
    title: "שיקום תנועה",
    desc: "תוכנית שיקום מותאמת אישית עם תרגולים מדויקים לשיפור התנועה ולחיזוק.",
  },
  {
    icon: Heart,
    title: "טיפולים מותאמים",
    desc: "עיסוי רפואי, דיקור יבש, אלקטרותרפיה ועוד – בהתאמה לצרכים שלך.",
  },
  {
    icon: User,
    title: "ליווי אישי",
    desc: "מעקב וליווי מקצועי לאורך כל הדרך – עד להשגת המטרה הבריאותית שלך.",
  },
];

const Services = () => (
  <section
    id="services"
    className="relative pt-28 pb-28 px-6 md:px-20 text-right select-none"
    style={{
      backgroundImage: `url(${calmWave}), url(${servicesBackground})`,
      backgroundBlendMode: "overlay",
      backgroundSize: "cover, 200px",
      backgroundRepeat: "no-repeat, repeat",
      backgroundPosition: "center, center",
      backgroundAttachment: "fixed",
      backgroundColor: "#f7fbff", // base color to soften PNG and keep clarity
    }}
  >
    <div className="relative max-w-7xl mx-auto z-10">
      <motion.h2
        className="will-change-transform-opacity text-4xl md:text-5xl font-extrabold text-[#037fae] mb-16 text-center drop-shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        שירותים מקצועיים
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="will-change-transform-opacity group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-white/40 hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex justify-end mb-6">
              <div className="bg-[#037fae] p-4 rounded-full shadow-md transition-transform group-hover:scale-110">
                <Icon size={36} className="text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#037fae] mb-3 drop-shadow-sm">
              {title}
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
