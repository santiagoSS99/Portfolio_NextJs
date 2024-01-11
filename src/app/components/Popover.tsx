'use client'
import React from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { IoLogoJavascript } from "react-icons/io";
import { SiAngular, SiNestjs, SiReact, SiTypescript } from "react-icons/si";
import { FaGithub, FaNode } from "react-icons/fa";

export function SeeMoreLink() {
  const content = (
    <PopoverContent className="w-[330px]">
      <div className="w-full">
        <div className="flex justify-center  w-full z-0  rounded-lg">
          <IoLogoJavascript size={22} style={{ margin: "20px" }} />
          <SiTypescript size={22} style={{ margin: "20px" }} />
          <FaNode size={22} style={{ margin: "20px" }} />
          <SiAngular size={22} style={{ margin: "20px" }} />
        </div>
        <div className="flex justify-center  w-full z-0  rounded-lg">
          <SiReact size={22} style={{ margin: "20px" }} />
          <SiNestjs size={22} style={{ margin: "20px" }} />
          <FaGithub size={22} style={{ margin: "20px" }} />
        </div>
      </div>
    </PopoverContent>
  );

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Popover offset={10} placement="bottom" color="primary" backdrop="blur">
          <PopoverTrigger>
            <Button
              size="lg"
              className="about-mepx border-white px-6 bg-orange-500 text-white rounded-xl border-2 p-2"
            >
              Skills:
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      </div>
    </>
  );
}
