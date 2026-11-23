import { useEffect, useState } from 'react'
import TypeTabs from '../components/TypeTabs'
import { addType, categories } from '../utils/data'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import { PlusCircle } from 'lucide-react'
import type { AddEntryType } from '../utils/types'
import { useExpenseStore } from '../store/expenseStore'
import { useLocation, useNavigate } from 'react-router-dom'

const AddEntry = () => {
    const [entryType, setEntryType] = useState('expense')
    const handleTabClick = (t: string) => {
        setEntryType(t)
    }

    const addRecord = useExpenseStore((state) => state.addRecord)
    const updateRecord = useExpenseStore((state) => state.updateRecord)
    const theme = useExpenseStore(state => state.theme)

    const [optionsVisible, setOptionsVisible] = useState(false)
    const handleOptionsVisibility = () => {
        setOptionsVisible(!optionsVisible)
    }

    const handleOptionClick = (opt: string) => {
        setOptionsVisible(false)
        setEntryData(prev => ({
            ...prev, category: opt
        }))
    }

    const [entryData, setEntryData] = useState<AddEntryType>({ type: '', id: '', dateVal: '', category: 'select category', desc: '', amount: 0 })
    const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = input.target
        setEntryData(prev => ({
            ...prev, [name]: value
        }))
    }

    const navigate = useNavigate()

    const [errors, setErrors] = useState({ dateVal: false, category: false, desc: false, amount: false })
    const checkForm = (entryData: AddEntryType) => {
        const errors = {
            dateVal: !entryData.dateVal,
            category: entryData.category.includes('select'),
            desc: !entryData.desc,
            amount: !entryData.amount || +entryData.amount === 0
        }
        setErrors(errors)

        const errorCount = Object.values(errors).some(Boolean)
        if (errorCount) return

        const finalRecord = {
            ...entryData,
            type: entryType,
            id: crypto.randomUUID()
        }

        if (editingRecord) {
            updateRecord(entryData)
        }
        else {
            addRecord(finalRecord)
        }
        navigate('/transactions')
    }

    const location = useLocation()
    const editingRecord = location.state

    useEffect(() => {
        if (editingRecord) setEntryData(editingRecord)
    }, [editingRecord])


    return (
        <div>
            <TypeTabs getTabs={addType} getTabClick={handleTabClick} getActiveTab={entryType} />
            {/* <p className='capitalize font-semibold text-xl underline'>add record</p> */}
            <div className='mt-6 flex flex-col gap-4'>
                {/* date */}
                <div>
                    <div className='flex gap-2'>
                        <p className="capitalize text-gray-400 text-sm mb-2">date</p>
                        {errors.dateVal && <p className='text-sm text-red-500'>(date is required)</p>}
                    </div>
                    <input type="date" name="dateVal" id="dateVal" autoComplete='off' value={entryData.dateVal} onChange={handleInputChange} className={`w-full border border-gray-400 rounded-lg h-10 px-2 focus:outline-none ${theme === 'dark' ? 'text-gray-300' : ''}`} />
                </div>
                <div className='flex gap-2'>
                    {/* category */}
                    <div className='flex-1'>
                        <div className='flex gap-2 items-center mb-1'>
                            <p className="capitalize text-gray-400 text-sm">categories</p>
                            {errors.category && <p className='text-sm text-red-500'>(required)</p>}
                        </div>
                        <Dropdown getOptions={categories} getVisibilityFn={handleOptionsVisibility} getSelected={entryData.category} getVisibility={optionsVisible} getOption={handleOptionClick} />
                    </div>
                    {/* description*/}
                    <div className='flex-1'>
                        <div className='flex gap-2 items-center mb-1'>
                            <p className="capitalize text-gray-400 text-sm">description</p>
                            {errors.desc && <p className='text-sm text-red-500'>(required)</p>}
                        </div>
                        <input type="text" name="desc" id="desc" autoComplete='off' placeholder='activity...' value={entryData.desc} onChange={handleInputChange} className={`w-full border border-gray-400 rounded-lg h-10 px-2 focus:outline-none ${theme === 'dark' ? 'text-gray-300' : ''}`} />
                    </div>
                </div>
                {/* amount */}
                <div className=''>
                    <div className='flex gap-2 items-center mb-1'>
                        <p className="capitalize text-gray-400 text-sm">amount</p>
                        {errors.amount && <p className='text-sm text-red-500'>(amount is required)</p>}
                    </div>
                    <input type="number" name="amount" id="amount" autoComplete='off' value={entryData.amount} onChange={handleInputChange} className={`w-full border border-gray-400 rounded-lg h-10 px-2 focus:outline-none ${theme === 'dark' ? 'text-gray-300' : ''}`} />
                </div>


                <Button leadIcon={PlusCircle} btnName={!editingRecord ? 'add record' : 'update record'} getActionFn={() => checkForm(entryData)} />
            </div>
        </div>
    )
}

export default AddEntry