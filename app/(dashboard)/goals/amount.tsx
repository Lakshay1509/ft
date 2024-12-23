"use client"

import { useGetGoals } from "@/features/goals/api/use-get-goals";
import { convertAmountFromMilliunits, formatCurrency } from "@/lib/utils";


type AmountProps={
    id:string;
    month:string
}


const Amount = ({id,month}:AmountProps)=>{

    const [data] = useGetGoals(id,month).data||[];


    if(data===undefined){
        return (
            <div>
                <h1>Limit Amount : Not Specified </h1>
            </div>
        )
    }


    return (
        <div>
            <div>
                <h1> Limit Amount : {formatCurrency (convertAmountFromMilliunits(data?.amount))}</h1>
            </div>
        </div>
    )




}

export default Amount;