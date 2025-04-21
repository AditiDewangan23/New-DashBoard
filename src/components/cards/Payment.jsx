import { Apple, CreditCard } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Payment() {
    return (
        <div>
            <div className="flex flex-col gap-4 p-5 ">
                <div className="flex flex-col ">
                    <span className="font-bold text-xl">Payments</span>
                    <span className="text-gray-500">
                        Manage your payments.
                    </span>
                </div>
                <div className='flex gap-5'>
                    <Input placeholder={"http://example.com/link/to/document"} />
                    <Button>Copy Link</Button>
                </div>
                <hr />
                <div className="flex gap-3">
                    <div><Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold ">Sofia Davis</span>
                        <span className="text-gray-500">m@example.com</span>
                    </div>
                    {/* <div> <DropdownMenu /></div> */}
                </div>
                <div className="flex gap-3">
                    <div><Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold ">Sofia Davis</span>
                        <span className="text-gray-500">m@example.com</span>
                    </div>
                    {/* <div> <DropdownMenu /></div> */}
                </div>
                <div className='flex gap-3'>
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold '>Sofia Davis</span>
                        <span className='text-gray-500'>m@example.com</span>
                    </div>
                    {/* <div> <DropdownMenu /></div> */}
                </div>
            </div>

        </div>
    )
}

export default Payment
