import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { convertAmountFromMilliunits } from "@/lib/utils";

export const useGetTransactionByMonth = () => {
  const query = useQuery({

    queryKey: ["transaction"],
    queryFn: async () => {
      const response = await client.api.transactions["current-month"].$get();

      if (!response.ok) throw new Error("Failed to fetch transaction.");

      const { data } = await response.json();

       return data.map((transaction) => ({
        ...transaction,
        amount: convertAmountFromMilliunits(transaction.amount),
      }));
    },
  });

  return query;
};
