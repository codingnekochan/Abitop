import React, { useState, useEffect } from "react";
import NavigationSection from "./NavigationSection";
import {
  heroImageFour,
  heroImageOne,
  heroImageThree,
  heroImageTwo,
  projectImageFive,
} from "../../constants/images";
import { motion, AnimatePresence } from "motion/react";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1, zIndex: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    zIndex: 0,
  }),
};

function HeaderSection() {
  const images = [
    heroImageOne,
    projectImageFive,
    heroImageTwo,
    heroImageThree,
    heroImageFour,
  ];

  const [[page, direction], setPage] = useState([0, 0]);
//   const [isLoaded,setIsLoaded] = useState(false)

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const nextPage =
        (prevPage + newDirection + images.length) % images.length;
      return [nextPage, newDirection];
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
	// if(!isLoaded) return;
	// console.log('isloaded',isLoaded)
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="#" className="relative bg-brand100 overflow-hidden">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <NavigationSection />
      </div>

      {/* Carousel */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.picture
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 70, damping: 50 },
              opacity: { duration: 1 },
            }}
            className="absolute w-full h-full"
          >
            {/* Serve WebP if browser supports it, fall back to JPEG */}
            <source
              srcSet={`${images[page]}?format=webp`}
              type="image/webp"
            />
            <img
              src={`${images[page]}?q=80`} // Slight compression hint
              alt={`Hero Image ${page + 1}`}
              className="w-full h-full object-cover object-center"
              loading={page === 0 ? "eager" : "lazy"}
              width={1920}
              height={1080}
              decoding="async"
			//   onLoad={() => setIsLoaded(true)}
            />
          </motion.picture>
        </AnimatePresence>
        {/* Dots indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === page ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
