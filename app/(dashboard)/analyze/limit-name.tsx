import { useGetCategory } from "@/features/categories/api/use-get-category"


type Limit_nameProps = {
    id:string
}

const Limit_name = ({id}:Limit_nameProps) => {
    const data = useGetCategory(id).data
    return (
        <div className="text-black text-lg font-semibold mb-3">
            {data?.name}
        </div>
    )
}

export default Limit_name