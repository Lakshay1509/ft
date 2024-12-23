import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";


export const useGetTransactionByCategory = (categoryId: string) => {
  const query = useQuery({
    enabled: !!categoryId,
    queryKey: ["transaction", { categoryId }],
    queryFn: async () => {
      const response = await client.api.transactions["category"][":categoryId"].$get({
        param : {categoryId}
      })

      if (!response.ok) throw new Error("Failed to fetch transaction.");

        const { data } = await response.json();

        return data;
    },
  });

  return query;
};
