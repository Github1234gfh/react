import React, {useState} from 'react'

export default function User({iten, editI, setLoc}) {

	const style = {
		maxWidth: '300px',
		margin: '0 auto',
		display: 'flex',
		flexDirection: 'column',
		gap: 14
	}

	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [pass, setPass] = useState()


	return (
		<form style={style}>
			<h1>Regitration</h1>
			<input 
				placeholder='User name'
				onChange={(event) => {
					setName(event.target.value)
					editI(event.target.value)
				}}
			/>
			<input 
				type={'email'}
				placeholder='Email'
				onChange={(event) => {
					setEmail(event.target.value)
				}}
			/>
			<input 
				type={'password'}
				placeholder='Password'
				onChange={(event) => {
					setPass(event.target.value)
				}}
			/>
			<button
				onClick={() => {
					setLoc(name, email, pass)
				}}
			>Registeer</button>
		</form>
	)
}