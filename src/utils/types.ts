export interface MobileMenuItem {
    name: string
    icon: React.ElementType
    page: string
}

export interface MobileMenuType {
    items: MobileMenuItem[]
}