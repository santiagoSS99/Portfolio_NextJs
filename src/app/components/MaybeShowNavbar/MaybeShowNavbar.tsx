"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MaybeShowNavbar = ({ children }: DefaultInterface) => {
  const location = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    console.log("this is the pathName", location);
    if (
      location === "/dashboard" ||
      location === "/dashboard/counter" ||
      location === "/login"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNavbar;
