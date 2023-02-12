import { Link } from "react-router-dom"
import { NavbarUI } from "../UI/navbar/Navbar"

export const Navbar = ({chp}) => {
    const links = [
        {
            name: 'People',
            link: '/people',
        },
        {
            name: 'Planets',
            link: '/planets',
        },
        {
            name: 'Films',
            link: '/'
        },
        {
            name: 'Species',
            link: '/species',
        },
        {
            name: 'Vehicles',
            link: '/vehicles'
        },
        {
            name: 'Starships',
            link: '/starships'
        }

    ]

    return (
        <>
            <NavbarUI elems={links} chp={chp}/>
        </>
    )
}