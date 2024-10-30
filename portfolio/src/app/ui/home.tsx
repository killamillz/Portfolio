"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ProfilePicture from "/public/images/Face.jpeg";
import CustomButton from "@/app/ui/shared/buttons/custom-button";
import { useRouter } from "next/navigation";
import Footer from "./shared/footer/footer";

function Home() {
  const router = useRouter();

  const goToContactMe = () => {
    router.push("/contact-me");
  };

  const goToPortfolio = () => {
    router.push("/portfolio");
  };

  const article = `
Hi, I’m Alozie Ogochukwu Bright, a mid-level Software Developer and Database Analyst with a passion for problem-solving and creating impactful solutions. I hold a BSc. in Pure and Applied Mathematics from the Federal University of Oye-Ekiti, and over the past four years, I’ve built a diverse skill set through hands-on experience in tech, procurement management, and cryptocurrency trading with top organizations in Nigeria.

Transitioning into tech has allowed me to bring my analytical rigor and adaptability into software development. Specializing in frontend development, I’ve had the opportunity to work on various projects across different sectors, enhancing my versatility and refining my approach to creating dynamic, responsive applications. My focus is on clean, maintainable code and user-centered design that effectively meets client needs and drives results.

An idealistic, ambitious, and principled developer, I am committed to delivering high-quality solutions that make a difference. My journey has deepened my technical skills and strengthened my communication and negotiation abilities—qualities that I value as essential for achieving collaborative success. I’m excited to continue building, learning, and creating innovative technology solutions.`;

  const intro = ` I'm Ogochukwu Alozie and I love building beautiful websites. Checkout my Portfolio and feel free to contact me. 😊`;

  const RunningText = (text: string) => {
    const [state, setState] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const splittedText = text?.split("");

      setTimeout(() => {
        setState(() => {
          return splittedText?.slice(0, index).join("");
        });
        setIndex(index + 1);
      }, 50);
    }, [index, text]);
    return [state];
  };

  const introTextToDisplay = RunningText(intro);
  const head = RunningText("Hey,");

  return (
    <section className="mt-[80px] md:mt-[300px] h-screen w-[100%]">
      <div className="flex flex-col justify-center items-center md:block text-center md:text-start min-h-[500px]">
        <p
          className="noto-b-18 md:noto-b-22 text-wrap w-[80%] md:w-[60%]"
          id="home"
        >
          {head}
          <br></br>
          {introTextToDisplay}
        </p>
        <Link
          href="#about-me"
          className="flex items-center justify-between nunito-r-8 mt-20 md:mt-40 bg-green-500 pr-4 pl-2 py-2 w-fit hover:-translate-y-1 hover:bg-[#33313D] hover:text-green-500 duration-300"
        >
          <span className="mr-[20px] ">
            <MdOutlineKeyboardDoubleArrowDown size={20} />
          </span>
          ABOUT ME
        </Link>
      </div>

      <div
        id="about-me"
        className="flex flex-col md:flex-row justify-center items-center md:justify-between pt-[120px] md:py-[180px] px-[20px] md:px-[0px]"
      >
        <div className="h-[100%] w-[100%] md:w-[50%] mb-[40px] md:mb-[0px]">
          <Image
            src={ProfilePicture}
            alt={"profile picutre"}
            width={0}
            height={0}
            className="h-full"
            unoptimized
            priority
          />
        </div>
        <div className="border-y w-[100%] md:w-[45%]">
          <p className="flex justify-center items-center noto-b-18 md:noto-b-22 mt-[20px] mb-[10px]">
            ABOUT ME
          </p>
          <article className="text-wrap text-center nunito-r-10 mb-[10px]">
            {article}
          </article>
          <div className="flex justify-center items-center w-full mb-[20px] md:mb-[10px] mt-[20px] md:mt-[0px]">
            <CustomButton
              buttonType={"button"}
              handleClick={goToPortfolio}
              className="w-full"
            >
              {" "}
              GO TO PORTFOLIO{" "}
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-[30px] py-[20px]">
        <p className="md:w-[20%]">Intersted in doing a project together?</p>
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

export default Home;
