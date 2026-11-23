import type { LucideIcon } from "lucide-react"
import { useExpenseStore } from "../store/expenseStore"

interface ButtonType {
    trailIcon?: LucideIcon
    btnName?: string
    leadIcon?: LucideIcon
    getActionFn: () => void
}
const Button = ({ trailIcon: TrailIcon, btnName, leadIcon: LeadIcon, getActionFn }: ButtonType) => {
    const theme = useExpenseStore(state => state.theme)

    return (
        <div onClick={getActionFn} className={`${theme === 'dark' ? 'bg-gray-400 font-semibold' : 'bg-gray-900 text-gray-200'} flex justify-center items-center gap-2 rounded-lg py-2 mt-4 cursor-pointer`}>
            {TrailIcon && <TrailIcon size={18} />}
            {btnName && <p className="capitalize text-sm">{btnName}</p>}
            {LeadIcon && <LeadIcon size={18} />}
        </div>
    )
}

export default Button