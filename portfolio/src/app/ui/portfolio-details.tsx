"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "@/app/ui/shared/buttons/custom-button";
import Footer from "./shared/footer/footer";
import { portfolioList } from "../data";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { StaticImageData } from "next/image";
import Slider from "./shared/slider/slider";

function PortfolioDetails(param: { name: string }) {
  const router = useRouter();

  const selectedPortfolio = portfolioList?.find(
    (portfolio) => portfolio.slug === param.name
  );

  const selectedIndex = portfolioList?.findIndex(
    (portfolio) => portfolio.slug === param.name
  );

  const goToContactMe = () => {
    router.push("/contact-me");
  };

  const goToSelectedPortfolio = (name: string) => {
    router.push(`/portfolio/${name}`);
  };

  return (
    <section className="px-5 md:px-0">
      <p className="uppercase noto-b-24">{param.name}</p>
      <div className="w-full md:h-[600px] h-fit my-10 md:mb-32 bg-red p-2 border">
        <Image
          src={selectedPortfolio?.image as StaticImageData}
          alt={selectedPortfolio?.name as string}
          width={0}
          height={0}
          className="h-full border"
          priority
        />
      </div>{" "}
      <div>
        <div className=" w-full md:mb-10 ">
          <div className=" noto-sb-16">
            <p className="md:mb-10 mb-5">Project Background</p>
            <p className="md:mb-20 mb-10 nunito-r-10">
              {selectedPortfolio?.projectBackground}
            </p>
            <p>Static Previews</p>
            <div
              className={`flex flex-wrap w-[50%] justify-between items-center mt-2 md:block md:min-h-[20rem] md:pt-[40px] md:px-[40px] bg-${selectedPortfolio?.bg}-500`}
            >
              <Image
                src={selectedPortfolio?.image as StaticImageData}
                alt={selectedPortfolio?.name as string}
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
          <div className=" w-full md:py-12 pb-10 border-b ">
            <div className="flex justify-start items-center w-fit mt-10 md:mt-[40px]">
              <CustomButton
                buttonType={"button"}
                handleClick={() =>
                  window.open(`${selectedPortfolio?.link}`, "_blank")
                }
              >
                {" "}
                View Project link{" "}
              </CustomButton>
            </div>
            <div className="flex justify-start  items-center w-fit mt-[20px]">
              <CustomButton
                handleClick={() =>
                  window.open(`${selectedPortfolio?.githubLink}`, "_blank")
                }
                buttonType={"button"}
              >
                {" "}
                View Github Repo{" "}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        {
          <div
            className="flex w-full justify-start cursor-pointer py-8 border-y border-r"
            onClick={() =>
              selectedIndex === 0
                ? goToSelectedPortfolio(
                    portfolioList[portfolioList.length - 1]?.name
                  )
                : goToSelectedPortfolio(portfolioList[selectedIndex - 1]?.name)
            }
          >
            <div className="flex hover:-translate-y-1 duration-300 hover:text-green-500 w-fit">
              <div className="flex justify-start items-center w-fit mr-2">
                <FaChevronLeft size={20} />
              </div>
              <div className="hover:.animate-slideIn">
                <p>
                  {selectedIndex === 0
                    ? portfolioList[portfolioList.length - 1]?.name
                    : portfolioList[selectedIndex - 1]?.name}
                </p>
                <p>Previous Project</p>
              </div>
            </div>
          </div>
        }
        {
          <div
            className="flex w-full justify-end cursor-pointer py-8 border-y border-l "
            onClick={() =>
              selectedIndex === portfolioList.length - 1
                ? goToSelectedPortfolio(portfolioList[0]?.name)
                : goToSelectedPortfolio(portfolioList[selectedIndex + 1]?.name)
            }
          >
            <div className="flex hover:-translate-y-1 duration-300 hover:text-green-500 w-fit">
              <div>
                <p>
                  {selectedIndex === portfolioList.length - 1
                    ? portfolioList[0]?.name
                    : portfolioList[selectedIndex + 1]?.name}
                </p>
                <p>Next Project</p>
              </div>
              <div className="flex justify-end items-center w-fit ml-2">
                <FaChevronRight size={20} />
              </div>
            </div>
          </div>
        }
      </div>
      <Slider />
      <div className="flex flex-col md:flex-row justify-between items-center md:px-[30px] md:py-[20px] noto-b-18 md:noto-b-22 mt-5 md:mt-0">
        <p className="md:w-[30%] w-full">
          Interested in doing a project together?
        </p>
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

export default PortfolioDetails;
