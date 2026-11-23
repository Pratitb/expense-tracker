export interface MobileMenuItem {
    name: string
    icon: React.ElementType
    page: string
}

export interface MobileMenuType {
    items: MobileMenuItem[]
}

export interface AddEntryType {
    type: string
    id: string
    dateVal: string
    category: string
    desc: string
    amount: number
}