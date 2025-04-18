import React from 'react'
import { ChartContainer, ChartTooltip } from '../ui/chart'
import { BarChart } from 'lucide-react'
import { Bar } from 'recharts'

function Subscriptions() {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col gap-2'>
                <span>Subscriptions</span>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-2xl'>+2350</span>
                    <span className='text-gray-500'>+180.1% from last month</span>
                </div>
            </div>
            <div>
            {/* <ChartContainer /> */}
            </div>
        </div>
    )
}

export default Subscriptions
