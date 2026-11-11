import { useState } from "react"
import TypeTabs from "../components/TypeTabs"
import { expenseTabs } from "../utils/data"
import TransactionEntry from "../components/TransactionEntry"
import { ForkKnife } from "lucide-react"

const Transactions = () => {
    const [expenseType, setExpenseType] = useState('all')
    const handlTabClick = (t: string) => {
        setExpenseType(t)
    }
    return (
        <div>
            <TypeTabs getTabs={expenseTabs} getTabClick={handlTabClick} getActiveTab={expenseType} />
            <div className="flex flex-col mt-6 gap-4">
                <TransactionEntry icon={ForkKnife} category="food & dining" desc="dinner" date="10 Nov 2026" amount={400} expenseType="expense" />
                <TransactionEntry icon={ForkKnife} category="sports" desc="dinner" date="10 Nov 2026" amount={300} expenseType="income" />
                <TransactionEntry icon={ForkKnife} category="transport" desc="dinner" date="10 Nov 2026" amount={1800} expenseType="expense" />
                <TransactionEntry icon={ForkKnife} category="shopping" desc="dinner" date="10 Nov 2026" amount={2500} expenseType="income" />
            </div>
        </div>
    )
}

export default Transactions