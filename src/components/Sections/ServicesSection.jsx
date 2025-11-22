import React from "react";
import SectionTitlePill from "../SectionTitlePill";
import { servicesCopy } from "../../constants/copy";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

function ServicesSection() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section
      id="services"
      className="pt-20 pb-0 lg:py-[104px] px-6  lg:px-20 bg-brand100"
    >
      <SectionTitlePill title={servicesCopy.title} />
      <div className="no-scrollbar mt-10 flex flex-row justify-start items-center w-full  max-lg:overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {servicesCopy.service_list.map((service, index) => (
          <motion.div
            className="lg:mb-10 max-lg:flex-none relative snap-center"
            style={{ width: isTablet ? "100%" : "25%" }}
            whileHover={{
              width: "100%",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 1,
              },
            }}
            key={index}
          >
            <div className="absolute left-6 bottom-14 z-10">
              <p className="text-white font-Inter font-semibold lg:text-[24px] mb-2 whitespace-pre-wrap">
                {service.title}
              </p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="lg:grayscale-100 hover:grayscale-0 hover:rounded-[10px] w-full min-h-[360px] lg:h-[432px]  max-lg:rounded-[10px] object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
