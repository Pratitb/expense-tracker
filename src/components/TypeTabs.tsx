import { useExpenseStore } from "../store/expenseStore"

interface TabsType {
  getTabs: string[]
  getTabClick: (t: string) => void
  getActiveTab: string
}

const TypeTabs = ({ getTabs, getTabClick, getActiveTab }: TabsType) => {
  const theme = useExpenseStore(state => state.theme)

  return (
    <div className="flex gap-2">
      {getTabs.map(t => <p key={t} onClick={() => getTabClick(t)} className={`border rounded-lg px-4 py-1 capitalize text-sm tracking-wide cursor-pointer
      ${getActiveTab === t ? theme === 'dark' ? 'bg-gray-400' : 'bg-gray-950 text-gray-300' : 'text-gray-400'}`}>{t}</p>)}
    </div>
  )
}

export default TypeTabs