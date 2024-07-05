import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './clubheading.css'

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
                            <li><Link to='/club/profile'>PROFILE</Link></li>
                            <li><Link to='/'>LOGOUT</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    </div>
  )
}

export default StudentHeading