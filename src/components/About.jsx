import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import aboutImg1 from "../assets/about1.jpeg";
import aboutImg2 from "../assets/about2.jpeg";
import aboutImg3 from "../assets/about3.jpeg";

const images = [aboutImg1, aboutImg2, aboutImg3];

const About = () => {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative scroll-mt-32 py-28 px-6 md:px-20 bg-gradient-to-b from-[#eaf4ff] to-white text-gray-900 overflow-hidden"
    >
      {/* Background Blob Accent */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-3xl rounded-full pointer-events-none z-0"></div>

      <div className="select-none max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
      <h2
        className="
          text-6xl
          font-extrabold
          text-blue-900
          relative
          select-none
          before:absolute
          before:-bottom-2
          before:left-0
          before:w-24
          before:h-1.5
          before:rounded-full
          before:bg-gradient-to-r
          before:from-teal-400
          before:via-blue-600
          before:to-teal-400
          before:shadow-lg
        "
        style={{ paddingBottom: '0.5rem' }}
      >
        מי אני
    </h2>



          <div className="space-y-6 text-xl leading-relaxed text-gray-800">
            <p>
              <strong className="text-blue-800 font-semibold">נעים מאוד,</strong> אני ירדן לוי – ספורטתרפיסט מוסמך (B.Sc), מומחה בטיפול בכאבים ובפציעות אורתופדיות.
            </p>

            <p>
              אני <span className="font-bold">מאמין שטיפול טוב</span> מתחיל מהבנה עמוקה של האדם – לא רק איפה כואב לו, אלא איך הוא חי, זז, ישן ומתאמן.
            </p>

            <p>
              <span className="text-blue-700 font-medium">עם ניסיון של מעל חמש שנים</span> בטיפול בלקוחות פרטיים ובספורטאים בליגת העל, אני משלב מקצועיות עם רגישות ואכפתיות.
            </p>

            <p>
              אני מטפל בגישה שמשלבת בין <span className="font-semibold">מגע, תנועה וחיזוק</span> – שילוב של טיפול ידני ואקטיבי יחד.
            </p>

            <p className="font-bold text-blue-900 text-2xl mt-6">
              הקשבה. התאמה אישית. חיים נטולי מגבלות.
            </p>
          </div>
        </motion.div>

        {/* Swiper with Coverflow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[450px] bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            className="w-full h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="w-[300px] h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-white shadow-md"
              >
                <img
                  src={img}
                  alt={`תמונה ${idx + 1}`}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
