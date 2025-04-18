import React from 'react'
import { Component } from '../ui/Chart'
// import { Component } from '../ui/ChartConfig'

function TotalRevenue() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col gap-2'>
        <span>Total Revenue</span>
        <div className='flex flex-col'>
          <span className='font-extrabold text-2xl'>$15,231.89</span>
          <span className='text-gray-500'>+20.1% from last month</span>
        </div>
      </div>
      <div><Component /></div>
    </div>
  )
}

export default TotalRevenue
