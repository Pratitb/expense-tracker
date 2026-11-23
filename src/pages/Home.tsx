import OverviewCard from '../components/OverviewCard'
import { Scale, TrendingDown, TrendingUp } from 'lucide-react'
import { useExpenseStore } from '../store/expenseStore'

const Home = () => {
    const expenses = useExpenseStore(state => state.expenses)
    const theme = useExpenseStore(state => state.theme)
    const totalIncome = expenses.filter(e => e.type === 'income').reduce((acc, curr) => acc + Number(curr.amount), 0)
    const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((acc, curr) => acc + Number(curr.amount), 0)
    const balance = totalIncome - totalExpenses
    return (
        <div className='flex flex-col gap-4'>
            <p className={`text-xl font-semibold capitalize ${theme === 'dark' ? 'text-gray-300' : ''}`}>overview</p>
            <OverviewCard icon={TrendingUp} head='total income' amount={totalIncome} color='income' />
            <OverviewCard icon={TrendingDown} head='total expenses' amount={totalExpenses} color='expense' />
            <OverviewCard icon={Scale} head='balance' amount={balance} color='balance' />
        </div>
    )
}

export default Home