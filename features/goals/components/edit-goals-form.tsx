import { AmountInputGoals } from "@/app/(dashboard)/goals/amount-input";
import { AmountInput } from "@/components/amount-input";
import { Select } from "@/components/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { insertGoalSchema } from "@/db/schema";
import { convertAmountToMilliunits } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  amount: z.string(),
  categoryId: z.string(),
});

const apiSchema = insertGoalSchema.pick({
  amount: true,
  categoryId: true,
});

type FormValues = z.infer<typeof formSchema>;
type ApiFormValues = z.infer<typeof apiSchema>;

type GoalsFormProps = {
  onSubmit: (values: ApiFormValues) => void;
  disabled?: boolean;
  categoryOptions: { label: string; value: string }[];
  onCreateCategory: (name: string) => void;
};

const GoalsForm = ({ onSubmit, disabled, categoryOptions,onCreateCategory }: GoalsFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (values: FormValues) => {
    const amount = parseFloat(values.amount);
    const amountInMilliunits = convertAmountToMilliunits(amount);

    onSubmit({
      ...values,
      amount: amountInMilliunits,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        autoCapitalize="off"
        autoComplete="off"
        className="space-y-4 pt-4"
      >
        <FormField
          name="categoryId"
          control={form.control}
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>

              <FormControl>
                <Select
                  placeholder="Select a category"
                  options={categoryOptions}
                  onCreate={onCreateCategory}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="amount"
          control={form.control}
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>

              <FormControl>
                <AmountInputGoals
                  {...field}
                  disabled={disabled}
                  placeholder="0.00"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
         Submit
        </Button> 
      </form>

      <p className="text-gray-600 text-sm">The limits will be set for the current month.</p>
    </Form>
  );
};

export default GoalsForm;
