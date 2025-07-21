import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import rec1 from "../compressed/rec1.webp";
import rec2 from "../compressed/rec2.webp";
import rec3 from "../compressed/rec3.webp";
import rec4 from "../compressed/rec4.webp";

const recImages = [rec1, rec2, rec3, rec4];

const Recommendations = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="recommendations"
      dir="rtl"
      className="relative scroll-mt-32 py-32 px-6 md:px-20 bg-[#f4f4f4] text-gray-900 overflow-hidden select-none"
    >
      {/* Decorative motion circles */}
      <motion.div
        className="absolute top-[-120px] left-[-150px] w-[400px] h-[400px] rounded-full filter blur-[100px] bg-[#037fae30]"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-90px] right-[-130px] w-[320px] h-[320px] rounded-full filter blur-[90px] bg-[#00bcd430]"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-20 drop-shadow-md text-[#037fae] relative z-10"
      >
        המלצות מטופלים
      </motion.h2>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1.2}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          className="py-12 max-w-[880px] mx-auto"
        >
          {recImages.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="rounded-3xl cursor-grab select-none shadow-lg overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                src={img}
                loading="lazy"
                alt={`המלצה ${idx + 1}`}
                draggable={false}
                className="w-full h-[460px] object-cover rounded-3xl border-4 border-white shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommendations;
