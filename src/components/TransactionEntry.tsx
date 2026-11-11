import type { LucideIcon } from "lucide-react"

interface EntryType {
    icon: LucideIcon
    category: string
    desc: string
    date: string
    amount: number
    expenseType: string
}
const TransactionEntry = ({ icon: Icon, category, desc, date, amount, expenseType }: EntryType) => {
    return (
        <div className="flex justify-between items-center border border-gray-700 rounded-lg px-4 py-3">
            <div className="flex items-center gap-8">
                <Icon size={36} className="bg-gray-100 rounded-xl p-2" />
                <div>
                    <p className="font-semibold capitalize leading-5">{category}</p>
                    <p className="capitalize text-gray-400 text-sm">{desc}</p>
                </div>
            </div>
            <div>
                <p className={`font-semibold text-lg leading-5 ${expenseType.toLowerCase() === 'expense' ? 'text-red-400' : 'text-green-600'}`}>&#8377;{amount}</p>
                <p className="text-sm text-gray-400">{date}</p>
            </div>
        </div>
    )
}

export default TransactionEntry