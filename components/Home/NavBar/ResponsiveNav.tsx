"use client";
import React, { useState } from "react";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <NavBar openNav={openNavHandler}/>
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
