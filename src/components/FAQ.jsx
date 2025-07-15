import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, CaretDown } from '@phosphor-icons/react';

const faqData = [
  {
    question: 'מי מגיע אליך לטיפול?',
    answer: [
      'אני מטפל בכל הגילאים – ילדים, מבוגרים, ספורטאים וחובבי ספורט.',
      'כל מי שסובל מכאב אורתופדי, פציעה מתמשכת או פשוט רוצה לתחזק את הגוף כדי להרגיש טוב יותר ביומיום.',
    ],
  },
  {
    question: 'איך נראה טיפול ראשון?',
    answer: [
      'הטיפול הראשון כולל שיחה ואבחון מעמיק, כדי להבין את שורש הבעיה.',
      'לאחר מכן מתחילים בטיפול משולב – גם כלים פסיביים להקלה מיידית וגם תרגול אקטיבי לתיקון עמוק ומתמשך.',
    ],
  },
  {
    question: 'מהם הכלים שאתה משתמש בהם?',
    answer: [
      'בין הכלים: עיסוי רפואי, דיקור מערבי יבש, אלקטרותרפיה, חימום מקומי.',
      'כמובן גם תרגילים לחיזוק, ייצוב, שיפור טווח תנועה ועוד – בהתאם למצב ולמטרת הטיפול.',
    ],
  },
  {
    question: 'האם אפשר לבוא רק לטיפול חד-פעמי?',
    answer: [
      'כן. גם טיפול בודד יכול להקל ולעזור מאוד במצבים מסוימים.',
      'עם זאת, במצבים כרוניים או לצורך שיקום – סדרת טיפולים תביא תוצאות משמעותיות יותר.',
    ],
  },
  {
    question: 'מה מייחד אותך כמטפל?',
    answer: [
      'הגישה שלי רואה את כל האדם – לא רק את הכאב.',
      'אני בודק גם את איכות השינה, הרגלי האימון, יציבה, תזונה, ועוד – ומציע פתרון מקצועי, מותאם ונעים.',
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      dir="rtl"
      className="scroll-mt-32 select-none py-28 px-6 md:px-24 bg-gradient-to-b from-[#e0f4ff] to-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-blue-800 mb-20 drop-shadow-md">
          שאלות נפוצות
        </h2>

        <div className="space-y-8">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`rounded-3xl p-6 bg-white shadow-xl border hover:border-blue-300 transition-colors duration-300 ${
                openIndex === i ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between w-full items-center text-blue-900 text-xl font-bold group"
              >
                <span className="flex items-center gap-3">
                  <Question size={26} className="text-blue-700" />
                  {item.question}
                </span>
                <CaretDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 text-lg text-gray-700 space-y-4 leading-relaxed bg-blue-50/30 p-4 rounded-xl font-[500]">
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
