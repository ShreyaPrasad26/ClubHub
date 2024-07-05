import React,  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import './clubsignup.css'
import Validation from './ClubSignupValidation'
import axios from 'axios'

function ClubSignup() {
    const [values, setValues] = useState({
        club: '',
        domain: '',
        bio: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.club === "" && errors.domain === "" && errors.bio === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup/club', values)
            .then(res => {
                navigate('/club/'+values.email)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Header/>
            <div className='club-signup-flex-container'>
                <form action="" onSubmit={handleSubmit} className='club-signup-form'>
                    <div className='club-signup-form-left'>
                        <h2>Club Signup</h2>
                        <p>Hey there! Are you new to ClubHub? <br></br>Register your club here</p>
                        <button type='submit' class='club-signup-submit-btn'>SIGNUP</button>
                    </div>

                    <div>
                        <input type='text' placeholder='Club Name' name='club'
                           onChange={handleInput} requried/>
                            <br></br>
                            {errors.club && <span className='input-error'> {errors.club} </span>}
                            <br></br>
                        <input type='text' placeholder='Domain' name='domain' 
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.domain && <span className='input-error'> {errors.domain} </span>}
                            <br></br>
                        <input type='text' placeholder='Describe the club' name='bio' 
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.bio && <span className='input-error'> {errors.bio} </span>}
                            <br></br>
                        <input type='email' placeholder='Email ID' name='email' 
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.email && <span className='input-error'> {errors.email} </span>}
                            <br></br>
                        <input type='text' placeholder='Enter password' name='password' 
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.password && <span className='input-error'> {errors.password} </span>}
                            <br></br><br></br>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ClubSignup