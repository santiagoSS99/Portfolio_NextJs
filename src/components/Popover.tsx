import React from "react";
import { Button, Popover, PopoverTrigger } from "@nextui-org/react";

export function SeeMoreLink() {
  return (
    <>
      <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
        <Popover key="top" placement="top" color="primary">
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">
              See More
            </Button>
          </PopoverTrigger>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Popover Content</div>
            <div className="text-tiny">This is the popover content</div>
          </div>
        </Popover>
      </div>
    </>
  );
}
