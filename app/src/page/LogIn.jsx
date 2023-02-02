import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NullFieldInput } from '../Components/Validation'

export const LogIn = ({ users, ch }) => {

	const [email, setEmail] = useState()
	const [pass, setPass] = useState()
	const [errEmail, setErrEmail] = useState(false)
	const [errPass, setErrerrPass] = useState(false)

	const [ErrEmail, setERrEmail] = useState(false)
	const [ErrPass, setERrerrPass] = useState(false)

	const changeErrEmail = (per) => { setErrEmail(per) }
	const changeErrPass = (per) => { setErrerrPass(per) }

	const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault()
		users.map(user => {
			if (!errEmail && !errPass && user.email === email && user.password === pass) {
				setERrEmail(false)
				setERrerrPass(false)
				localStorage.setItem('email', email)
				localStorage.setItem('password', pass)
				ch(true)
				navigate('/')
			}
			else {
				setERrEmail(true)
				setERrerrPass(true)
			}
		})

	}

	return (
		<div className='reg-main'>
			<form onSubmit={(e) => onSubmit(e)} className='register-from'>
				<input
					placeholder='Email'
					type={'email'}
					className='input-form'
					onChange={(event) => {
						const value = event.target.value
						setEmail(value)
						NullFieldInput(value, changeErrEmail)
					}}

				/>
				{
					errEmail ? <span style={{ color: 'red' }}>Email - required field</span> : null
				}
				<input
					placeholder='Password'
					type={'password'}
					className='input-form'
					onChange={(event) => {
						const value = event.target.value
						setPass(value)
						NullFieldInput(value, changeErrPass)
					}}
				/>
				{errPass ? <span style={{ color: 'red' }}>Password - required field</span > : ErrEmail && ErrPass ? <span style={{ color: 'red' }}>Email or password are invalid</span> : null}
				<input value={"Login"} className='btn-from' type='submit' />
			</form>
		</div>
	)
}


