import { useLocation } from "react-router-dom"
import MobileHeader from "./components/MobileHeader"
import MobileMenu from "./components/MobileMenu"
import { mobileMenu } from "./utils/data"
import { useMediaQuery } from "react-responsive"

interface LayoutType {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutType) => {
    const location = useLocation()
    const path = location.pathname.replace('/', '')
    const isDesktop = useMediaQuery({ "minWidth": "1023px" })

    return (
        <div className="wrapper">
            <div className="container">
                {
                    !isDesktop ?
                        <>
                            <MobileHeader getPage={path} />
                            <main className="my-6">{children}</main>
                            <MobileMenu items={mobileMenu} />
                        </>
                        :

                        <>
                            <MobileHeader getPage={path} />
                            <main>{children}</main>
                            <MobileMenu items={mobileMenu} />
                        </>
                }
            </div>
        </div>
    )
}

export default Layout