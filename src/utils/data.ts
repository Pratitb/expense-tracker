import { Home, List, Settings } from "lucide-react";
import type { MobileMenuItem } from "./types";

export const mobileMenu: MobileMenuItem[] = [
    {
        name: 'home',
        icon: Home,
        page: '/'
    },
    {
        name: 'transactions',
        icon: List,
        page: '/transactions'
    },
    {
        name: 'settings',
        icon: Settings,
        page: '/settings'
    }
]