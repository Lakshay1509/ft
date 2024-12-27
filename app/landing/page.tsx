"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import React from "react";
import CardsLanding from "./cardslanding";
import {MoveRight } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { Button } from "@/components/ui/button"; 
import Banner2 from "./components/banner2";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Link from "next/link";




const Page = () => {

  const { isSignedIn } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  if (isSignedIn) {
    return null; // Return null while redirecting
  }



  
  return (

    

    <>
      <div className="overflow-hidden bg-[#301934]  ">
        <Navbar />

        <AuroraBackground className="bg-[#301934]">
  <Hero />
</AuroraBackground>
        <div className="w-full flex justify-center items-center font-primary">
        <Link href="/sign-in">
          <Button className="mb-4 text-[14px] sm:text-[15px] md:mt-4 lg:text-[20px]">
            Get Started
            <span className="ml-2 md:ml-3">
              <MoveRight size={20} className="h-5 w-5 md:h-6 md:w-6" />
            </span>
          </Button>
        </Link>
        </div>

        <div className="flex items-center justify-center ">
          <Image src="/hero_bg.svg" alt="hero" width={1000} height={1000} />
        </div>

        <div className="ml-[50px] mt-[100px] flex flex-col text-left font-primary text-[25px] font-bold text-white lg:text-[35px] ">
          <div>Take Charge of your financial</div>
          <div>destiny with our revolutionary</div>
          <div>
            <span
              className="font-normal italic"
              style={{
                background: "linear-gradient(90deg,  #3f51b5, #9c27b0)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              WalletWhiz
            </span>{" "}
            dashboard
          </div>
        </div>

        <CardsLanding />

        <Banner />

        <ContainerScroll titleComponent={<Header />}>
  <Footer />
</ContainerScroll>

        <Banner2 />
      </div>
    </>
  );
};

export default Page;
