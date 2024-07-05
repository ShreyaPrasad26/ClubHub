import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [click, setClick]= useState(false)
    return (
    <div>
        <>
            <header>
                <nav className='flexSB'>
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={()=>setClick(false)}>
                            <li><Link to='/'>HOME</Link></li>
                            <li><a href='#about-us-section'>ABOUT</a></li>
                            <li><Link to='/signup'>SIGNUP</Link></li>
                            <li><Link to='/login'>LOGIN</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    </div>
  )
}

export default Header