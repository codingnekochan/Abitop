import React, { useMemo, useState } from "react";
import KumarText from "../Text/KumarText";
import SatoshiText from "../Text/SatoshiText";
import NavButton from "../Buttons/NavButton";
import Divider from "../Divider";
import { navigationLinks } from "../../constants/navigationlinks";

function NavigationSection() {
  const [focus, setFocus] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const desktopLinks = useMemo(
    () => navigationLinks.filter((link) => link.key !== "contact"),
    []
  );

  return (
    <>
      <nav className="max-lg:hidden flex items-center justify-between mx-[112px] pt-4 pb-0.5 border-b border-white20">
        <KumarText color={"text-white"} textSize={"text-3xl"}>
          Abitop
        </KumarText>
        <ul className="flex gap-10 items-center">
          {desktopLinks.map((link) => (
            <li key={link.key} className="relative">
              <div className="mb-10">
                <a onClick={() => setFocus(link.key)} href={link.href}>
                  <SatoshiText
                    fontWeight={"font-regular"}
                    textSize={"text-base"}
                    color={focus === link.key ? "text-white" : "text-gray"}
                  >
                    {link.name}
                  </SatoshiText>
                </a>
              </div>
              <div
                className={`absolute -bottom-1 h-1 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  focus === link.key ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>
        <NavButton
          onClick={() => setFocus("contact")}
          text="Talk to us"
          bgColor="bg-brand100"
          textColor="text-accent"
          href="#contact"
        />
      </nav>
      <nav
        className={`lg:hidden ${isMenuOpen ? "backdrop-blur-xs h-screen bg-accent15" : ""}`}
      >
        <div className="flex flex-row justify-between items-center px-6 py-8">
          <KumarText color={"text-white"} textSize={"text-[22px]"}>
            Abitop
          </KumarText>
          <button onClick={handleOpenMenu}>
            <img aria-hidden={true} src="./src/assets/menu.svg" />
          </button>
        </div>
        <div
          className={`bg-brand100 z-50 absolute top-0 left-0 right-0 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="flex justify-between px-8 py-6">
            <div />
            <button onClick={handleCloseMenu} className="">
              <img aria-hidden={true} src="./src/assets/cancel.svg" />
            </button>
          </div>
          <Divider />
          <ul className="mb-16 z-50">
            {navigationLinks.map((link) => (
              <li key={link.key} className="border-b border-accent15 py-4">
                <a onClick={handleCloseMenu} href={link.href} className="active:opacity-70">
                  <SatoshiText
                    fontWeight={"font-medium"}
                    textSize={"text-base"}
                    color={"text-white"}
                    textAlign={"text-center"}
                  >
                    {link.name}
                  </SatoshiText>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationSection;
