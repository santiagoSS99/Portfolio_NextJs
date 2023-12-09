import React from "react";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export function SeeMoreLink() {
  const content = (
    <PopoverContent className="w-[300px] z-0">
        <div className="px-1 w-full z-0">
          <p className="text-small font-bold text-foreground flex justify-center">
            About Me
          </p>
          <div className="mt-2 flex flex-col gap-2 w-full z-0">
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
        <Popover offset={10} placement="bottom">
          <PopoverTrigger>
            <Button className="border-slate text-black rounded p-2">
              See More
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      </div>
    </>
  );
}
