"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CustomButton from "@/app/ui/shared/buttons/custom-button";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import Footer from "./shared/footer/footer";
import { portfolioList } from "../data";
import Slider from "./shared/slider/slider";

function Portfolio() {
  const Router = useRouter();
  const portfolioRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Stop observing once faded in
          }
        });
      },
      { threshold: 0.1 }
    );

    portfolioRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const goToContactMe = () => {
    Router.push("/contact-me");
  };

  return (
    <section className="md:mt-44 px-5 md:px-0 py-[20px]">
      {portfolioList?.map((item, index) => (
        <div
          ref={(el) => {
            portfolioRefs.current[index] = el;
          }}
          className={clsx("md:flex w-full md:mb-40 mb-10", {
            "flex-row-reverse": index % 2 === 0,
          })}
          key={index}
        >
          <div
            className={`p-2 border md:w-[50%] md:mx-5 md:bg-${item?.bg}-500 hover:bg-${item?.bg}-300 hover:opacity-85 translate-y-1 duration-500 hover:border-green-500 hover:duration-250 cursor-pointer`}
            onClick={() => Router.push(`/portfolio/${item.slug}`)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={0}
              height={0}
              className="h-full border hover:border-green-500 duration-250"
              priority
            />
          </div>
          <div className="flex flex-col justify-center border-y md:mx-10 md:w-[50%] py-8">
            <div className="w-full">
              <p className="noto-b-18 md:noto-b-22">{item.name}</p>
              <p className="nunito-r-10">{item.details}</p>
            </div>
            <div className="flex justify-start items-center w-fit mt-[20px]">
              <CustomButton
                buttonType={"button"}
                handleClick={() => Router.push(`/portfolio/${item.slug}`)}
              >
                {" "}
                View Project details{" "}
              </CustomButton>
            </div>
            <div className="flex justify-start items-center w-fit mt-[20px]">
              <CustomButton
                handleClick={() => window.open(`${item?.githubLink}`, "_blank")}
                buttonType={"button"}
              >
                {" "}
                View Github Repo{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      ))}

      <Slider />
      <div className="flex flex-col md:flex-row justify-between items-center md:px-[30px] py-[20px] noto-b-18 md:noto-b-22">
        <p className="md:w-[30%]">Interested in doing a project together?</p>
        <div className="hidden md:flex md:border-b md:border-white md:justify-center md:items-center md:h-0 md:w-[50%] "></div>
        <div className="flex justify-center md:justify-end items-center w-[100%] md:w-[19%] mt-[20px]">
          <CustomButton buttonType={"button"} handleClick={goToContactMe}>
            {" "}
            CONTACT ME{" "}
          </CustomButton>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Portfolio;
