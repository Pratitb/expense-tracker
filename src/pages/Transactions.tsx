import { useMemo, useState } from "react"
import TypeTabs from "../components/TypeTabs"
import { expenseTabs } from "../utils/data"
import TransactionEntry from "../components/TransactionEntry"
import { BriefcaseBusiness, Car, Gift, Percent, ShoppingBag, Utensils } from "lucide-react"
import { useExpenseStore } from "../store/expenseStore"
import type { AddEntryType } from "../utils/types"
import { useNavigate } from "react-router-dom"

const categoryIcons = {
    'food & dining': Utensils,
    transport: Car,
    lifestyle: ShoppingBag,
    'work income': BriefcaseBusiness,
    interest: Percent,
    gift: Gift,
}

type Category = keyof typeof categoryIcons

const Transactions = () => {
    const [expenseType, setExpenseType] = useState('all')
    const handlTabClick = (t: string) => {
        setExpenseType(t)
    }


    const expenses = useExpenseStore((state) => state.expenses)
    const filteredEntries = useMemo(() => {
        if (expenseType === 'all') return expenses

        const createFilteredEntries = expenses.filter(re => re.type.toLowerCase() === expenseType.toLowerCase())
        return createFilteredEntries
    }, [expenseType, expenses])

    const deleteRecord = useExpenseStore(state => state.deleteRecord)

    const navigate = useNavigate()
    const handleEdit = (re: AddEntryType) => {
        navigate('/add-entry', { state: re })
    }

    return (
        <div>
            <TypeTabs getTabs={expenseTabs} getTabClick={handlTabClick} getActiveTab={expenseType} />
            <div className="flex flex-col mt-6 gap-4 overflow-auto max-h-[610px]">
                {filteredEntries.length === 0 ? <p className="text-gray-400 capitalize text-sm text-center">no entries yet. go to "add entry" page and add a record to see here.</p> : filteredEntries.map(re => <TransactionEntry key={re.id} icon={categoryIcons[re.category as Category]} category={re.category} desc={re.desc} date={re.dateVal} amount={re.amount} expenseType={re.type} getDeleteFn={() => deleteRecord(re.id)} getUpdateFn={() => handleEdit(re)} />)}
            </div>
        </div>
    )
}

export default Transactions