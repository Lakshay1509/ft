import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { InferResponseType,InferRequestType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.goals)[":id"]["$patch"]>;

type RequestType = InferRequestType<(typeof client.api.goals)[":id"]["$patch"]>["json"];

export const useEditGoals = (id?: string) => {
    const queryClient = useQueryClient();

   
        const mutation = useMutation<ResponseType, Error, RequestType>({
            mutationFn: async (json) => {
                const response = await client.api.goals[":id"]["$patch"]({
                    json,
                    param: { id },
                });
                return await response.json();
            },
            onSuccess: () => {
                toast.success("Goals updated.");
                queryClient.invalidateQueries({ queryKey: ["goals", { id }] });
                queryClient.invalidateQueries({ queryKey: ["goals"] });
            },
            onError: () => {
                toast.error("Failed to edit goals.");
            },
        });
        return mutation;
        
    
}