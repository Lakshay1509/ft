import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useEditGoal } from "../hooks/edit-goals"
import GoalsForm from "./edit-goals-form"
import { useGetCategories } from "@/features/categories/api/use-get-categories"
import { useCreateCategory } from "@/features/categories/api/use-create-category"
import { useUpdateCreateGoals } from "../api/use-update-create-goals"
import {z} from "zod"


export const NewGoalSheet = () => {

    const {isOpen,onClose} =  useEditGoal()
    const categoryMutation = useCreateCategory();
    const editMutation =  useUpdateCreateGoals();
    const onCreateCategory = (name: string) => categoryMutation.mutate({ name })
    const categoryQuery = useGetCategories();
    const categoryOptions = (categoryQuery.data ?? []).map((category) => ({
        label: category.name,
        value: category.id,
      }));

    const formSchema = z.object({
        categoryId: z.string(),
        amount: z.number(),
      });

      type FormValues =  z.infer<typeof formSchema>;

    const onSubmit = (values:FormValues)=>{
        editMutation.mutate(values,{
            onSuccess:()=>{
                onClose()
            }
        })
    }


    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>New Goal</SheetTitle>
  
            <SheetDescription>
              Create a new goal to track your progress.
            </SheetDescription>
          </SheetHeader>
  
          <GoalsForm
          categoryOptions={categoryOptions}
          onCreateCategory={onCreateCategory}
          onSubmit={onSubmit}
            disabled={false}

           
          />
        </SheetContent>
      </Sheet>
    )


}

