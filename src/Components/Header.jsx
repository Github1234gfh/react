import { NavLink } from "react-router-dom"

export const Header = ({ aunteficate }) => {

    const active = (isactive) => isactive.isActive ? 'header-item active' : 'header-item'

    return (
        <div className="header">
            <NavLink className={isactive => active(isactive)} to={'/'}>Home</NavLink>
            {
                !aunteficate ?
                    <>
                        <NavLink className={isactive => active(isactive)} to={'/login'}>Login</NavLink>
                        <NavLink className={isactive => active(isactive)} to={'/registration'}>Registration</NavLink>
                    </>
                    : <NavLink className={isactive => active(isactive)} to={'/favorites'}>Favorites</NavLink>
            }
        </div>
    )
}