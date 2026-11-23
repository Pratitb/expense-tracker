import { Settings, Wallet } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useExpenseStore } from "../store/expenseStore"

interface MobileHeaderType {
    getPage: string
}

const MobileHeader = ({ getPage }: MobileHeaderType) => {
    const theme = useExpenseStore(state => state.theme)
    const navigate = useNavigate()
    const handleNavigation = (link: string) => {
        navigate(link)
    }
    return (
        <div className="flex justify-between items-center border-b border-b-gray-200 pb-2">
            <Wallet size={24} className={`${theme === 'dark' ? 'text-gray-300' : ''}`} onClick={() => handleNavigation('/home')} />
            <div>
                <p className={`capitalize text-lg ${theme === 'dark' ? 'text-gray-300' : ''}`}>expense tracker</p>
                <p className="capitalize text-sm text-center text-gray-400">{getPage}</p>
            </div>
            <Settings size={24} className={`${theme === 'dark' ? 'text-gray-300' : ''}`} onClick={() => handleNavigation('/settings')} />
        </div>
    )
}

export default MobileHeader