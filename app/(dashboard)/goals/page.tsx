"use client"

import { useGetCategories } from "@/features/categories/api/use-get-categories";
import CarouselPage from "./carousel";


const GoalsPage = () => {

    const data = useGetCategories().data;

  return (
    <>
     
        {data?.map((category) => (
            <div key={category.id}>
               <CarouselPage id={category.id} name={category.name} />
            </div>
        ))}
      
    </>
  );
};

export default GoalsPage;
