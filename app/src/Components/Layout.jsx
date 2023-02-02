

import { Outlet } from "react-router-dom"
import { Header } from "./Header"


export const Layout = ({autnteficate}) => {


    return (
        <div >
            <header>
                <div className="header-inner">
                    <div className="container">
                        <Header autnteficate={autnteficate}/>
                    </div>
                </div>
            </header>
            <main>
                <div className="main-inner">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}