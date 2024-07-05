import React,  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import './adminsignup.css'
import Validation from './AdminSignupValidation'
import axios from 'axios'

function AdminSignup() {
    const [values,setValues] = useState({
        institute: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.institute === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup/admin', values) 
            .then(res => {
                navigate('/admin/profile');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Header/>
            <div className='admin-signup-flex-container'>
                <form action="" onSubmit={handleSubmit} className='admin-signup-form'>
                    <div className='admin-signup-form-left'>
                        <h2>Admin Signup</h2>
                        <p>Register here to keep track of <br></br>student club activities</p>
                        <button type='submit' className='admin-signup-submit-btn'>SIGNUP</button>
                    </div>

                    <div className='admin-signup-form-right'>
                        <input type='text' placeholder='Name of institute' name='institute'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.institute && <span className='input-error'> {errors.institute} </span>}
                            <br></br>
                        <input type='text' placeholder='Website' name='web'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.web && <span className='input-error'> {errors.web} </span>}
                            <br></br>
                        <input type='text' placeholder='Phone Number' name='phno'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.phno && <span className='input-error'> {errors.phno} </span>}
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

export default AdminSignup