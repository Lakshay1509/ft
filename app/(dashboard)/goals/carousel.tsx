"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetTransactionByCategory } from "@/features/transactions/api/use-get-transaction-category";
import {
  convertAmountFromMilliunits,
  formatCurrency,
  formatDate,
} from "@/lib/utils";
import Amount from "./amount";

type CarouselPageProps = {
  id: string;
  name: string;
};

const CarouselPage = ({ id, name }: CarouselPageProps) => {
  const TransactionItem = useGetTransactionByCategory(id).data;

  if (TransactionItem?.length === 0) {
    return null;
  }

  return (
    <>
      <Carousel className="mx-auto my-7 w-[350px] rounded-lg bg-gradient-to-r from-white to-gray-50 py-2 shadow-lg md:w-[500px] lg:w-[800px]">
        <CarouselPrevious />

        <CarouselContent>
          {TransactionItem?.map((item, index) => (
            <CarouselItem
              key={index}
              className="rounded-md bg-white px-10 py-6 text-gray-700 shadow"
            >
              <h1 className="mb-3 font-bold text-gray-800 md:text-2xl">
                {name}
              </h1>
              <p className="mb-3 text-sm text-gray-500">
                {formatDate(item.month)}
              </p>
              <div className="flex items-center justify-between text-[12px] font-bold text-gray-600 md:text-[15px]">
                <Amount id={id} month={item.month} />
                <p className="text-red-600">
                  Spent Amount :{" "}
                  {formatCurrency(convertAmountFromMilliunits(item.spent))}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CarouselPage;
