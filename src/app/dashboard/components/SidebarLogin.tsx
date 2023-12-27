import React from "react";
import SideOptions from "./SideOptions";
import Link from "next/link";

const SidebarLogin = () => {
  return (
    <article className="backdrop-blur fixed bg-softwhite shadow-2xl rounded-3xl min-h-screen z-10 text-stone-800 w-60 left-0 h-screen">
      <div className="">
        <div className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-black">
            Dashboard
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-stone-800">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <img
                className="rounded-full w-8 h-8"
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
          <SideOptions titlesection="Dashboard" briefoverview="Data Analysis" />
          <SideOptions
            titlesection="Users Mngmnt"
            briefoverview="User accounts"
          />
          <SideOptions titlesection="Storage" briefoverview="Data Analysis" />
        </div>
        <section className="flex px-2 absolute justify-center mb-4 items-center w-full bottom-0 ">
          <Link className="bg-indigo-500 px-4 py-2 rounded-full text-white" href="./../">Logout</Link>
        </section>
      </div>
    </article>
  );
};

export default SidebarLogin;
