import { ChevronDown, ChevronUp } from "lucide-react"
import { useExpenseStore } from "../store/expenseStore"

interface DropdownType {
    getSelected: string
    getOptions: string[]
    getVisibilityFn: () => void
    getVisibility: boolean
    getOption: (opt: string) => void
}

const Dropdown = ({ getSelected, getOptions, getVisibilityFn, getVisibility, getOption }: DropdownType) => {
    const theme = useExpenseStore(state => state.theme)

    return (
        <div className="flex flex-col gap-1 relative">
            <div onClick={getVisibilityFn} className="border border-gray-400 flex justify-between rounded-lg px-2 py-2">
                <p className={`capitalize text-sm ${theme === 'dark' ? 'text-gray-300' : ''}`}>{getSelected}</p>
                {getVisibility ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={`absolute top-10 w-full flex flex-col border border-gray-400 rounded-lg px-2 py-1 cursor-pointer ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'} ${getVisibility ? 'h-auto' : 'h-0 opacity-0'}`}>
                {getOptions.map(opt => <p key={opt} onClick={() => getOption(opt)} className={`py-2 px-3 text-sm capitalize text-gray-500 cursor-pointer border-b border-b-gray-200 rounded-lg last:border-none ${theme === 'dark' ? 'hover:bg-gray-800 hover:text-gray-300' : 'hover:bg-gray-900 hover:text-gray-200'} ${getVisibility ? 'opacity-100 visible' : 'opacity-0 hidden'}`}>{opt}</p>)}
            </div>
        </div>
    )
}

export default Dropdown