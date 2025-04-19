import React from 'react'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ComboboxDemo } from '../ui/ComboBox'

function Report() {
    return (
        <div className='flex flex-col gap-5 p-7'>
            {/* heading */}
            <div className="flex flex-col h-1/5">
                <span className="font-extrabold text-2xl">Report an issue</span>
                <span className="text-gray-500">
                    What area are you having problems with?
                </span>
            </div>

            <div className='flex justify-between gap-2 w-full'>
                <div className='flex flex-col'>
                    <div>Area</div>
                    <div><ComboboxDemo /></div>
                </div>
                <div className='flex flex-col'>
                    <div>Security Level</div>
                    <div><ComboboxDemo /></div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div>Security Level</div>
                <Input placeholder={"I ned help with"} />
            </div>

            <div className='flex flex-col'>
                <div>Description</div>
                <Input placeholder={"Please inclue all the imformation relevent to your issue"} />
            </div>

            <div className='flex justify-between'>
                <Button className={"bg-gray-400"}>cancle</Button>
                <Button>submit</Button>
            </div>
        </div>
    )
}

export default Report
