"use client";

import { useGetCategories } from "@/features/categories/api/use-get-categories";
import CarouselPage from "./carousel";
import { useEditGoal } from "@/features/goals/hooks/edit-goals";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import MonthPage from "./month-page";

const GoalsPage = () => {
  const data = useGetCategories().data;
  const newGoal = useEditGoal();

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-x-hidden">
        <div className="my-[20px] text-xl font-bold text-white">
          Monthly Goals
        </div>
        <div className="mb-[40px] grid w-[280px] grid-cols-1 items-center gap-4 text-2xl text-white sm:grid-cols-2 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
          {data?.map((category) => (
            <div key={category.id}>
              <MonthPage id={category.id} name={category.name} />
            </div>
          ))}
        </div>
        <div className="mt-[15px] flex w-[280px] justify-end md:w-[500px] lg:w-[800px]">
          <Button
            size="sm"
            onClick={newGoal.onOpen}
            className={cn("bg-blue-500 text-white")}
          >
            <Plus className="mr-2 size-4" /> Add new
          </Button>
        </div>

        {data?.map((category) => (
          <div key={category.id}>
            <CarouselPage id={category.id} name={category.name} />
          </div>
        ))}

        <div className="my-5 text-center text-sm font-bold text-gray-500">
          Some categories might be missing becuase of no spent transactions.
        </div>
      </div>
    </>
  );
};

export default GoalsPage;
