import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useExpenseStore } from "../store/expenseStore"
import TypeTabs from "../components/TypeTabs"
import { themeOpts } from "../utils/data"

const Settings = () => {
    const navigate = useNavigate()
    const reset = useExpenseStore(state => state.clearAll)
    const appTheme = useExpenseStore(state => state.theme)
    const updateTheme = useExpenseStore(state => state.updateTheme)

    const handleClear = () => {
        reset()
        navigate('/transactions')
    }

    const handleTheme = (value: string) => {
        updateTheme(value)
    }

    return (
        <>
            <div className="mt-8 ">
                <p className={`capitalize font-medium text-lg mb-2 ${appTheme === 'dark' ? 'text-gray-400' : ''}`}>app theme</p>
                <TypeTabs getTabs={themeOpts} getTabClick={handleTheme} getActiveTab={appTheme} />
            </div>
            <Button btnName="clear all entries" getActionFn={handleClear} />
        </>
    )
}

export default Settings