"use client";

import { socials } from "@/constants";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`xPaddings py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`innerWidth mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <motion.button
          whileHover={{ scale: 1.2 }}
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] hover:bg-[#25618B]/80 transition-all duration-300 rounded-[32px] gap-[12px]"
        >
          <Image
            src="/headset.svg"
            alt="headset"
            height={24}
            width={24}
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </motion.button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">METAVERUS</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.img
                whileHover={{ scale: 1.2 }}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer duration-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
