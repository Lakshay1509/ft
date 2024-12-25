import {formatCurrency } from '@/lib/utils';
import Limit_name from './limit-name';

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
}


const MonthlyAnalysisCard = ({ analysis,monthly }:MonthlyAnalysisCardProps) => {
  return (
    
    <div className="space-y-4">
      {analysis.map((category) => (
        (category.monthly_limit === 0) ? null :
        <div key={category.categoryId} className="bg-[#FEFEFA] p-4 rounded-lg">
          <Limit_name id={category.categoryId} />
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className='text-black'>
              <p>Daily Average</p>
              <p className="text-lg font-medium">{formatCurrency(category.avg_daily_spent)}</p>
            </div>
            <div className='text-black'>
              <p >Total Spent</p>
              <p className="text-lg font-medium">{formatCurrency(category.total_spent)}</p>
            </div>
            <div className='text-black'>
              <p >Monthly Limit</p>
              <p className="text-lg font-medium">{formatCurrency(category.monthly_limit)}</p>
            </div>
            {monthly && (
            <div className='text-black'>
              <p className="text-gray-black">Within Limit</p>
              <p className={`text-lg font-medium ${category.savings_needed < 0 ? 'text-green-600' : 'text-red-400'}`}>
                {formatCurrency((Math.abs(category.savings_needed)))}
              </p>
            </div>
            )}
          </div>
          {category.daily_saving_suggestion > 0 && (
            <div className="mt-3 p-2 bg-yellow-900 rounded">
              <p className="text-yellow-400">Suggested daily savings: {formatCurrency(category.daily_saving_suggestion)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MonthlyAnalysisCard;
