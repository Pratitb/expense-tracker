import { useNavigate } from "react-router-dom"
import type { MobileMenuType } from "../utils/types"

const MobileMenu = ({ items }: MobileMenuType) => {
    const navigate = useNavigate()
    const handleItemClick = (page: string) => {
        navigate(page)
    }
    return (
        <div className="flex justify-between fixed w-full bottom-0 px-4 pt-3 pb-2 border-t border-t-gray-200">
            {items.map(i => {
                const Icon = i.icon
                return (
                    <div key={i.name} className="flex flex-col items-center" onClick={() => handleItemClick(i.page)}>
                        <Icon size={24} />
                        <p className="capitalize">{i.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MobileMenu