import { type LucideIcon } from "lucide-react"
import { useExpenseStore } from "../store/expenseStore"

interface OCType {
    icon: LucideIcon
    head: string
    amount: number
    color: Color
}

type Color = keyof typeof cardColor

const cardColor = {
    income: 'text-green-500',
    expense: 'text-red-400',
    balance: 'text-yellow-400'
}
const OverviewCard = ({ icon: Icon, head, amount, color }: OCType) => {
    const theme = useExpenseStore(state => state.theme)

    return (
        <div className={`border rounded-lg px-4 py-3 flex flex-1 items-center gap-8 ${theme === 'dark' ? 'text-gray-300' : ''}`}>
            <Icon size={32} />
            <div>
                <p className={`capitalize ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>{head}</p>
                <p className={`text-2xl font-semibold ${cardColor[color]}`}>&#8377;{amount}</p>
            </div>
        </div>
    )
}

export default OverviewCard