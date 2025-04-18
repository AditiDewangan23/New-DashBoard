import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import { AvatarFallback, AvatarImage } from "../../ui/avatar";

function SaleCard({name, email, amount}) {
  return (
    <div className="flex h-16 gap-5">
      <Avatar>
        <AvatarImage
          className="rounded-full h-10"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className=" flex flex-col flex-1">
        <span className="font-bold text-black">{name}</span>
        <span className="text-gray-500">{email}</span>
      </div>
      <div className="font-extrabold">{amount}</div>
    </div>
  );
}

export default SaleCard;
