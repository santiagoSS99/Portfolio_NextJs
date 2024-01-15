import Image from "next/image";
import React from "react";
import SideMenuItem from "./SideMenuItem";
import Link from "next/link";
import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";

const logo = require("../../../public/ssclogo.svg");

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40}/>,
    title: "Dashboard",
    subtitle: "Main Page"
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40}/>,
    title: "Dashboard",
    subtitle: "Counter client Side"
  },
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "300px" }}
      className="backdrop-blur bg-softwhite shadow-xl rounded-3xl min-h-screen z-10 text-slate-300 w-64 left-0 h-screen"
    >
      <Link href={"/dashboard/main"}>
        <Image style={{padding:"0px", margin:"20px"}} src={logo} width={35} height={35} alt={""}></Image>
      </Link>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Santiago Sanchez
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {
          menuItems.map(menuItem => (
            <SideMenuItem key={menuItem.path} {...menuItem}/>
          ))
        }
      </div>
    </div>
  );
};
