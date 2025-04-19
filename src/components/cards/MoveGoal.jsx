import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import { Component } from '../ui/BarChart'
// import { Component } from '../ui/ChartConfig'

function MoveGoal() {
    return (
        <div className='flex flex-col p-7 gap-5'>
            <div className='flex flex-col'>
                <span className='font-extrabold text-2xl'>Move Goal</span>
                <span className='text-gray-500'>+180.1% from last month</span>
            </div>

            <div className='flex justify-between'>
                
                <Button className={"flex justify-center items-center rounded-full bg-gray-200"}><Plus /></Button>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-5xl'>350</span>
                    <span className='text-gray-500'>Calories/day</span>
                </div>
                <Button className={"flex justify-center items-center rounded-full bg-gray-200"}><Minus /></Button>
                
            </div>

            <div>
                <Component />
            </div>

            <div className='flex  justify-center items-center p-3'><Button className={"w-full"}>Set Goal</Button></div>
        </div>
    )
}

export default MoveGoal
