"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { useGetGoals } from "@/features/goals/api/use-get-goals";

type CarouselPageProps = {
    id:string;
    name:string
};

const CarouselPage =({id,name}:CarouselPageProps) =>{

    const data = useGetGoals(id).data;
   

    if(data?.length===0){
        return(
            <div>No goals found</div>
        )
    }

    return(

        <Carousel className="mx-auto w-[800px] rounded-lg shadow-lg bg-gradient-to-r from-white to-gray-50 py-2 my-7">
        <CarouselPrevious />

        <CarouselContent>
        {data?.map((goal) => (
          <CarouselItem className="bg-white py-6 px-10 rounded-md shadow text-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              {name}
            </h1>
            <p className="text-sm text-gray-500 mb-3">{goal.month}</p>
            <div className="flex items-center justify-between text-gray-600 text-sm font-bold">
              <p >Limit Amount : {goal.amount}</p>
              <p>Current Amount : $500</p>
              <p>Remaining Amount : $500</p>
            </div>
          </CarouselItem>
           ))}
        </CarouselContent>
       
        <CarouselNext />
      </Carousel>
    )




}

export default CarouselPage;