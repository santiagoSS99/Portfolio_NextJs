"use client";

const logo = require("../../public/ssclogow.svg");

import Link from "next/link";
import Image from "next/image";

import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg pt-32 px-8 pb-8 max-sm:flex-none flex justify-between w-full">
        <article className="justify-between flex max-sm:flex-col w-full">
          <section className="w-[40%]">
            <Link href={"/"}>
              <Image
                src={logo}
                width={35}
                height={35}
                className="text-white mb-6"
                alt="logo"
              />
            </Link>
            <p className="text-white my-3">
              Making the world a better place through constructing elegant
              hierarchies..
            </p>
            <div className="text-white flex">
              <FaInstagram size={20} style={{ margin: 5 }} />
              <FaFacebook size={20} style={{ margin: 5 }} />
            </div>
          </section>
          <article className="flex justify-between w-auto">
            <section className="flex justify-between">
              <div className="text-white leading-10 px-3">
                <h1 className="font-bold">Solutions</h1>
                <h1>Marketing</h1>
                <h1>Analytics</h1>
                <h1>Commerce</h1>
              </div>
              <div className="text-white leading-10 px-3">
                <h1 className="font-bold">Support</h1>
                <h1>Pricing</h1>
                <h1>Documentation</h1>
                <h1>Guides</h1>
              </div>
            </section>
            <section className="flex justify-between">
              <div className="text-white leading-10 px-3">
                <h1 className="font-bold">Company</h1>
                <h1>About</h1>
                <h1>Blog</h1>
                <h1>Jobs</h1>
              </div>
              <div className="text-white leading-10 px-3">
                <h1 className="font-bold">Legal</h1>
                <h1>Claim</h1>
                <h1>Privacy</h1>
                <h1>Terms</h1>
              </div>
            </section>
          </article>
        </article>
      </footer>
    </>
  );
};

export default Footer;
