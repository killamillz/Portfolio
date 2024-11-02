"use client";

import React from "react";
import { LinksProps, FooterProps } from "@/app/model/navbar";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer({
  size = 40,
  position = "center",
  iconClassName = "px-[20px]",
  pb = "10",
}: FooterProps) {
  const links = [
    {
      name: "Github",
      link: "https://github.com/killamillz",
      icon: <FaGithub size={size} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ogochukwu-alozie-44291b1a2/",
      icon: <FaLinkedin size={size} />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/iam_killamillz",
      icon: <FaTwitter size={size} />,
    },
  ];

  return (
    <div
      className={`flex justify-${position} items-center pb-${pb} pt-8 bg-[#0A0A0A] mb-10`}
    >
      <ul className="flex">
        {links?.map((link: LinksProps, index: number) => (
          <li key={index} className={`${iconClassName}`}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              className={clsx(
                "nunito-r-14 flex items-center cursor-pointer hover:-translate-y-1 duration-300 hover:text-green-500 active:text-green-500"
              )}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
