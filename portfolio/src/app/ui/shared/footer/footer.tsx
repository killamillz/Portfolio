"use client";

import React from "react";
import Logo from "/public/images/logo.png";
import Image from "next/image";
import { LinksProps } from "@/app/model/navbar";
import { useRouter } from "next/navigation";
import clsx from "clsx";

function Footer() {
  const router = useRouter();
  const links = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact me", link: "/contact-me" },
  ];

  return (
    <div className="flex justify-between py-8 bg-[#0A0A0A]">
      <Image src={Logo} alt={"My logo"} />
      <ul className="flex">
        {links?.map((link: LinksProps, index: number) => (
          <li
            key={index}
            onClick={() => router.push(`${link.link}`)}
            className={clsx("nunito-r-14 px-[20px] cursor-pointer hover:-translate-y-1 duration-300 hover:text-green-500 active active:text-green-500", {})}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
