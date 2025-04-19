import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComboboxDemo } from '../ui/ComboBox';



function TeamMembers() {
  return (
    <div className="flex flex-col gap-4 p-7">

      <div className="flex flex-col">
        <span className="font-bold text-xl">Team Members</span>
        <span className="text-gray-500">
          Invite your team members to collaborate.
        </span>
      </div>

      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className='flex justify-between w-full'>
          <div className="flex flex-col">
            <span className="font-bold">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <ComboboxDemo />
        </div>

      </div>

      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className='flex justify-between w-full'>
          <div className="flex flex-col">
            <span className="font-bold">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <ComboboxDemo />
        </div>
      </div>

      <div className='flex gap-3'>
        <div><Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar></div>

        <div className='flex justify-between w-full'>
          <div className="flex flex-col">
            <span className="font-bold">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <ComboboxDemo />
        </div>
      </div>
    </div>
  );
}

export default TeamMembers
