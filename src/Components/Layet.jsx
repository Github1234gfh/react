import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Leyout = () => {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <main>
                <div className="main">
                    <div className="content-main">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>

    )
}