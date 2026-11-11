import { type LucideIcon } from "lucide-react"

interface OCType {
    icon: LucideIcon
    head: string
    amount: number
}
const OverviewCard = ({ icon: Icon, head, amount }: OCType) => {
    return (
        <div className="border rounded-lg px-4 py-3 flex items-center gap-8">
            <Icon size={32} />
            <div>
                <p className="text-gray-400 capitalize">{head}</p>
                <p className="text-2xl font-semibold">{amount}</p>
            </div>
        </div>
    )
}

export default OverviewCard