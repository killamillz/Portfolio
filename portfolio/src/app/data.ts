import portfolioImage from "/public/images/portfolio.png";
import express from "/public/images/express.svg";
import graphql from "/public/images/graphql.svg";
import javascript from "/public/images/javascript.svg";
import mongoDb from "/public/images/mongoDb.svg";
import nextjs from "/public/images/nextjs.svg";
import react from "/public/images/react.svg";
import typescript from "/public/images/typescript.svg";

import type { StaticImageData } from "next/image";

export type Portfolio = {
  name: string;
  image: StaticImageData;
  details: string;
  bg: string;
  projectBackground: string;
};

export const portfolioList: Portfolio[] = [
  {
    name: "Plutus",
    image: portfolioImage,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
    bg: "red",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
  },
  {
    name: "canass",
    image: portfolioImage,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
    bg: "blue",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
  },
  {
    name: "verogi",
    image: portfolioImage,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
    bg: "green",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
  },
  {
    name: "metabolous",
    image: portfolioImage,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
    bg: "yellow",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
  },
  {
    name: "dsee",
    image: portfolioImage,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
    bg: "purple",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
  },
];

export const sliderImages = [
  {image: express, alt: "express"},
  {image: graphql, alt: "graphql"},
  {image: javascript, alt: "javascript"},
  {image: mongoDb, alt: "mongoDb"},
  {image: nextjs, alt: "nextjs"},
  {image: react, alt: "react"},
  {image: typescript, alt: "typescript"},
];
