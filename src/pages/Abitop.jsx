import React from "react";
import AboutSection from "../components/Sections/AboutSection";
import HeaderSection from "../components/Sections/HeaderSection";
import ServicesSection from "../components/Sections/ServicesSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import FooterSection from "../components/Sections/FooterSection";
import useImagePreload from "../hooks/useImagePreload";

function Abitop() {
  //   const { loading, loadedCount, total } = useImagePreload();
  //   const percentage = Math.round((loadedCount / total) * 100);

  //   console.log(percentage);

  //   if (loading) {
  //     return (
  //       <div>
  //         <p className="text-center text-lg mt-20 text-white">
  //           {percentage}% loaded
  //         </p>
  //       </div>
  //     );
  //   }

  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}

export default Abitop;
