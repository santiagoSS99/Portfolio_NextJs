"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "../app/global.css";

const logo = require("../../public/ssclogo.svg");

const navBarItems = [
  {
    name: "About Me",
    link: "/Aboutme",
  },
  {
    name: "Projects",
    link: "/Projects",
  },
  {
    name: "Skills",
    link: "/Skills",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <article className="flex sticky items-center justify-center">
        <nav className="fixed flex w-[98%] h-24 shadow-xl rounded-xl justify-between top-2 items-center px-4 backdrop-blur bg-softwhite">
          <section>
            <Link href={"/"}>
              <Image src={logo} width={35} height={35} alt="logo" />
            </Link>
          </section>
          <section className="p-5 space-x-4 jusify-center hidden sm:flex">
            {navBarItems.map(({ name, link }) => (
              <Link key={name} href={link}>
                <h1 className="text-black border border-slate-700 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white focus:outline-none focus:ring focus:ring-violet-300">
                  {name}
                </h1>
              </Link>
            ))}
          </section>
          <section className="items-center hidden sm:flex">
            <button className="bg-slate-800 text-zinc-50 border border-slate-700 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-50 hover:text-black focus:outline-none focus:ring focus:ring-violet-300">
              Hire Me
            </button>
          </section>
          <section
            onClick={handleNav}
            className="sm:hidden cursor-pointer pl-24 "
          >
            <AiOutlineMenu size={25} />
          </section>
          <section
            className={
              menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-0"
                : "fixed left-[-100%] top-0 h-screen w-[65%] p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <section className="py-3">
              {navBarItems.map(({ name, link }) => (
                <Link key={name} href={link} className="py-3">
                  <h1 className="text-black border my-3 border-slate-300 rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white focus:outline-none">
                    {name}
                  </h1>
                </Link>
              ))}
            </section>
          </section>
        </nav>
      </article>
    </>
  );
};

export default Navbar;
