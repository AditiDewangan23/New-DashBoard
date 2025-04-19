import React from 'react'

import { Bar } from 'recharts'
import { Component } from '../ui/ChartConfig'


function Subscriptions() {
    return (
        <div className='flex flex-col w-full p-7'>
            <div className='flex flex-col gap-2'>
                <span>Subscriptions</span>
                <div className='flex flex-col'>
                    <span className='font-extrabold text-2xl'>+2350</span>
                    <span className='text-gray-500'>+180.1% from last month</span>
                </div>
            </div>
            <div>
                <Component />
            </div>
        </div>
    )
}

export default Subscriptions
