import React from 'react'
import { Table } from '../ui/table'
import { Apple, CreditCard } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function PaymentMethod() {
  return (
    <div className='flex flex-col w-full p-5 gap-3'>
      <div className="flex flex-col h-1/5">
        <span className="font-bold text-xl">Payment Method</span>
        <span className="text-gray-500 text-sm">
          Add a new payment method to your account.
        </span>
      </div>

      <div className='flex gap-2 w-full'>
        <div className='flex flex-col gap-2 justify-center items-center h-14 w-full border border-black rounded-lg'>
          <div><CreditCard /></div>
          <div className='font-bold text-sm'>Card</div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center h-14 w-full border border-black rounded-lg'>
          <div><img src='paypal.svg' /></div>
          <div className='font-bold text-sm'>Paypal</div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center h-14 w-full border border-black rounded-lg'>
          <div><img src='apple.svg' /></div>
          <div className='font-bold text-sm'>Apple</div>
        </div>
      </div>

      <div className='flex flex-col text-sm '>
        <div className='font-bold text-sm'>Name</div>
        <Input placeholder={"First last"} />
      </div>
      <div className='flex flex-col text-sm '>
        <div className='font-bold text-sm'>City</div>
        <Input />
      </div>
      <div className='flex flex-col text-sm '>
        <div className='font-bold text-sm'>Card Number</div>
        <Input />
      </div>

      {/* <div className='flex gap-2 '>
        <div className='flex flex-col '>
          <div className='font-bold text-sm'>Expire</div>
          <Input placeholder={"First last"} />
        </div>
        <div className='flex flex-col '>
          <div className='font-bold text-sm'>Year</div>
          <Input />
        </div>
        <div className='flex flex-col '>
          <div className='font-bold text-sm'>CVC</div>
          <Input />
        </div>
      </div> */}

      <Button className={"w-full"}>Contiue</Button>
    </div>
  )
}

export default PaymentMethod
