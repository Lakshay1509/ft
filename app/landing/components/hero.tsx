import React from 'react'

const Hero = () => {
  return (
    <div className="font-primary flex flex-col items-center justify-center space-y-3 md:space-y-5 text-white px-4 md:px-0">
    <div className="flex flex-col items-center justify-center space-y-2 md:space-y-3 text-[30px]   md:text-[40px] font-bold">
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
        WalletWhiz <span
          className="italic"
          style={{
            background: "linear-gradient(90deg, #3f51b5, #9c27b0)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >finance managment!</span>
      </div>
    </div>
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] text-center px-4 md:px-0">
      <p className="text-xs sm:text-sm md:text-base">
        From intuitive budgeting and forecasting to real time time
        transaction tracking. Our powerful tool empowers you to make
        informed success.
      </p>
    </div>
    
  </div>
  )
}

export default Hero