import { Home, List, PlusCircle, Settings } from "lucide-react";
import type { MobileMenuItem } from "./types";

export const mobileMenu: MobileMenuItem[] = [
    { name: 'home', icon: Home, page: '/home' },
    { name: 'transactions', icon: List, page: '/transactions' },
    { name: 'add entry', icon: PlusCircle, page: '/add-entry' },
    { name: 'settings', icon: Settings, page: '/settings' }
]

export const expenseTabs = ['all', 'expense', 'income']

export const addType = ['expense', 'income']

export const categories = ['food & dining', 'transport', 'lifestyle', 'work income', 'interest', 'gift']

export const themeOpts = ['light', 'dark']

export const recordedEntries = [
    {
        id: '1',
        type: 'expense',
        category: 'food & dining',
        description: 'Dinner at a restaurant',
        date: '2026-11-10',
        amount: 850,
    },
    {
        id: '2',
        type: 'income',
        category: 'work income',
        description: 'Monthly salary',
        date: '2026-11-10',
        amount: 60000,
    },
    {
        id: '3',
        type: 'expense',
        category: 'transport',
        description: 'Uber ride to office',
        date: '2026-11-09',
        amount: 320,
    },
    {
        id: '4',
        type: 'income',
        category: 'interest',
        description: 'Savings account interest',
        date: '2026-11-09',
        amount: 450,
    },
    {
        id: '5',
        type: 'expense',
        category: 'lifestyle',
        description: 'Bought a new T-shirt',
        date: '2026-11-08',
        amount: 1299,
    },
    {
        id: '6',
        type: 'income',
        category: 'gift',
        description: 'Birthday gift received',
        date: '2026-11-08',
        amount: 2000,
    },
    {
        id: '7',
        type: 'expense',
        category: 'food & dining',
        description: 'Groceries for the week',
        date: '2026-11-07',
        amount: 1450,
    },
    {
        id: '8',
        type: 'income',
        category: 'work income',
        description: 'Freelance project payment',
        date: '2026-11-07',
        amount: 8500,
    },
    {
        id: '9',
        type: 'expense',
        category: 'transport',
        description: 'Monthly metro pass',
        date: '2026-11-06',
        amount: 1200,
    },
    {
        id: '10',
        type: 'income',
        category: 'interest',
        description: 'Fixed deposit interest',
        date: '2026-11-06',
        amount: 1100,
    },
    {
        id: '11',
        type: 'expense',
        category: 'lifestyle',
        description: 'Movie tickets',
        date: '2026-11-05',
        amount: 650,
    },
    {
        id: '12',
        type: 'income',
        category: 'gift',
        description: 'Cash gift received',
        date: '2026-11-05',
        amount: 1500,
    },
];



