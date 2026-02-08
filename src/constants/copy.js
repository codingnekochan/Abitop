import {
  aboutImageOne,
  aboutImageTwo,
  heroImageFour,
  heroImageOne,
  heroImageThree,
  heroImageTwo,
  projectImageFive,
  projectImageFour,
  projectImageOne,
  projectImageThree,
  projectImageTwo,
  servicesImageFour,
  servicesImageOne,
  servicesImageThree,
  servicesImageTwo,
} from "./images";

export const heroSectionCopy = [
  { id: "01", title: "Primrose Apartment", year: "2025", image: heroImageOne },
  { id: "02", title: "Sunset Villa", year: "2025", image: heroImageTwo },
  { id: "03", title: "Oceanview Condo", year: "2025", image: heroImageThree },
  { id: "04", title: "Mountain Retreat", year: "2025", image: heroImageFour },
];
export const aboutSectionCopy = {
  title: "At Abitop",
  description:
    "we specialize in transforming visionary concepts into extraordinary architectural realities.\nWith over 8 years of experience across diverse projects, ranging from luxurious residential developments to commercial hubs and public spaces, we bring a blend of creativity, functionality, and sustainability to every design.",
  image: aboutImageOne,
};
export const whoWeAreCopy = {
  title: "Who we are & what we do",
  description:
    "Founded by a dedicated architect with over 8 years of experience across Africa, we are an innovative architectural firm specializing in residential, commercial, and urban projects.\nDriven by precision and creativity, we craft inspiring, sustainable spaces that exceed expectations and bring visionary ideas to life.",
  image: aboutImageTwo,
};
export const servicesCopy = {
  title: "Our Services",
  service_list: [
    { title: "Architectural\nDesign", image: servicesImageOne },
    { title: "Urban\nPlanning", image: servicesImageTwo },
    { title: "Landscape\nDesign", image: servicesImageThree },
    { title: "Project\nSupervision", image: servicesImageFour },
  ],
};
export const projectsCopy = {
  title: "Our latest projects",
  projects_list: [
    { title: "Grand Hotel and Suites", image: projectImageOne },
    { title: "Urban Oasis", image: projectImageTwo },
    { title: "Nature's Retreat", image: projectImageThree },
    { title: "Modern Workspace", image: projectImageFour },
    { title: "Community Hub", image: projectImageFive },
  ],
};
export const contactCopy = {
  title: "Talk to us",
  contact_links: [
    { type: "Email", value: "abitop@example.com", link: "mailto:" },
    { type: "Phone", value: "07077755319", link: "tel:07077755319" },
    {
      type: "Office Address",
      value: "B53 Efab mall extension, garki area 11, Abuja, Nigeria",
      link: "https://maps.app.goo.gl/fyUxbTYTLWGCmBWd7",
    },
    { type: "Linked In", value: "AbitopLinkedInpage", link: "" },
    { type: "Whatsapp", value: "+1234567890", link: "" },
    { type: "Instagram", value: "@Abitop", link: "" },
  ],
  copyright: "@Abitop All Rights Reserved ",
};
