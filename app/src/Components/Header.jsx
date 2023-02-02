
import { Link, Router } from "react-router-dom"


export const Header = ({ autnteficate, ch }) => {

	return (
		<div className="header">
			<Link to='/'>Home</Link>
			{
				autnteficate ?
					<>
						<Link to='/orders'>Orders</Link>
						<a onClick={() => {
							ch(false); localStorage.removeItem('email'); localStorage.removeItem('password'); localStorage.removeItem('name')

						}

						}>Logout</a>
					</>
					: <>
						<Link to='/registration'>Registration</Link>
						<Link to='/login'>Login</Link>
					</>
			}

		</div>
	)
}   