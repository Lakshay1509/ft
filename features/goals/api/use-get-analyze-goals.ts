
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { convertAmountFromMilliunits } from "@/lib/utils";

export const useGetAnalyzeGoals = () => {
  const query = useQuery({

    queryKey: ["goals"],
    queryFn: async () => {
      const response = await client.api.goals.$get()

      if (!response.ok) throw new Error("Failed to fetch goals.");

      const {data}  = await response.json();

      return data.map((goal) => ({
        ...goal,
        limit : convertAmountFromMilliunits(goal.limit),

      }));
    },
  });

  return query;
};
