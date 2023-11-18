"use client";

const logo = require("../../public/ssclogow.svg");

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg pt-32 px-8 pb-8 flex justify-between">
        <article className="flex">
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                width={35}
                height={35}
                className="text-white"
                alt="logo"
              />
            </Link>
            <p className="text-white my-3">Making the world a better place through constructing elegant hierarchies..</p>
            <div className="text-white">
                icons
            </div>
          </div>
          <div className="text-white">col 2</div>
          {/* <div className="text-white">col 3</div>
          <div className="text-white">col 4</div> */}
        </article>
      </footer>
    </>
  );
};

export default Footer;
