
"use client"

import { useGetGoals } from "@/features/goals/api/use-get-goals"
import { convertAmountFromMilliunits, formatCurrency, getCurrentMonthInYYYYMM } from "@/lib/utils"

type MonthPageProps = {
    id:string,
    name:string
}

const MonthPage = ({id,name}:MonthPageProps) => {
    const month = getCurrentMonthInYYYYMM()
    const [data] = useGetGoals(id,month).data||[];


    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black p-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{data?.amount && formatCurrency(convertAmountFromMilliunits(data?.amount))}</p>
        {!data?.amount && <p className="text-gray-700 text-base">Not Specified</p>}
        </div>
    )


}

export default MonthPage;