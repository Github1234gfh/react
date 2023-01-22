import React, { useEffect, useState } from 'react'
import User from '../Components/User'
import { nanoid } from 'nanoid'

export default function Users() {
	 

	const [item , setItem] = useState()
	
	useEffect(() => {
		const Isname = localStorage.getItem('name')
		Isname? setItem(Isname): console.log(1)
		item? document.title = item: document.title = 'no registered'
	})

	const editItem = (value) => {
		setItem(value)
	}

	const setLocal = (name, email, pass) => {
		localStorage.setItem('name', name);
		localStorage.setItem('email', email);
		localStorage.setItem('password', pass);
	}

	return (
		<div>
			<User item={item} editI={editItem} setLoc={setLocal}/>
		</div>
	)
}
