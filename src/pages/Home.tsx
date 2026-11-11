import OverviewCard from '../components/OverviewCard'
import { Scale, TrendingDown, TrendingUp } from 'lucide-react'

const Home = () => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-xl font-semibold capitalize'>overview</p>
            <OverviewCard icon={TrendingUp} head='total income' amount={60000} />
            <OverviewCard icon={TrendingDown} head='total expenses' amount={20000} />
            <OverviewCard icon={Scale} head='balance' amount={40000} />
        </div>
    )
}

export default Home