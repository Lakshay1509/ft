import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetGoals = (id?: string,month?:string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["goals", { id,month }],
    queryFn: async () => {
      const response = await client.api.goals[":id"][":month?"].$get({
        
        param: { id ,month},
      })

      if (!response.ok) throw new Error("Failed to fetch goals.");

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
