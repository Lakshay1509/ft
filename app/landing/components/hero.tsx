import { FlipWords } from '@/components/ui/flip-words'
import React from 'react'

const Hero = () => {

  const words = [
    "budgeting",
    "planning",
    "tracking",
    "saving",


  ];

  

  return (


    
    <div className="font-primary flex flex-col items-center justify-center mt-[150px]  md:mt-[180px] space-y-3 md:space-y-5 text-white px-4 md:px-0">
    <div className="flex flex-col items-center justify-center space-y-2 mb-[30px] md:space-y-3 text-[30px]   md:text-[40px] font-bold">
      <div className="text-center">
        <span
          className="italic"
          style={{
            background: "linear-gradient(90deg,  #3f51b5, #9c27b0)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Take control
        </span>{" "}
        of your finances with
      </div>
      <div className="text-center">
        Walletly 
        <FlipWords words={words} className='text-white italic' duration={2000}>
          </FlipWords>
         
      </div>
    </div>
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-center px-4 md:px-0 ">
      <p className="text-xs mb-[50px] sm:text-sm md:text-base">
        From intuitive budgeting and forecasting to real time time
        transaction tracking. Our powerful tool empowers you to make
        informed success.
      </p>
    </div>
    
  </div>
  )
}

export default Hero