import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Redirect } from 'react-router-dom'
import './login.css'

const Login = () => {

     const [id, setId] = useState('')
     const [password, setPassword] = useState('')

     const { loginUser, authState: { isAuthenticated } } = useContext(AuthContext)

     const submitHandler = (e) => {
          e.preventDefault()
          loginUser({ id, password })
     }

     console.log("authentication:" ,isAuthenticated)

     let body
     if (isAuthenticated) {
          console.log("phân quyền thành công")
          return <Redirect to='/main'></Redirect>
     } else body = (
          <form action="" className='form' onSubmit={submitHandler}>
               <div className='form__group'>
                    <label htmlFor="">User Id</label>
                    <input type="text" data-input='id' placeholder='enter your user id...'
                         value={id}
                         onChange={(e) => setId(e.target.value)}
                    />
                    <p></p>
               </div>
               <div className='form__group'>
                    <label htmlFor="">Password</label>
                    <input type="password" data-input='id' placeholder='enter your password...'
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
