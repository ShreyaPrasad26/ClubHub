import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './footerfeed.css'

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
                            <li><Link to='/calendar'>CALENDAR</Link></li>
                            <li></li>
                            <section className='column-footer'>
                                <li><Link to='/signup'>FEED</Link></li>
                                <section className='column-footer-content'>
                                    <li><a href='#domain-container-spec-1'>TECH</a></li>
                                    <li><a href='#domain-container-spec-3'>CULTURAL</a></li>
                                    <li><a href='#domain-container-spec-2'>DEVELOPMENT</a></li>
                                    <li><a href='#domain-container-spec-4'>COMMUNITY SERVICE</a></li>
                                </section>
                            </section>
                            <li></li>
                            <li><Link to='/login'>PROFILE</Link></li>
                            <li><Link to='/'>LOGOUT</Link></li>
                    </ul>
                </nav>
            </footer>
        </>
    </div>
  )
}

export default Footer