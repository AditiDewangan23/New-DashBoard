import React from 'react'
import { Button } from '../ui/button'

function MoveGoal() {
    return (
        <div className='flex flex-col '>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-extrabold text-2xl'>Move Goal</span>
                <span className='text-gray-500'>+180.1% from last month</span>
            </div>
            <div></div>
            <div></div>
            <div className='flex  justify-center items-center p-3'><Button className={"w-full"}>Set Goal</Button></div>
        </div>
    )
}

export default MoveGoal
