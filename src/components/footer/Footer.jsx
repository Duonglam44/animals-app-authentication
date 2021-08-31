import React from 'react'
import { FaFacebookSquare, FaGithub, FaPhoneSquareAlt } from "react-icons/fa"
import './footer.css'

const Footer = () => {
     return (
          <div className='footer__wrapper'>
               <div className="container footer-grid">
                    <div className='footer__row'>
                         <h2>About me</h2>
                         <div className='footer__row-content'>
                              <p>Le Quang Duong Lam</p>
                              <p>Duy tan University</p>
                              <p>SoftWare Technology</p>
                              <p>87 Le Ngan - Cam Le - Khue Trung - Da Nang</p>
                         </div>
                    </div>
                    <div className='footer__row'>
                         <h2>Contact</h2>
                         <div className="footer__row-content">
                              <a href='https://fb.com/Duonglam44'>
                                   <FaFacebookSquare />
                                   <span>/Duonglam44</span>
                              </a>
                              <a href='https://github.com/Duonglam44'>
                                   <FaGithub />
                                   <span>/Duonglam44</span>
                              </a>
                              <a href='tel://0796751185' >
                                   <FaPhoneSquareAlt />
                                   <span>0796751185</span>
                              </a>
                         </div>
                    </div>
                    <div className='footer__row'>
                         <h2>Other projects</h2>
                         <div className="footer__row-content">
                              <a href='https://tony-todo-app.herokuapp.com/'>
                                   Todo App
                              </a>
                              <a href="https://tony-weatherapp.herokuapp.com/">
                                   Weather App
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer
