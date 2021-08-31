import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import animals from '../assets/data/animals'
import { Link } from 'react-router-dom'




const MainPage = () => {
     const { authState: { isAuthenticated } } = useContext(AuthContext)

     const [currentPage, setcurrentPage] = useState(1)
     const itemPerPage = 8


     // pagation 
     const IOLastList = currentPage * itemPerPage
     const OIFirstlist = IOLastList - itemPerPage
     const currentList = animals.slice(OIFirstlist, IOLastList)
     //

     if (!isAuthenticated)
          return <Redirect to='/login'></Redirect>
     return (
          <>
               <Header />
               <div className='main__wrapper'>
                    <div className="container grid">
                         {console.log(currentList)}
                         {
                              currentList.map((item, index) => (
                                   <Card
                                        key={index}
                                        img={item.img}
                                        name={item.name}
                                        description={item.description}
                                   />
                              ))
                         }

                    </div>
                    <Pagination
                         itemPerPage={itemPerPage}
                         totalsItems={animals.length}
                         setcurrentPage={setcurrentPage}
                    />
               </div>
               <Footer />
          </>
     )
}
const Card = (props) => {
     return (
          <div className='card'>
               <div className='card__img'>
                    <Link to='/'>
                         <img src={props.img} alt="" />
                    </Link>
               </div>
               <div className='card__body'>
                    <Link to='/' className='card__title'>{props.name}</Link>
                    <p className='card__des'>{props.description}</p>
               </div>
          </div>
     )
}

const Pagination = ({ totalsItems, itemPerPage, setcurrentPage }) => {

     const pageNumbers = []

     for (let i = 1; i <= Math.ceil(totalsItems / itemPerPage); i++) {
          pageNumbers.push(i)
     }

     const paginationHandler = (item) => {
          setcurrentPage(item)
          const listPage = document.querySelectorAll('.page-item')
          listPage.forEach(e => {
               e.classList.remove('active')
          })
          listPage[item - 1].classList.toggle('active')
     }

     return (
          <nav>
               <ul className='pagination'>
                    {
                         pageNumbers.map((item, index) => (
                              <li className={`page-item ${item === 1 ? 'active' : ''}`} key={index}>
                                   <Link to='/!#' className='page-link'
                                        onClick={(e) => { e.preventDefault(); paginationHandler(item) }}
                                   >
                                        {item}
                                   </Link>
                              </li>
                         ))
                    }
               </ul>
          </nav>
     )
}

export default MainPage
