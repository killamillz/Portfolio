"use client";

import React, { useState } from "react";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import { LinksProps } from "@/app/model/navbar";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

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
      <div className="hidden md:flex justify-between py-8 bg-[#0A0A0A]">
        <Image src={Logo} alt={"My logo"} />
        <ul className="flex">
          {links?.map((link: LinksProps, index: number) => (
            <li
              key={index}
              onClick={() => router.push(`${link.link}`)}
              className={clsx(
                "nunito-r-14 px-[20px] cursor-pointer hover:-translate-y-1 duration-300 active:text-green-500 hover:text-green-500",
                {
                  "text-green-500": pathname === link.link, // Apply green color if the path matches
                }
              )}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex justify-between p-4 bg-[#0A0A0A]">
        <Image src={Logo} alt={"My logo"} />
        {!isOpen && (
          <div
            className="flex justify-end hover:text-green-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu size={40} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col nunito-r-14 p-4 z-50 animate-slideIn">
          {" "}
          <div
            className="flex justify-end w-full hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            <RxCross2 size={40} />
          </div>
          <ul className="flex flex-col  justify-center items-center">
            {links?.map((item, index) => (
              <li
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
