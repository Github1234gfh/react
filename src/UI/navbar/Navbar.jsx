import { Link, NavLink } from "react-router-dom"
import './style.css'
export const NavbarUI = ({elems}) => {

    const f = 'nav-item nav-active';

    const elem = elems.map((elem, index )=> {
        return (
            <NavLink key={index} className={(isActive => (isActive.isActive? f : 'nav-item'))}  to={elem.link}>{elem.name}</NavLink>
        )
    })

    return (
        <div className="nav-colomn">
            {elem}
        </div>
    )
}