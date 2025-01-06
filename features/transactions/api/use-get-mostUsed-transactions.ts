import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";


export const useGetTransaction = () => {
  const query = useQuery({
    queryKey: ["transaction",],
    queryFn: async () => {
      const response = await client.api.transactions["most-used"].$get();

      if (!response.ok) throw new Error("Failed to fetch transaction.");

      const mostUsedAccount  = (await response.json()).mostUsedAccount;
      const mostUsedCategory = (await response.json()).mostUsedCategory;
        
      return {mostUsedAccount, mostUsedCategory};

      
    },
  });

  return query;
};
