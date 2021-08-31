import React, { useState, useContext, useRef } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Redirect } from 'react-router-dom'
import './login.css'

const Login = () => {

     const [id, setId] = useState('')
     const [password, setPassword] = useState('')

     const { loginUser, authState: { isAuthenticated } } = useContext(AuthContext)

     const emailRef = useRef(null)

     const submitHandler = (e) => {
          e.preventDefault()
          loginUser({ id, password })
     }

     const validateEmail = () => {
          const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/
          if (emailRef.current) {
               if(id.length === 0) emailRef.current.style.display = 'none'
               else if (!id.match(test)) {
                    emailRef.current.innerHTML = 'invalid email'
                    emailRef.current.style.display = 'block'
               } else{
                    emailRef.current.style.display = 'none'
               }

          }
     }

     let body
     if (isAuthenticated) {
          return <Redirect to='/main'></Redirect>
     } else body = (
          <form action="" className='form' onSubmit={submitHandler}>
               <div className='form__group'>
                    <label htmlFor="">User Id</label>
                    <input type="email" required data-input='id' placeholder='enter your user id...'
                         value={id}
                         onChange={(e) => { setId(e.target.value); validateEmail() }}
                         onBlur={validateEmail()}
                    />
                    <p ref={emailRef}></p>
               </div>
               <div className='form__group'>
                    <label htmlFor="">Password</label>
                    <input type="password" required data-input='id' placeholder='enter your password...'
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <p></p>
               </div>
               <button type='submit' className='btn-login'>Log in</button>
          </form>
     )

     return (
          <div className='wrapper'>
               <div className='login__wrapper'>
                    {body}
               </div>
          </div>
     )
}

export default Login
