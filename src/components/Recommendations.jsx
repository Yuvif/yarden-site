import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import rec1 from "../assets/rec1.jpg";
import rec2 from "../assets/rec2.jpg";
import rec3 from "../assets/rec3.png";
import rec4 from "../assets/rec4.jpg";

const recImages = [rec1, rec2, rec3, rec4];


const Recommendations = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="recommendations"
      dir="rtl"
      className="relative scroll-mt-32 py-32 px-6 md:px-20 bg-[#f4f4f4] text-gray-900 overflow-hidden select-none"
    >
      {/* Background decorative shapes */}
      <motion.div
        className="absolute top-[-120px] left-[-150px] w-[450px] h-[450px] rounded-full filter blur-[100px] will-change-transform-opacity"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-90px] right-[-130px] w-[350px] h-[350px] rounded-full filter blur-[90px] will-change-transform-opacity"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-5xl font-extrabold mb-20 drop-shadow-md text-[#037fae] relative z-10"
      >
        המלצות מטופלים
      </motion.h2>

      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto"
      >
        <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={1.3} // show 1 large + partial sides
        coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
        }}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        className="py-12 max-w-[900px] mx-auto"
        >
        {recImages.map((img, idx) => (
            <SwiperSlide
            key={idx}
            className="rounded-3xl cursor-grab select-none shadow-lg overflow-hidden"
            style={{ userSelect: "none" }}
            >
            <motion.img
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(3, 127, 174, 0.4)" }}
                transition={{ duration: 0.3 }}
                src={img}
                loading="lazy"
                alt={`המלצה ${idx + 1}`}
                draggable={false}
                className="w-full h-[480px] object-cover rounded-3xl border-4 border-white shadow-md will-change-transform-opacity"
            />
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recommendations;
