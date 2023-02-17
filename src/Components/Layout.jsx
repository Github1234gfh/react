import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = ({aunteficate}) => {
    return (
        <div className="container">
            <header>
                <Header aunteficate={aunteficate}/>
            </header>
            <main>
                <div className="wrap">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}