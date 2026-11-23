import { Pen, Trash, type LucideIcon } from "lucide-react"
import { useExpenseStore } from "../store/expenseStore"

interface EntryType {
    icon: LucideIcon
    category: string
    desc: string
    date: string
    amount: number
    expenseType: string
    getDeleteFn: () => void
    getUpdateFn: () => void
}
const TransactionEntry = ({ icon: Icon, category, desc, date, amount, expenseType, getDeleteFn, getUpdateFn }: EntryType) => {
    const theme = useExpenseStore(state => state.theme)

    return (
        <div className={`flex justify-between items-center gap-2 border rounded-lg px-3 py-3 ${theme === 'dark' ? 'border-gray-300' : 'border-gray-700'}`}>
            <div className="flex items-center gap-4">
                <Icon size={36} className={`rounded-xl p-2 ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-100'}`} />
                <div>
                    <p className={`font-semibold capitalize text-sm leading-5 ${theme === 'dark' ? 'text-gray-300' : ''}`}>{category}</p>
                    <p className="capitalize text-gray-400 text-xs">{desc}</p>
                </div>
            </div>
            <div>
                <p className={`font-semibold leading-5 ${expenseType.toLowerCase() === 'expense' ? 'text-red-400' : 'text-green-600'}`}>&#8377;{amount}</p>
                <p className="text-xs text-gray-400">{date}</p>
            </div>
            <div className="flex gap-4">
                <Pen size={20} onClick={getUpdateFn} className={`${theme === 'dark' ? 'text-gray-400' : ''}`} />
                <Trash size={20} onClick={getDeleteFn} className={`${theme === 'dark' ? 'text-gray-400' : ''}`} />
            </div>
        </div>
    )
}

export default TransactionEntry