import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { InferResponseType,InferRequestType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.goals)["create-update"]["$put"]>;

type RequestType = InferRequestType<(typeof client.api.goals)["create-update"]["$put"]>["json"];

export const useUpdateCreateGoals = () => {
    const queryClient = useQueryClient();

   
        const mutation = useMutation<ResponseType, Error, RequestType>({
            mutationFn: async (json) => {
                const response = await client.api.goals["create-update"]["$put"]({
                    json
                });

                return await response.json();
            },
            onSuccess: () => {
                toast.success("Goals updated.");
                queryClient.invalidateQueries({ queryKey: ["goals"] });
                queryClient.invalidateQueries({ queryKey: ["goals"] });
            },
            onError: () => {
                toast.error("Failed to edit goals.");
            },
        });
        return mutation;
        
    
}