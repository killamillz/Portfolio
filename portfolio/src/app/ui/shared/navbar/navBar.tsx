"use client";

import React, { useState } from "react";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import { LinksProps } from "@/app/model/navbar";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css";

function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact me", link: "/contact-me" },
  ];

  return (
    <>
      <div className="hidden md:flex justify-between py-8 bg-inherit .background">
        <Image src={Logo} alt={"My logo"} unoptimized />
        <div className="flex">
          {links?.map((link: LinksProps, index: number) => (
            <div
              onClick={() => router.push(`${link.link}`)}
              key={index}
              className={clsx(
                "nunito-r-14 px-[20px] cursor-pointer hover:-translate-y-1 duration-300 text-white hover:text-green-500",
                {
                  "text-green-500": pathname === link?.link, // Apply green color if the path matches
                }
              )}
            >
              <p>{link.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-between p-4 bg-inherit z-50 ">
        <Image src={Logo} alt={"My logo"} unoptimized />
        {!isOpen && (
          <div
            className="flex justify-end hover:text-green-500 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu size={40} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-opacity-70 flex flex-col nunito-r-14 p-4 z-50 animate-slideIn backdrop-blur-md">
          {" "}
          <div
            className="flex justify-end w-full hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 size={40} />
          </div>
          <div className="flex flex-col  justify-center items-center">
            {links?.map((item, index) => (
              <p
                key={index}
                className={clsx("p-8 hover:text-green-500 cursor-pointer", {
                  "text-green-500": pathname === item.link,
                })}
                onClick={() => {
                  router.push(item.link);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
