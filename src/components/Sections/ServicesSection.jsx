import React from "react";
import SectionTitlePill from "../SectionTitlePill";
import { servicesCopy } from "../../constants/copy";

function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-20 pb-0 lg:py-[104px] px-6  lg:px-20 bg-brand100"
    >
      <SectionTitlePill title={servicesCopy.title} />
      <div className="mt-10 flex flex-row justify-center items-center w-full max-lg:overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {servicesCopy.service_list.map((service, index) => (
          <div
            key={index}
            className="lg:mb-10 max-md:flex-none relative max-lg:w-[100%] hover:w-[100%] min-h-[360px] lg:h-[432px] hover:transition-all ease-in snap-center"
          >
            <div className="absolute left-6 bottom-14 z-10">
              <p className="text-white font-Inter font-semibold lg:text-[24px] mb-2 whitespace-pre-wrap">
                {service.title}
              </p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="lg:grayscale-100 hover:grayscale-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
