"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { useState } from "react";
import Image from "next/image";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
}: {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      variants={fadeIn({
        direction: "right",
        type: "tween",
        delay: index * 0.5,
        duration: 0.75,
      })}
      className={`relative ${
        isHovered ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[1s] ease-out-flex cursor-pointer`}
    >
      <Image
        src={imgUrl}
        alt="planet-04"
        fill
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {!isHovered ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col duration-[1s] transition-[flex] bg-[rgba(0,0,0,0.5)] rounded-t-[24px] rounded-b-[24px]">
          <div
            className={`flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[23px]`}
          >
            <Image
              src="/headset.svg"
              alt="headset"
              height={30}
              width={30}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
