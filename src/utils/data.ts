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

export const categories = ['food & dining', 'transport', 'lifestyle']