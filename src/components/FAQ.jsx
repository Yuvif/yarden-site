import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question, CaretDown } from "@phosphor-icons/react";
import faqBackground from "../compressed/2362365.webp";

const faqData = [
  {
    question: "מי מגיע אליך לטיפול?",
    answer: [
      "אני מטפל בכל הגילאים – ילדים, מבוגרים, ספורטאים וחובבי ספורט.",
      "כל מי שסובל מכאב אורתופדי, פציעה מתמשכת או פשוט רוצה לתחזק את הגוף כדי להרגיש טוב יותר ביומיום.",
    ],
  },
  {
    question: "איך נראה טיפול ראשון?",
    answer: [
      "הטיפול הראשון כולל שיחה ואבחון מעמיק, כדי להבין את שורש הבעיה.",
      "לאחר מכן מתחילים בטיפול משולב – גם כלים פסיביים להקלה מיידית וגם תרגול אקטיבי לתיקון עמוק ומתמשך.",
    ],
  },
  {
    question: "מהם הכלים שאתה משתמש בהם?",
    answer: [
      "בין הכלים: עיסוי רפואי, דיקור מערבי יבש, אלקטרותרפיה, חימום מקומי.",
      "כמובן גם תרגילים לחיזוק, ייצוב, שיפור טווח תנועה ועוד – בהתאם למצב ולמטרת הטיפול.",
    ],
  },
  {
    question: "האם אפשר לבוא רק לטיפול חד-פעמי?",
    answer: [
      "כן. גם טיפול בודד יכול להקל ולעזור מאוד במצבים מסוימים.",
      "עם זאת, במצבים כרוניים או לצורך שיקום – סדרת טיפולים תביא תוצאות משמעותיות יותר.",
    ],
  },
  {
    question: "מה מייחד אותך כמטפל?",
    answer: [
      "הגישה שלי רואה את כל האדם – לא רק את הכאב.",
      "אני בודק גם את איכות השינה, הרגלי האימון, יציבה, תזונה, ועוד – ומציע פתרון מקצועי, מותאם ונעים.",
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      dir="rtl"
      className="scroll-mt-32 select-none py-28 px-6 md:px-24 text-gray-900 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(247, 251, 255, 0.9), rgba(247, 251, 255, 0.95)), url(${faqBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-60px] right-[-100px] w-[300px] h-[300px] bg-[#4DA2BB] opacity-20 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[40px] left-[-80px] w-[260px] h-[260px] bg-[#83d0d8] opacity-15 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-center text-5xl font-extrabold mb-20 drop-shadow-md text-[#4DA2BB]">
          שאלות נפוצות
        </h2>

        <div className="space-y-8">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`will-change-transform-opacity rounded-3xl p-6 shadow-xl border backdrop-blur-sm transition-colors duration-300 bg-white/60 ${
                openIndex === i ? "border-[#4DA2BB]" : "border-white/40"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between w-full items-center text-[#2e5969] text-xl font-bold group"
              >
                <span className="flex items-center gap-3">
                  <Question size={26} className="text-[#4DA2BB]" />
                  {item.question}
                </span>
                <CaretDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-[#4DA2BB]"
                      : "text-gray-500"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden will-change-transform-opacity"
                  >
                    <div className="mt-6 text-lg space-y-4 leading-relaxed bg-[#e6f7fb]/70 p-6 rounded-xl text-[#2e5969] font-[500]">
                      {item.answer.map((text, idx) => (
                        <p key={idx}>{text}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
