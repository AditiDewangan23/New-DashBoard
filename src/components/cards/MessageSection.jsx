import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Plus, Send } from "lucide-react";

function MessageSection() {
  return (
    <div className="flex flex-col ">
      <div className=" flex h-1/5 gap-2">
        <div className="">avtar</div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <Button className={"rounded-lg"}>
            <Plus />
          </Button>
        </div>
      </div>
      <div className="h-3/5">
        <div className="space-y-2 p-4">
          {/* Message from left */}
          <div className="flex justify-start">
            <div className="bg-gray-300 text-black px-4 py-2 rounded-lg max-w-xs">
              Hello from the left!
            </div>
          </div>

          {/* Message from right */}
          <div className="flex justify-end">
            <div className="bg-black text-white px-4 py-2 rounded-lg max-w-xs">
              Hello from the right!
            </div>
          </div>

          {/* Message from left */}
          <div className="flex justify-start">
            <div className="bg-gray-300 text-black px-4 py-2 rounded-lg max-w-xs">
              Another message from the left!
            </div>
          </div>

          {/* Message from right */}
          <div className="flex justify-end">
            <div className="bg-black text-white px-4 py-2 rounded-lg max-w-xs">
              Another message from the right!
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-2 h-1/5">
        <Input placeholder="type your message" />
        <Button>
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default MessageSection;
