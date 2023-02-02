import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Navigate, redirect } from 'react-router-dom'
import { IsValidEmail, IsValidPass, IsValidName, NullFieldInput } from '../Components/Validation'

export const Registration = ({ch, checkor}) => {

	const [errname, setErrname] = useState(false)
	const [errName, setErrName] = useState(false)

	const [erremail, setErremail] = useState(false)
	const [errEmail, setErrEmail] = useState(false)

	const [errpass, setErrerrpass] = useState(false)
	const [errPass, setErrerrPass] = useState(false)
	const [ERrpass, setERrpass] = useState(false)

	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [name, setName] = useState('')

	const changeErrpass = (per) => { setErrerrpass(per) }
	const changeErrPass = (per) => { setErrerrPass(per) }
	const changeERrpass = (per) => { setERrpass(per) }

	const changeErremail = (per) => { setErremail(per) }
	const changeErrEmail = (per) => { setErrEmail(per) }

	const changeErrName = (par) => { setErrName(par) }
	const changeErrname = (par) => { setErrname(par) }

	const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault()
		NullFieldInput(pass, changeErrPass)
		NullFieldInput(email, changeErrEmail)
		NullFieldInput(name, changeErrName)
		if (!errName && !errname && !errEmail && !erremail && !errPass && !errpass && !ERrpass) {
			navigate("/");
			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
			localStorage.setItem('password', pass);
			ch()
			checkor()
		}
	}

	return (
		<div className='reg-main'>
			<form onSubmit={(e) => onSubmit(e)} className='register-from'>
				<input
					placeholder='Name'
					className='input-form'
					onChange={(event) => {
						const value = event.target.value
						setName(value)
						IsValidName(value, changeErrname)
						NullFieldInput(value, changeErrName)
					}}
				/>
				{
					errname ? <span style={{ color: 'red' }}>Name must be more than 2 characters</span> : errName ? <span style={{ color: 'red' }}>Name - required field</span> : null
				}
				<input
					placeholder='Email'
					type={'email'}
					className='input-form'
					onChange={(event) => {
						const value = event.target.value
						setEmail(value)
						IsValidEmail(value, changeErremail)
						NullFieldInput(value, changeErrEmail)
					}}
				/>
				{
					erremail ? <span style={{ color: 'red' }}>Invalid email address! </span> : errEmail ? <span style={{ color: 'red' }}>Email - required field</span> : null
				}
				<input
					placeholder='Password'
					type={'password'}
					className='input-form'
					onChange={(event) => {
						const value = event.target.value
						setPass(value)
						IsValidPass(value, changeErrpass, changeERrpass)
						NullFieldInput(value, changeErrPass)
					}}
				/>
				{
					errpass ? <span style={{ color: 'red' }}>Password must include @, -!</span> : errPass ? <span style={{ color: 'red' }}>Password - required field</span> : ERrpass ? <span style={{ color: 'red' }}>Password must be more than 8 characters</span> : null
				}
				<input value={"Register"} className='btn-from' type='submit' />
			</form>
		</div>
	)
}
