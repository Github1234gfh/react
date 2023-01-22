import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

	const style = {
		display: 'flex',
		gap: 70
	}
	return (
		<div>
			<ul style={style}>
				<Link to='/'>Main</Link>
				<Link to='/about' >About us</Link>
				<Link to='/goods'>Goods</Link>
			</ul>
		</div>
	)
}
