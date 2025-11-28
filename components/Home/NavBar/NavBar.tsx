"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const NavBar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      } duration-200 h-[12vh] w-full z-1000 fixed`}
    >
      <div className="flex h-full w-[90%] mx-auto items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="h-5 w-5 text-black" />
          </div>
          <h1 className="text-2xl hidden sm:block md:2xl text-white font-bold">
            CAIO
          </h1>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 "
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="h-4.5 w-4.5" />
            <span>Download CV</span>
          </button>
          {/* Burguer Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
