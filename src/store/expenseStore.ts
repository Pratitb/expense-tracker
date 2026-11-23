import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AddEntryType } from "../utils/types";

interface StoreType {
    expenses: AddEntryType[]
    theme: string
    addRecord: (record: AddEntryType) => void
    deleteRecord: (id: string) => void
    updateRecord: (newRecord: AddEntryType) => void
    clearAll: () => void
    updateTheme: (value: string) => void
}

export const useExpenseStore = create<StoreType>()(persist((set) => ({
    expenses: [],
    theme: 'light',
    addRecord: (record: AddEntryType) => set((state) => ({ expenses: [...state.expenses, record] })),
    deleteRecord: (id: string) => set((state) => ({ expenses: state.expenses.filter(e => e.id !== id) })),
    updateRecord: (newRecord: AddEntryType) => set((state) => ({ expenses: state.expenses.map(e => e.id === newRecord.id ? newRecord : e) })),
    clearAll: () => set({ expenses: [] }),
    updateTheme: (value: string) => set({ theme: value }),
}),
    { name: 'expense-store' }
))