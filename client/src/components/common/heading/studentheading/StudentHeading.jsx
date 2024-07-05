import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './studentheading.css'

const StudentHeading = () => {
    const [click, setClick]= useState(false)
    return (
    <div>
        <>
            <header>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={()=>setClick(false)}>
                            <li>CLUBHUB</li>
                            <li><Link to='/calendar'>CALENDAR</Link></li>
                            <li><Link to='/feed'>FEED</Link></li>
                            <li><Link to='/eventarchive/dummy'>EVENTS</Link></li>
                            <li><Link to='/student/profile'>PROFILE</Link></li>
                            <li><Link to='/'>LOGOUT</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    </div>
  )
}

export default StudentHeading