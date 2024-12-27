import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col justify-center px-[20px]  md:px-[50px] lg:flex-row">
      <div className="flex w-full flex-col items-start justify-center font-primary text-white lg:w-1/2">
        <div className="text-[25px] font-bold sm:text-[30px] lg:text-[40px]">
          <div className="flex items-center justify-center">
            <h1>Explore</h1>
            <span
              className="ml-3 italic"
              style={{
                background: "linear-gradient(90deg,  #3f51b5, #9c27b0)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              WalletWhiz
            </span>
          </div>
          <h1>managment</h1>
          <h1
            className="italic"
            style={{
              background: "linear-gradient(90deg,  #3f51b5, #9c27b0)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            solutions
          </h1>
        </div>

        <div className="mt-5 flex w-full flex-col items-start justify-center space-y-6 sm:w-[80%] md:w-[70%]">
          <div className="w-full  rounded-2xl bg-[#9966CC] p-4 text-white">
            <h1 className="font-bold">Visualize Your Savings Journey</h1>
            <p className="text-sm">
              Gain a clear, visual representation of your savings journey
            </p>
          </div>
          <div className="w-full rounded-2xl border-[1px] border-white p-4">
            <p className="font-bold">Mobile accessibilty for control</p>
          </div>
          <div className="w-full rounded-2xl border-[1px] border-white p-4">
            <p className="font-bold">Statistical analysis & managment</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <Image src="/banner.png" alt="banner" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Banner;
