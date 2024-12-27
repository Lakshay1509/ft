"use client";

import { Button } from "@/components/ui/button";
import {  MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner2 = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes border-rotation {
          to {
            --border-angle: 360deg;
          }
        }
        .animate-border {
          animation: border-rotation 4s linear infinite;
        `}</style>
      <section className="mb-[40px] flex justify-center p-4 sm:mb-[100px] sm:p-10">
        <div className="animate-border w-full rounded-2xl border-4 border-transparent [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box]">
          <div className="flex w-full p-1">
            <div className="relative flex h-auto min-h-[28rem] w-full flex-col items-center justify-center bg-[#301934] py-8 bg-dot-white/[0.2] sm:h-[25rem] sm:flex-row sm:py-0">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#301934] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

              <div className="z-10 flex w-full flex-col px-4 text-center sm:w-[50%] sm:px-0 sm:text-left">
                <div className="font-primary text-[28px] font-bold text-white sm:text-[35px] 
                -ml-[5px]">
                  <h1>Transform your financial</h1>
                  <div className="flex flex-row items-center gap-1">
                    <h1 className="whitespace-nowrap">future with</h1>
                    <span
                      className="font-normal italic"
                      style={{
                        background: "linear-gradient(90deg,  #3f51b5, #9c27b0)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      WalletWhiz
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex justify-center sm:justify-start">
                <Link href="/">
                  <Button className="rounded-full text-[16px] sm:text-[20px] font-primary">
                    Get Started
                    <span className="ml-3">
                      <MoveRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                  </Button>
                  </Link>
                </div>
              </div>

              <div className="z-10 mt-8 flex w-full items-center justify-center sm:mt-0 sm:w-[30%]">
                <Image
                  src="/banner3.png"
                  alt="hero"
                  width={400}
                  height={400}
                  className="h-auto w-[250px] sm:w-[400px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner2;
