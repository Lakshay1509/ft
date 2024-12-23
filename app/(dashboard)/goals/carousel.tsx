"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import { useGetTransactionByCategory } from "@/features/transactions/api/use-get-transaction-category";
import { convertAmountFromMilliunits,formatCurrency, formatDate } from "@/lib/utils";
import Amount from "./amount";

type CarouselPageProps = {
    id:string;
    name:string
};



const CarouselPage =({id,name}:CarouselPageProps) =>{

    
    
    const TransactionItem = useGetTransactionByCategory(id).data;

    if(TransactionItem?.length===0){
        return(
           null
        )
    }

    return(

      <>

        <Carousel className="mx-auto w-[280px] md:w-[500px] lg:w-[800px] rounded-lg shadow-lg bg-gradient-to-r from-white to-gray-50 py-2 my-7">
        <CarouselPrevious />

        <CarouselContent>


          {TransactionItem?.map((item,index) => (
            <CarouselItem key={index} className="bg-white py-6 px-10 rounded-md shadow text-gray-700">
              <h1 className="md:text-2xl font-bold text-gray-800 mb-3">
              {name}
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {formatDate(item.month)}
            </p>
            <div className="flex items-center justify-between text-gray-600 text-[12px] md:text-[15px] font-bold">
             <Amount id={id} month={item.month}/>
              <p>Spent Amount : {formatCurrency(convertAmountFromMilliunits
              (item.spent))}</p>
            </div>

            </CarouselItem>
          ))}


        
        </CarouselContent>
       
        <CarouselNext />
      </Carousel>

      

      </>
    )




}

export default CarouselPage;