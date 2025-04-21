import React from 'react'
import { LineChartComp } from '../ui/LineChart'

function TotalRevenue() {
  return (
    <div className='flex flex-col w-full p-5 h-auto'>
      <div className='flex flex-col gap-2'>
        <span className='font-bold'>Total Revenue</span>
        <div className='flex flex-col'>
          <span className='font-extrabold text-2xl'>$15,231.89</span>
          <span className='text-gray-500 text-sm'>+20.1% from last month</span>
        </div>
        <LineChartComp />
      </div>
    </div>
  )
}

export default TotalRevenue
