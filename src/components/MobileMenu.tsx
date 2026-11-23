import { useNavigate } from "react-router-dom"
import type { MobileMenuType } from "../utils/types"
import { useExpenseStore } from "../store/expenseStore"

const MobileMenu = ({ items }: MobileMenuType) => {
    const theme = useExpenseStore(state => state.theme)

    const navigate = useNavigate()
    const handleItemClick = (page: string) => {
        navigate(page)
    }
    return (
        <div className={`flex justify-center gap-6 fixed w-full bottom-0 left-0 px-4 pt-3 pb-2 border-t border-t-gray-200 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
            {items.map(i => {
                const Icon = i.icon
                return (
                    <div key={i.name} className="flex flex-col items-center text-center cursor-pointer" onClick={() => handleItemClick(i.page)}>
                        <div className={`${theme === 'dark' ? 'text-gray-300' : ''}`}><Icon size={20} /></div>
                        <p className={`capitalize text-sm ${theme === 'dark' ? 'text-gray-300' : ''}`}>{i.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MobileMenu