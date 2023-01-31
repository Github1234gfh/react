import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="nav">
            <Link className="nav-item" to='/'>Home</Link>
            <Link className="nav-item" to='/about'>About</Link>
            <Link  className="nav-item" to='/addbook'>Add Book</Link>
        </div>
    )
}