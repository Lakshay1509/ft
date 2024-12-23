"use client";

import { useGetCategories } from "@/features/categories/api/use-get-categories";
import CarouselPage from "./carousel";
import { useEditGoal } from "@/features/goals/hooks/edit-goals";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const GoalsPage = () => {
  const data = useGetCategories().data;
  const newGoal = useEditGoal();

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-x-hidden">
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

        <div className="my-5 text-center text-lg font-bold text-gray-500">
          Some categories might be missing becuase of no transactions.
        </div>
      </div>
    </>
  );
};

export default GoalsPage;
