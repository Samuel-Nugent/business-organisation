import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const slides = [
  {
    image: assets.banner_1_img,
    caption: "Award Winning Innovations",
  },
  {
    image: assets.banner_2_img,
    caption: "Excellence Delivered Every Time",
  },
  {
    image: assets.banner_3_img,
    caption: "Innovation that Inspires",
  },
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px]"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
      ></motion.div>

      <h2
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white font-bold 
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center drop-shadow-lg"
      >
        {currentSlide.caption}
      </h2>
    </motion.div>
  );
};

export default BackgroundSlider;
