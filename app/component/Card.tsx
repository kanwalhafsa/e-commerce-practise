
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='flex justify-between mt-28 px-10 lg:px-16'>
        <div>
          <span className='text-lg font-semibold'>Best of Air Max</span>
        </div>

        <div className='flex items-center justify-between'>
          <span>shop</span>
          <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
            <ChevronLeft />
          </div>
          <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
            <ChevronRight />
          </div>
        </div>
      </div>

      {/* Displaying the shoe images in one row */}
      <div className='flex justify-start gap-8 mt-10 px-8'>
        {/* First shoe */}
        <div className='w-72'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src="/images/shoe1.png"
              alt=''
              width={300}
              height={300}
            />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 13 995</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2 '>{`Women's`} Shoes</span>
          </div>
        </div>

        {/* Second shoe */}
        <div className='w-72'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src="/images/shoe2.png"
              alt=''
              width={300}
              height={300}
            />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 13 995</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2 '>{`Men's`} Shoes</span>
          </div>
        </div>

        {/* Third shoe */}
        <div className='w-72'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src="/images/shoe3.png"
              alt=''
              width={300}
              height={300}
            />
          </div>
          <div className='flex justify-between items-center px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 16 996</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2 '>{`Women's`} Shoes</span>
          </div>
        </div>

        {/* Fourth shoe */}
        <div className='w-72'>
          <div className='w-full h-72 mb-6 overflow-hidden'>
            <Image
              className='hover:scale-105 duration-300'
              src="/images/shoe4.png"
              alt=''
              width={300}
              height={300}
            />
          </div>
          <div className='flex justify-between px-2 pt-2'>
            <div className='text-base'>Nike Air Max Pulse</div>
            <div className='text'>₹ 16 996</div>
          </div>
          <div>
            <span className='text-sm text-gray-700 px-2 '>{`Men's`} Shoes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

