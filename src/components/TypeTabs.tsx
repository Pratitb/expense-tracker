
interface TabsType {
  getTabs: string[]
  getTabClick: (t: string) => void
  getActiveTab: string
}

const TypeTabs = ({ getTabs, getTabClick, getActiveTab }: TabsType) => {
  return (
    <div className="flex gap-4">
      {getTabs.map(t => <p key={t} onClick={() => getTabClick(t)} className={`border rounded-lg px-4 py-1 capitalize tracking-wide ${getActiveTab === t ? 'text-gray-200 bg-gray-900' : ''}`}>{t}</p>)}
    </div>
  )
}

export default TypeTabs