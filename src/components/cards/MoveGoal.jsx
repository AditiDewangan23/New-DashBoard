import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import { BarChartComponent } from '../ui/BarChart'

function MoveGoal() {
    return (
        <div className='flex flex-col p-5 gap-3'>
            <div className='flex flex-col'>
                <span className='font-bold text-xl'>Move Goal</span>
                <span className='text-gray-500'>+180.1% from last month</span>
            </div>

            <div className='flex justify-between'>

                <Button className={"flex justify-center items-center rounded-full bg-gray-200"}><Plus /></Button>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-4xl'>350</span>
                    <span className='text-gray-500'>Calories/day</span>
                </div>
                <Button className={"flex justify-center items-center rounded-full bg-gray-200"}><Minus /></Button>

            </div>

            <BarChartComponent />

            <Button className={"w-full"}>Set Goal</Button>
        </div>
    )
}

export default MoveGoal
