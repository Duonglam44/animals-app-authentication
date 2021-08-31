import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './header.css'

const Header = () => {

     const { logoutUser, authState: { user } } = useContext(AuthContext)

     return (
          <div className="header__wrapper">
               <div className='container header'>
                    <div className='header__author'>
                         <p>wellcome {user.split('@')[0]}</p>
                    </div>
                    <button className='logout-btn' onClick={logoutUser}>Log out</button>
               </div>
          </div>
     )
}

export default Header
