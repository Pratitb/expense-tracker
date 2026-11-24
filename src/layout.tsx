import { useLocation } from "react-router-dom"
import MobileHeader from "./components/MobileHeader"
import MobileMenu from "./components/MobileMenu"
import { mobileMenu } from "./utils/data"
// import { useMediaQuery } from "react-responsive"
import { useExpenseStore } from "./store/expenseStore"

interface LayoutType {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutType) => {
    const location = useLocation()
    const path = location.pathname.replace('/', '')
    // const isDesktop = useMediaQuery({ "minWidth": "1023px" })
    const theme = useExpenseStore(state => state.theme)

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'wrapper-dark' : 'wrapper'}`}>
            <div className="container">
                <MobileHeader getPage={path || 'home'} />
                <main className="my-6">{children}</main>
                <MobileMenu items={mobileMenu} />
            </div>
        </div>
    )
}

export default Layout