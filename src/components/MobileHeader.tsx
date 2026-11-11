import { Settings, Wallet } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface MobileHeaderType {
    getPage: string
}

const MobileHeader = ({ getPage }: MobileHeaderType) => {
    const navigate = useNavigate()
    const handleNavigation = (link: string) => {
        navigate(link)
    }
    return (
        <div className="flex justify-between items-center border-b border-b-gray-200 pb-4">
            <Wallet size={24} onClick={() => handleNavigation('/home')} />
            <div>
                <p className="capitalize text-lg">expense tracker</p>
                <p className="capitalize text-sm text-center text-gray-400">{getPage}</p>
            </div>
            <Settings size={24} onClick={() => handleNavigation('/settings')} />
        </div>
    )
}

export default MobileHeader