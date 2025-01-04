import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  value?: Date;
  onChange?: (date: Date | null) => void;
  disabled?: boolean;
};

export const CustomDatePicker: React.FC<Props> = ({
  value,
  onChange,
  disabled,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  return (
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onChange?.(date);
        }}
        disabled={disabled}
        placeholderText="Pick a date"
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   disabled:bg-gray-100 disabled:cursor-not-allowed
                   hover:border-gray-400 transition-colors duration-200"
      />
    </div>
  );
};
