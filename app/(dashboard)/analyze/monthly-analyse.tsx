import { formatCurrency } from "@/lib/utils";
import Limit_name from "./limit-name";

type MonthlyAnalysisCardProps = {
  analysis: {
    categoryId: string;
    avg_daily_spent: number;
    total_spent: number;
    monthly_limit: number;
    daily_saving_suggestion: number;
    savings_needed: number;
  }[];
  monthly: boolean;
};

const MonthlyAnalysisCard = ({
  analysis,
  monthly,
}: MonthlyAnalysisCardProps) => {
  return (
    <div className="space-y-6">
      {analysis.map((category) =>
        category.monthly_limit === 0 ? null : (
          <div
            key={category.categoryId}
            className="rounded-xl bg-slate-50 p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Limit_name id={category.categoryId} />
                <span className="ml-2 rounded-full bg-blue-100 px-3 py-1 text-[13px] text-blue-600">
                  Remaining: {formatCurrency(category.monthly_limit - category.total_spent)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-100 p-4 transition-all hover:bg-slate-200">
                <p className="text-sm text-gray-600">Daily Average</p>
                <p className="mt-1  font-semibold text-gray-900">
                  {formatCurrency(category.avg_daily_spent)}
                </p>
              </div>
              <div className="rounded-lg bg-slate-100 p-4 transition-all hover:bg-slate-200">
                <p className="text-sm text-gray-600">Total Spent</p>
                <p className="mt-1  font-semibold text-gray-900">
                  {formatCurrency(category.total_spent)}
                </p>
              </div>
              <div className="rounded-lg bg-slate-100 p-4 transition-all hover:bg-slate-200">
                <p className="text-sm text-gray-600">Monthly Limit</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {formatCurrency(category.monthly_limit)}
                </p>
              </div>
              {monthly && (
                <div className="rounded-lg bg-slate-100 p-4 transition-all hover:bg-slate-200">
                  <p className="text-sm text-gray-600">
                    {category.savings_needed < 0
                      ? "Remaining Budget"
                      : "Over Budget"}
                  </p>
                  <span className="text-black text-[12px]">By daily avg.</span>
                  <p
                    className={`mt-1 font-semibold ${
                      category.savings_needed < 0
                        ? "text-teal-600"
                        : "text-purple-500"
                    }`}
                  >
                    {formatCurrency(Math.abs(category.savings_needed))}
                  </p>
                </div>
              )}
            </div>

            {category.daily_saving_suggestion > 0 && (
              <div className="mt-4 rounded-lg bg-blue-50 p-4 text-sm">
                <p className="flex items-center text-blue-800">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  Suggested daily savings: {formatCurrency(category.daily_saving_suggestion)}
                </p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default MonthlyAnalysisCard;
