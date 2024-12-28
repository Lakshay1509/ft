"use client"

import { AlertCircle, ChartArea, Database, UserPlus } from 'lucide-react'
import React from 'react'

const CardsLanding = () => {
  return (
    <div className="h-[60rem] lg:h-[28rem] w-full bg-[#301934] bg-dot-white/[0.2] relative   py-10 px-4">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#301934] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto'>
        <div className='w-full max-w-[300px] mx-auto h-[200px] bg-white rounded-lg p-6 hover:shadow-lg transition-shadow'>
          <div className='flex flex-col space-y-5'>
            <div>
              <ChartArea size={40} className='text-blue-500' />
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Interactive spending graphs</h1>
              <p className='text-sm'>Graphs provide dynamic, real-time visualizations of expenses, income, and savings trends.</p>
            </div>
          </div>
        </div>

        <div className='w-full max-w-[300px] mx-auto h-[200px] bg-white rounded-lg p-6 hover:shadow-lg transition-shadow md:translate-y-10'>
          <div className='flex flex-col space-y-5'>
            <div>
              <AlertCircle size={40} className='text-blue-500' />
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Categories based spendings</h1>
              <p className='text-sm'>Track your monthly budget allocations and spot spending patterns.</p>
            </div>
          </div>
        </div>

        <div className='w-full max-w-[300px] mx-auto h-[200px] bg-white rounded-lg p-6 hover:shadow-lg transition-shadow md:translate-y-20'>
          <div className='flex flex-col space-y-5'>
            <div>
              <Database size={40} className='text-blue-500' />
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Analysis for better savings</h1>
              <p className='text-sm'>Compare year-over-year financial performance with customizable chart views and filters.</p>
            </div>
          </div>
        </div>

        <div className='w-full max-w-[300px] mx-auto h-[200px] bg-white rounded-lg p-6 hover:shadow-lg transition-shadow md:translate-y-32'>
          <div className='flex flex-col space-y-5'>
            <div>
              <UserPlus size={40} className='text-blue-500' />
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Segregate accounts</h1>
              <p className='text-sm'>Set financial goals and monitor progress through interactive milestone tracking charts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsLanding