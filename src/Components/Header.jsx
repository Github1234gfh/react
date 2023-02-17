import { NavLink } from "react-router-dom"

export const Header = ({ aunteficate, title , setAunteficate}) => {

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
                    :
                    <>
                        <NavLink className={isactive => active(isactive)} to={'/cart'}>Cart</NavLink>
                        <NavLink className={'header-item'} to={'/orders'}>Orders</NavLink>
                        <NavLink onClick={() => setAunteficate(false)} className={isactive => active(isactive)}>Logout</NavLink>
                    </>
            }
            {
                aunteficate?<h1 className="text" style={{justifySelf: 'flex-end'}}>Hi - {title}</h1>
                :null
            }
            
        </div>
    )
}