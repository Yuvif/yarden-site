import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import aboutImg1 from "../assets/about1.jpeg";
import aboutImg2 from "../assets/about2.jpeg";
import aboutImg3 from "../assets/about3.jpeg";

const images = [aboutImg1, aboutImg2, aboutImg3];

const About = () => {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative scroll-mt-32 py-32 px-6 md:px-20 bg-[#f4f4f4] text-gray-900 overflow-hidden select-none"
    >
      {/* Decorative ambient glows */}
      <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-[#037fae]/30 blur-[100px] rounded-full z-0" />
      <div className="absolute bottom-[-80px] right-[-120px] w-[300px] h-[300px] bg-[#037fae]/20 blur-[100px] rounded-full z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center justify-between">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 space-y-8 will-change-transform-opacity"
        >
          <h2 className="text-6xl font-black tracking-tight text-[#037fae] drop-shadow-md">
            מי אני
          </h2>

          <div className="text-xl space-y-5 text-gray-800 leading-relaxed">
            <p>
              <span className="text-[#037fae] font-bold">נעים מאוד,</span> אני ירדן לוי – ספורטתרפיסט מוסמך (B.Sc) עם התמחות בטיפול בכאב ובפציעות אורתופדיות.
            </p>
            <p>
              אני מאמין שהגוף יודע לרפא את עצמו – כשנותנים לו את הכלים הנכונים.
            </p>
            <p>
              בעזרת שילוב בין טיפול ידני, תנועה מחודשת ותרגול מותאם אישית – אפשר להגיע לתוצאות אמיתיות.
            </p>
            <p>
              עבדתי עם מאות מטופלים – ביניהם גם ספורטאי ליגת העל – והמטרה תמיד ברורה: 
              <br />
              <motion.span
                whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-[#025e85] font-bold text-2xl block mt-4"
              >
                חזרה לחיים של תנועה – ללא כאב.
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* SWIPER IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 max-w-[460px] w-full rounded-[32px] p-[3px] bg-gradient-to-tr from-[#037fae] to-[#66d6ff] shadow-2xl backdrop-blur-md will-change-transform-opacity"
        >
          <div className="bg-white/60 rounded-[28px] overflow-hidden backdrop-blur-md">
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              slidesPerView={"auto"}
              autoplay={{ delay: 3200 }}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              className="w-full h-[480px]"
            >
              {images.map((img, idx) => (
                <SwiperSlide
                  key={idx}
                  className="w-[320px] h-[460px] flex items-center justify-center"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={img}
                    alt={`תמונה ${idx + 1}`}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                    draggable={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
