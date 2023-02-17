import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = ({aunteficate, title, setAunteficate}) => {
    return (
        <div className="container">
            <header>
                <Header aunteficate={aunteficate} title={title} setAunteficate={setAunteficate}/>
            </header>
            <main>
                <div className="wrap">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}