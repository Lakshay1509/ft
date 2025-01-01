import { Cover } from '@/components/ui/cover'
import React from 'react'

const CSV = () => {
  return (
    <div className='font-primary mt-[100px] md:mt-[220px]'>
    <div className='w-full flex flex-col md:flex-row justify-center items-center '>

      <h1 className='text-[30px] md:text-[35px] text-white font-bold mr-2'>Upload transactions </h1>
      <Cover className='text-[30px] md:text-[35px] font-bold text-white'>

        <h1 >with one click</h1>
        
      </Cover>
      
    </div>

    <h1 className='text-[30px] md:text-[35px] text-center text-white font-bold'>in CSV format</h1>
    </div>
  )
}

export default CSV