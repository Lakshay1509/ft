import CurrencyInput from "react-currency-input-field";
import { Banknote, CreditCard } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

type AmountInputProps = {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const AmountInput = ({
  value,
  onChange,
  placeholder = "Enter amount",
  disabled,
}: AmountInputProps) => {
  const [mode, setMode] = React.useState<'income' | 'expense'>('expense');

  const handleValueChange = (val: string | undefined) => {
    if (!val) {
      onChange(undefined);
      return;
    }
    const numericValue = parseFloat(val);
    const finalValue = mode === 'expense' ? (-1 * numericValue).toString() : val;
    onChange(finalValue);
  };

  const displayValue = value ? Math.abs(parseFloat(value)).toString() : '';

  return (
    <div className="space-y-2">
      <div className="flex rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setMode('income')}
          className={cn(
            "flex-1 px-4 py-2 flex items-center justify-center gap-2",
            mode === 'income' 
              ? "bg-emerald-500 text-white" 
              : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          <Banknote className="size-4" />
          Income
        </button>
        <button
          type="button"
          onClick={() => setMode('expense')}
          className={cn(
            "flex-1 px-4 py-2 flex items-center justify-center gap-2",
            mode === 'expense' 
              ? "bg-rose-500 text-white" 
              : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          <CreditCard className="size-4" />
          Expense
        </button>
      </div>

      <CurrencyInput
        prefix="₹"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          mode === 'income' && "border-emerald-500",
          mode === 'expense' && "border-rose-500"
        )}
        placeholder={placeholder}
        value={displayValue}
        decimalScale={2}
        decimalsLimit={2}
        onValueChange={handleValueChange}
        disabled={disabled}
      />

      <p className="text-xs text-muted-foreground">
        {mode === 'income' && "Adding as income"}
        {mode === 'expense' && "Adding as expense"}
      </p>
    </div>
  );
};
