import React, { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/AuthReducer'
import userList from '../assets/data/user'


export const AuthContext = createContext()

const findOneUser = (id) => {
     let check = false
     userList.map(item => {
          if (id === item.id) {
               check = true
          }

          return check
     })
     return check
}
const checkPass = (id, password) => {
     let checkpass = false
     userList.map(item => {
          if (password === item.password && id === item.id)
               checkpass = true
          return checkpass
     })
     return checkpass
}

const AuthContextProvider = ({ children }) => {

     const [authState, dispatch] = useReducer(authReducer, {
          isAuthenticated: false,
          user: null,
     })

     console.log(userList)


     const loadUser = () => {
          if (localStorage['data'])
               dispatch({
                    type: 'SET_AUTH',
                    payload: {
                         isAuthenticated: true,
                         user: JSON.parse(localStorage['data']).user
                    }
               })
          else
               dispatch({
                    type: 'SET_AUTH',
                    payload: {
                         isAuthenticated: false,
                         user: null
                    }
               })
     }

     useEffect(() => {
          loadUser()
     }, [])

     const loginUser = ({ id, password }) => {
          console.log(id, password)
          if (!id || !password) {
               alert('missing user is or/and password!')
               return
          }
          else if (!findOneUser(id)) {
               alert('can not find this user! please try again!')
               return
          }
          else if (!checkPass(id, password)) {
               alert('password is incorrect')
               return
          }
          else {
               localStorage.setItem('data', JSON.stringify({ authentication: true, user: id }))
               dispatch({
                    type: 'SET_AUTH',
                    payload: {
                         isAuthenticated: true,
                         user: id
                    }
               })
               alert('đăng nhập thành công!')
          }
     }

     const logoutUser = () => {
          localStorage.removeItem('data')
          dispatch({
               type: 'SET_AUTH',
               payload: {
                    isAuthenticated: false,
                    user: null
               }
          })
     }

     const value = { loginUser, logoutUser, authState }

     return (
          <AuthContext.Provider value={value}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthContextProvider
