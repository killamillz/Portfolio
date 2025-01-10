import express from "/public/images/express.svg";
import graphql from "/public/images/graphql.svg";
import javascript from "/public/images/javascript.svg";
import mongoDb from "/public/images/mongodb.svg";
import nextjs from "/public/images/nextjs.svg";
import react from "/public/images/react.svg";
import typescript from "/public/images/typescript.svg";
import plutus from "/public/images/plutus.png";
import Max from "/public/images/Max.png";
import Egba from "/public/images/Egba.png";
import meet from "/public/images/meet.png";

import type { StaticImageData } from "next/image";

export type Portfolio = {
  name: string;
  image: StaticImageData;
  details: string;
  bg: string;
  projectBackground: string;
  link?: string;
  githubLink?: string;
  slug?: string;
};

export const portfolioList: Portfolio[] = [
  {
    name: "Egba Land Website",
    slug: "egbaLand",
    image: Egba,
    details:
      "This is a descriptive web page of all the chiefs, ceremonies, townships, and cultural information about the Egba people.",
    bg: "red",
    projectBackground:
      "This project was built using NEXTjs, and Tailwind for styling. This is a descriptive web page of all the chiefs, ceremonies, townships, and cultural information about the Egba people.",
    link: "https://egba-land.vercel.app/",
    githubLink: "https://github.com/killamillz/Egba_land",
  },
  {
    name: "Max enterprise App",
    slug: "maxEnterpriseApp",
    image: Max,
    details:
      "An In-house app that helps companies apply for ev vehicles in bulk thereby, improving sales",
    bg: "red",
    projectBackground:
      "This project was built using NEXTjs, React Query, Saas, chakraUi and Tailwind for styling. This is an application for companies to request for more then one assets and also the user seeing and interacting with the app in other to complete the process flow and get onboarded.",
    link: "https://enterprise.dev.maxdrv.com/",
    githubLink: "https://enterprise.dev.maxdrv.com/",
  },
  {
    name: "Plutus",
    slug: "plutus",
    image: plutus,
    details:
      "An online banking app to for tracking expenses, investment and making seamless transfer amongst users",
    bg: "red",
    projectBackground:
      "This project was built using Vite, Expressjs, Node, RTK Query, and Tailwind for styling. It was built to help people struggling with handling finances bring up their income thereby having expense tracker, expense limit, and investment options to help grow funds and make users independent.",
    link: "https://plutusbank.netlify.app/",
    githubLink: "https://github.com/killamillz/Plutus_Online",
  },
  {
    name: "Meet landing page",
    slug: "meetLandingPage",
    image: meet,
    details:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the button hovers.",
    bg: "blue",
    projectBackground:
      "This project was a front-end challenge from Frontend Mentor. It's a platform that eneables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project. Helping me to improve and adapy my style.",
    link: "https://bespoke-tartufo-e599da.netlify.app/",
    githubLink: "https://github.com/killamillz",
  },
];

export const sliderImages = [
  { image: express, alt: "express" },
  { image: graphql, alt: "graphql" },
  { image: javascript, alt: "javascript" },
  { image: mongoDb, alt: "mongoDb" },
  { image: nextjs, alt: "nextjs" },
  { image: react, alt: "react" },
  { image: typescript, alt: "typescript" },
];
