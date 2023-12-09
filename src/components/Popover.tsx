import React from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export function SeeMoreLink() {
  const content = (
    <PopoverContent className="w-[330px]">
      <div className="w-full">
        {/* <p className="text-small font-bold text-foreground flex justify-center">
            About Me
          </p> */}
        <div className="mt-2 flex flex-col gap-2 w-full z-0 border-2 p-3 rounded-lg border-slate-400">
          I am a Systems Engineer with over a year of dedicated experience in
          web development, specializing in technologies such as Typescript,
          Angular, NextJs, and Node.js. I possess a great dedication to
          self-directed learning, constantly pursuing avenues for professional
          advancement.
        </div>
      </div>
    </PopoverContent>
  );

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Popover offset={10} placement="bottom" backdrop="blur">
          <PopoverTrigger>
            <Button size="lg" variant="shadow" className="about-mepx border-white px-6 bg-orange-500 text-white rounded-xl border-2 p-2">
              About Me
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      </div>
    </>
  );
}
