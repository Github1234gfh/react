import React, { useState } from 'react'
import { Valid } from '../Components/Validation'

export const Registration = () => {


  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [name, setName] = useState()

  return (
    <div className='reg-main'>
      <form className='register-from'>
        <input 
          placeholder='Name'
          className='input-form'
          onChange={(event) => {
            setName(event.target.value)
          }}
          />
        <input 
          placeholder='Email'
          type={'email'}
          className='input-form'
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          />
        <input  
          placeholder='Password'
          type={'password'}
          className='input-form'
          onChange={(event) => {
            setPass(event.target.value)
          }}
          />
        <button className='btn-from' type='submit' onClick={() => {
          return (
            <>
              {
                Valid(name, email, pass)?console.log(1):console.log(2)
              }
            </>
          )
        }}>Register</button>
      </form>
    </div>
  )
}


