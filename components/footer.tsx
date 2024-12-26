import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-5">
          <img src="./footer.png" className="w-[200px] mb-[10px]" />
          <div className="flex justify-center items-center text-slate-400 text-sm border-t border-slate-400 pt-2">
          <p >Maintained and Developed  by </p>
          <span className='ml-2'>
            <Link href="https://github.com/Lakshay1509">
            <FaGithub size="18px"/>
            </Link>
            </span>
          </div>
        </div>
  )
}

export default Footer