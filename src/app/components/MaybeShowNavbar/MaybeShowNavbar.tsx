'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MaybeShowNavbar = ({ children }: DefaultInterface) => {
  const location = usePathname();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const dashboardRegex = /\/dashboard/i;
    const isDashboard = dashboardRegex.test(location);
    // console.log("isDashboard", isDashboard);

    setShowNavbar(!isDashboard);
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNavbar;
