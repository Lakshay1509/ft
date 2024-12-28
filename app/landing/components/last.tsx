import { Bug, CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Last = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-3 bg-black text-white text-sm font-primary">
          
    <div className="w-full bg-black text-white text-sm font-primary flex justify-center items-center p-3">
      <div className="w-full md:w-1/4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="flex justify-center items-center gap-2 hover:text-slate-300 cursor-pointer">
        <span><Bug/></span><p>Report a bug</p>
        </div>
        <div className="flex justify-center items-center gap-2 hover:text-slate-300 cursor-pointer">
        <span><CirclePlus/></span><p>Request a feature</p>
        </div>

      </div>
    </div>
    
    <div className="flex flex-col md:flex-row justify-center items-center text-slate-400 text-sm border-t border-slate-400 pt-2 space-y-2 md:space-y-0">
      <p>Maintained and Developed by</p>
      <span className='md:ml-2'>
        <Link href="https://github.com/Lakshay1509">
          <FaGithub size="18px" className="hover:text-slate-300"/>
        </Link>
      </span>
    </div>
    </div>
  )
}

export default Last