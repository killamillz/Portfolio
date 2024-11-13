"use client";

import { sliderImages } from "@/app/data";
import Image from "next/image";

function Slider() {
  return (
    <div className="w-full flex justify-between bg-white py-4 px-2 my-12 border-b ">
      {sliderImages?.map((item, index) => (
        <div key={index} className="w-8 h-8 md:w-20 md:h-20 rounded-md">
          <Image
            src={item?.image}
            alt={item.alt}
            height={0}
            width={0}
            // className="w-full h-full"
            //hello
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
