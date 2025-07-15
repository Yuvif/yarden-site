import { Heart, Target, User } from "@phosphor-icons/react";
import { motion } from "framer-motion";

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
    className="relative bg-gradient-to-b from-[#f3f9ff] to-white py-28 px-6 md:px-20 text-right select-none"
  >
    <div className="max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-16 text-center drop-shadow-sm"
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
            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-blue-50 hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex justify-end mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 rounded-full shadow-md transition-transform group-hover:scale-110">
                <Icon size={36} className="text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-3">{title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
