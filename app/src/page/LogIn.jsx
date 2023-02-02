import React from 'react'
import { useState } from 'react'
import { createRoutesFromChildren, useNavigate } from 'react-router-dom'
import { Users } from '../Components/Users'
import { NullFieldInput } from '../Components/Validation'
export const LogIn = ({ch}) => {

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
    let cheCkEmail = false
    let checkPass = false
    Users.map(user => {

      if (cheCkEmail && checkPass) {
        localStorage.setItem('email', email)
        localStorage.setItem('password', pass)
        ch()
        navigate('/')
      }

      if (!errEmail && !errPass && user.email === email && user.password === pass) {
        setERrEmail(false)
        setERrerrPass(false)
        cheCkEmail = true
        checkPass = true
      } else {
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
        <input value={"Register"} className='btn-from' type='submit' />
      </form>
    </div>
  )
}


