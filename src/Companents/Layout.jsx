import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>

            </header>
            <main>
                <div className="conteiner">
                    <div className="wrapper">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}