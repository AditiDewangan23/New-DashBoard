
import React from 'react'
import { Input } from '../ui/input'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ComboboxDemo } from '../ui/ComboBox'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Document() {
  return (
    <div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-col ">
          <span className="font-bold text-xl">Share this document</span>
          <span className="text-gray-500">
            Anyone with the link can view this document.
          </span>
        </div>
        <div className='flex gap-3'>
          <Input placeholder={"http://example.com/link/to/document"} />
          <Button>Copy Link</Button>
        </div>
        <hr />
        <div className="flex gap-2">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>
          <div className="flex flex-col w-full justify-between">
            <span className="font-bold ">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <div><ComboboxDemo /></div>
        </div>
        <div className="flex gap-3">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>
          <div className="flex flex-col w-full justify-between">
            <span className="font-bold ">Sofia Davis</span>
            <span className="text-gray-500">m@example.com</span>
          </div>
          <div><ComboboxDemo /></div>
        </div>
        <div className='flex gap-3'>
          <div><Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>
          <div className='flex flex-col w-full justify-between'>
            <span className='font-bold '>Sofia Davis</span>
            <span className='text-gray-500'>m@example.com</span>
          </div>
          <div><ComboboxDemo /></div>
        </div>
      </div>

    </div>
  )
}

export default Document
