import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="nav">
            <Link className="nav-item" to='/'>Home</Link>
        </div>
    )
}