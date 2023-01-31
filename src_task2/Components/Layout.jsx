import { Header } from './Header'
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}