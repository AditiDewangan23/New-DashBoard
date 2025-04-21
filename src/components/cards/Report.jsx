import React from 'react'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ComboboxDemo } from '../ui/ComboBox'

function Report() {
    return (
        <div className='flex flex-col gap-2 p-5'>
            {/* heading */}
            <div className="flex flex-col h-1/5">
                <span className="font-bold text-xl">Report an issue</span>
                <span className="text-gray-500 text-sm">
                    What area are you having problems with?
                </span>
            </div>

            <div className='flex justify-between gap-2 w-full'>
                <div className='flex flex-col'>
                    <div className='text-sm'>Area</div>
                    <div><ComboboxDemo /></div>
                </div>
                <div className='flex flex-col text-sm'>
                    <div>Security Level</div>
                    <div><ComboboxDemo /></div>
                </div>
            </div>

            <div className='flex flex-col text-sm'>
                <div>Security Level</div>
                <Input placeholder={"I need help with"} />
            </div>

            <div className='flex flex-col text-sm'>
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
