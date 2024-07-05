import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import './signupmain.css'

const Signup = () => {
    return (
        <div>
            <Header/>
            <div className='profile-cards'>
                <div className='profile-card-text'>
                    <Link to='/signup/admin'><button className='circular-card' id='admin-img'></button></Link>
                    <p><Link to='/signup/admin'>Administration</Link></p>
                </div>
                <div className='profile-card-text'>
                    <Link to='/signup/student'><button className='circular-card' id='student-img'></button></Link>
                    <p><Link to='/signup/student'>Student</Link></p>
                </div>
                <div className='profile-card-text'>
                    <Link to='/signup/club'><button className='circular-card' id='club-img'></button></Link>
                    <p><Link to='/signup/club'>Club</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup