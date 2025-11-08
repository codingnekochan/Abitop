import React from "react";
import SectionTitlePill from "../sectionTitlePill";
import { servicesCopy } from "../../constants/copy";

function ServicesSection() {
  return (
    <section id="services" className="lg:py-[104px] lg:px-20 bg-brand100">
      <SectionTitlePill title={servicesCopy.title} />
      <div className="lg:mt-10 flex lg:flex-row justify-center items-center w-ful">
        {servicesCopy.service_list.map((service, index) => (
          <div key={index} className="mb-10 relative hover:w-[100%] h-[432px] hover:transition-all ease-in">
            <div className="absolute left-6 bottom-14 z-10">
              <p className="text-white font-Inter font-semibold lg:text-[24px] mb-2 whitespace-pre-wrap">
                {service.title}
              </p>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="grayscale-100 hover:grayscale-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
