import React from 'react'
import { Avatar } from '../ui/avatar'
import { DropdownMenu } from '../ui/dropdown-menu'

function TeamMembers() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-extrabold text-2xl'>Team Members</span>
                <span className='text-gray-500'>Invite your team members to collaborate.</span>
            </div>
            <div className='flex gap-3'>
                <div><Avatar /></div>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-2xl'>Sofia Davis</span>
                    <span className='text-gray-500'>m@example.com</span>
                </div>
                <div> <DropdownMenu /></div>
            </div>
            <div className='flex flex-1'>
                <div><Avatar /></div>
                <span className='font-extrabold text-2xl'>Sofia Davis</span>
                <span className='text-gray-500'>m@example.com</span>
                <div> <DropdownMenu /></div>
            </div>
            <div className='flex flex-1'>
                <div><Avatar /></div>
                <span className='font-extrabold text-2xl'>Sofia Davis</span>
                <span className='text-gray-500'>m@example.com</span>
                <div> <DropdownMenu /></div>
            </div>


        </div>
    )
}

export default TeamMembers
