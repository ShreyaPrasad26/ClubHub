import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const [click, setClick]= useState(false)
    return (
    <div>
        <>
            <footer>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={()=>setClick(false)}>
                            <li>CLUBHUB</li>
                            <li></li><li></li><li></li><li></li>
                            <li><Link to='/about'>ABOUT</Link></li>
                            <li></li>
                            <section className='column-footer'>
                                <li><Link to='/signup'>SIGNUP</Link></li>
                                <section className='column-footer-content'>
                                    <li><Link to='/signup/admin'>ADMINISTRATION</Link></li>
                                    <li><Link to='/signup/student'>STUDENT</Link></li>
                                    <li><Link to='/signup/club'>STUDENT CLUB</Link></li>
                                </section>
                            </section>
                            <li></li>
                            <li><Link to='/login'>LOGIN</Link></li>
                    </ul>
                </nav>
            </footer>
        </>
    </div>
  )
}

export default Footer