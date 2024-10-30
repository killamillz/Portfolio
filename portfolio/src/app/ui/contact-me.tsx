/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import CustomButton from "@/app/ui/shared/buttons/custom-button";
import Footer from "./shared/footer/footer";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const router = useRouter();

  const goToPortfolio = () => {
    router.push("/portfolio");
  };

  const form = useRef<any>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("error");
        }
      );
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start border-y py-12 mt-8 md:mt-20 ">
        <div className="mb-4 md:mb-0 md:w-[40%]">
          <p className="noto-b-24 animate-slide-in-left">Get in Touch</p>
        </div>
        <div className="w-[90%] md:w-[60%] animate-slide-in-right">
          <div className="flex flex-col justify-between text-center md:text-start nunito-r-10">
            {` I'd love to hear about what you're working on and how i could help.
          I'm currently looking for a new role and i'm open to a wide range of
          opportunity. My preference would be to find a position in a company
          any where in the world so i am so happy to hear about opportunites
          that fit that description. I'm a hard-working and postive person who
          will always approach each task with sense of purpose and attention to
          detail. Please do feel free to check out my profiles below and get in
          touch using the form.`}
          </div>
          <div>
            <Footer
              size={25}
              position="between"
              iconClassName="pr-[10px]"
              pb="0"
            />
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start border-b py-8 md:py-12">
          <div className="mb-4 md:mb-0 md:w-[40%]">
            <p className="noto-b-24 animate-slideInSlow">Contact Me</p>
          </div>
          <div className="flex flex-col justify-between nunito-r-10 w-[90%] md:w-[60%] animate-slideInSlow">
            <div className="flex flex-col pb-8">
              <label>Name</label>
              <input
                className="h-[50px] bg-slate-200 p-2 focus:border-green-500 border-2 focus:outline-none focus:ring-0 focus:shadow-none text-gray-900 mt-2"
                placeholder="John Joe"
                name="user_name"
                type="text"
              />
            </div>
            <div className="flex flex-col pb-8">
              <label>Email Address</label>
              <input
                className="h-[50px] bg-slate-200 p-2 focus:border-green-500 border-2 focus:outline-none focus:ring-0 focus:shadow-none text-gray-900 mt-2"
                placeholder="JohnJoe@example.com"
                name="user_email"
                type="email"
              />
            </div>
            <div className="flex flex-col pb-8 h-72">
              <label>Message</label>
              <textarea
                className="h-72 p-2 bg-slate-200 focus:border-green-500 border-2 focus:outline-none focus:ring-0 focus:shadow-none  text-gray-900 mt-2"
                placeholder="Reach out to me..."
                name="message"
              />
            </div>
            <div className="flex justify-center w-full mt-[20px]">
              <CustomButton buttonType={"submit"}> SEND MESSAGE </CustomButton>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col md:flex-row justify-between items-center px-[30px] py-[20px]">
        <p className="md:w-[20%]">Want to see my awesome works?</p>
        <div className="hidden md:flex md:border-b md:border-white md:justify-center md:items-center md:h-0 md:w-[50%] "></div>
        <div className="flex justify-center md:justify-end items-center w-[100%] md:w-[19%] mt-[20px]">
          <CustomButton buttonType={"button"} handleClick={goToPortfolio}>
            {" "}
            GO TO PORTFOLIO{" "}
          </CustomButton>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactMe;
