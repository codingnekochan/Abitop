import React, { useState, useEffect } from "react";
import NavigationSection from "./NavigationSection";
import { motion, AnimatePresence } from "motion/react";
import { heroSectionCopy } from "../../constants/copy";
import SatoshiText from "../Text/SatoshiText";

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
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const nextPage =
        (prevPage + newDirection + heroSectionCopy.length) %
        heroSectionCopy.length;
      return [nextPage, newDirection];
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="#"
      className="relative bg-brand100 overflow-hidden  lg:border-b border-white20"
    >
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <NavigationSection />
      </div>

      {/* Carousel */}
      <div className="relative w-full h-screen flex items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
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
            <picture>
              <source
                srcSet={`${heroSectionCopy[page].image}`}
                type="image/webp"
              />
              <img
                src={`${heroSectionCopy[page].image}`}
                alt={`Hero Image ${page + 1}`}
                className="w-full h-full object-cover object-center"
                loading={page === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 pt-20 pb-30 max-lg:bg-linear-to-t  from-brand100 from-15% to-brand00 lg:pt-0 lg:pb-0 lg:relative z-20 pl-10 lg:pl-20 xl:pl-[112px]">
          <div className="max-w-[206px] md:max-w-[400px] al">
            <SatoshiText
              textSize={"text-[40px] md:text-[60px] xl:text-[80px]"}
              color={"text-white"}
              textAlign={"left"}
              fontWeight={"font-[900]"}
            >
              {heroSectionCopy[page].title}
            </SatoshiText>
          </div>
        </div>
        <div className=" absolute top-[30%] right-0 z-20 lg:hidden">
          {heroSectionCopy.map((copy, i) => (
            <div
              key={copy.id}
              className="flex flex-row gap-2 items-center mb-2"
            >
              <SatoshiText
                color={i === page ? "text-white100" : "text-white35"}
                textSize={i === page ? "text-lg" : "text-xs"}
                fontWeight={i === page ? "font-medium" : "font-regular"}
                textAlign={"right"}
              >
                {copy.id}
              </SatoshiText>
              <div
                className={`h-0.5 w-9 transition-all duration-300 ${
                  i === page ? "bg-white" : "bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="hidden absolute bottom-0 lg:flex left-0 right-0 justify-between items-center gap-2 z-20 px-[112px] pt-[140px] bg-linear-to-t from-brand100  to-brand00">
          {heroSectionCopy.map((copy, i) => (
            <div
              key={copy.id}
              className={`z-40 pb-[25px] transition-all duration-300  border-b-[3px] ${
                i === page ? "border-white" : "border-transparent"
              }`}
            >
              <div className="flex flex-col gap-1.5 mx-10">
                <SatoshiText color={"text-white90"}>{copy.title}</SatoshiText>
                <SatoshiText color={"text-white60"}>{copy.year}</SatoshiText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
