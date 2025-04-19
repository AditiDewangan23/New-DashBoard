import React from 'react'
import { Table } from '../ui/table'
import { Apple, CreditCard } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function PaymentMethod() {
  return (
    <div className='flex flex-col w-full p-7 gap-3'>
      <div className="flex flex-col h-1/5">
        <span className="font-extrabold text-xl">Payment Method</span>
        <span className="text-gray-500 text-sm">
          Add a new payment method to your account.
        </span>
      </div>

      <div className='flex gap-5 w-full'>
        <div className='flex flex-col gap-2 justify-center items-center h-16 w-full border border-black rounded-lg'>
          <div><CreditCard /></div>
          <div className='font-bold'>Card</div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center h-16 w-full border border-black rounded-lg'>
          <div><img src='paypal.svg' /></div>
          <div className='font-bold'>Paypal</div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center h-16 w-full border border-black rounded-lg'>
          <div><img src='apple.svg' /></div>
          <div className='font-bold'>Apple</div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='font-bold'>Name</div>
        <Input placeholder={"First last"} />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-bold'>City</div>
        <Input />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-bold'>Card Number</div>
        <Input />
      </div>

      <div className='flex gap-2 '>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>Expire</div>
          <Input placeholder={"First last"} />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>Year</div>
          <Input />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>CVC</div>
          <Input />
        </div>
      </div>

      <Button className={"w-full"}>Contiue</Button>
    </div>
  )
}

export default PaymentMethod
