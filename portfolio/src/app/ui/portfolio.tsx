"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "@/app/ui/shared/buttons/custom-button";
import { useRouter } from "next/navigation";
import clsx from "clsx";

function Portfolio() {
  const Router = useRouter();
  const portfolioList = [
    {
      name: "Plutus",
      image: null,
      details:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
      bg: "red",
    },
    {
      name: "Plutus",
      image: null,
      details:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
      bg: "blue",
    },
    {
      name: "Plutus",
      image: null,
      details:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
      bg: "green",
    },
    {
      name: "Plutus",
      image: null,
      details:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
      bg: "gold",
    },
    {
      name: "Plutus",
      image: null,
      details:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScriptfor the areas that required interactivity, such as the testimonial slider.",
      bg: "pink",
    },
  ];
  return (
    <section>
      {portfolioList?.map((item, index) => (
        <div
          className={clsx("flex w-full mb-24", {
            "flex-row-reverse": index % 2 === 0,
          })}
          key={index}
        >
          <div
            className={`min-h-[20rem] px-[40px] w-[50%] pt-[40px] bg-${item.bg}`}
          >
            <Image src={item.image} alt={item.name} width={0} height={0} />
          </div>
          <div className="w-[50%] p-12">
            <div className="w-full">
              <p className="noto-b-18 md:noto-b-22">{item.name}</p>
              <p className="nunito-r-10">{item.details}</p>
            </div>
            <div className="flex justify-start items-center w-fit mt-[20px]">
              <CustomButton
                buttonType={"button"}
                handleClick={() => Router.push(`/portfolio/${item.name}`)}
              >
                {" "}
                View Project{" "}
              </CustomButton>
            </div>
            <div className="flex justify-start  items-center w-fit mt-[20px]">
              <CustomButton buttonType={"button"}>
                {" "}
                View Github Repo{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
