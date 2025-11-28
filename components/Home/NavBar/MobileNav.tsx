import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`${navOpen} h-screen w-full fixed inset-0 transform transition-all right-0 duration-500 z-1001 bg-black opacity-70`}
      ></div>
      {/* NavLinks */}
      <div
        className={`${navOpen} h-full w-[80%] text-white fixed flex justify-center flex-col transform transition-all duration-500 delay-200 sm:w-[60%] bg-cyan-800 space-y-6 z-10020 right-0`}
      >
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="w-fit text-white text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Cross icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
