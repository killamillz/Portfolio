import express from "/public/images/express.svg";
import graphql from "/public/images/graphql.svg";
import javascript from "/public/images/javascript.svg";
import mongoDb from "/public/images/mongodb.svg";
import nextjs from "/public/images/nextjs.svg";
import react from "/public/images/react.svg";
import typescript from "/public/images/typescript.svg";
import plutus from "/public/images/plutus.png";
import Egba from "/public/images/Egba.png";
import meet from "/public/images/meet.png";
import Nkyss from "/public/images/nkyss.png";

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
    name: "Nkyss bueaty place",
    slug: "nkyssBueatyPlace",
    image: Nkyss,
    details:
      "A full-stack retail ERP system built for a cosmetics store, handling everything from online storefront to in-store point-of-sale and back-office management in one unified platform.",
    bg: "red",
    projectBackground:
      "  Built with Next.js (App Router) on the frontend, Node.js + Express on the backend, and MongoDB as the database. Authentication uses JWT with httpOnly refresh token cookies and role-based access control. Payments are processed via Paystack, and inventory stays in sync across online and in-store channels in real timeusing Socket.io. \n The system covers the full retail lifecycle: product catalogue and category management, inventory tracking with low-stock alerts, supplier management and purchase invoicing, a customer-facing e-commerce storefront with cart and checkout, a cashier POS terminal for walk-in sales, and an admin back-office with financial reporting and order management.\n Admin — admin@commerce.com / admin123 \n Sales Staff — staff@commerce.com / staff123  \ n  Customer — register at /register",
    link: "https://commerce-app-v1.vercel.app/login",
    githubLink: "https://github.com/killamillz/Portfolio",
  hello
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
