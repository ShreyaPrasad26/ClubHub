import React,  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import './studentsignup.css'
import Validation from './StudentSignupValidation'
import axios from 'axios'

const StudentSignup = () => {
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        srn: '',
        semester:'',
        section:'',
        cgpa:'',
        phno: '',
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
        setErrors(Validation(values))
        if (errors.fname === "" && errors.lname === "" && errors.srn === "" && errors.semester === "" && errors.section === "" && errors.cgpa === "" && errors.phno === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup/student', values)
            .then(res => {
                alert(values.email)
                navigate('/student/'+values.email)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <Header/>
            <div className='signup-flex-container'>
                <form action="" onSubmit={handleSubmit} className='signup-form'>
                    <div className='signup-form-left'>
                        <h2>Student Signup</h2>
                        <p>Hey there! Are you new to ClubHub? <br></br>Register here to stay updated<br></br>on all student club events</p>
                        <button type='submit' class='signup-submit-btn'>SIGNUP</button>
                    </div>

                    <div>
                        <input 
                            type='text' placeholder='First Name' name='fname'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.fname && <span className='input-error'> {errors.fname} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='Last Name' name='lname'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.lname && <span className='input-error'> {errors.lname} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='SRN' name='srn'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.srn && <span className='input-error'> {errors.srn} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='Semester' name='semester'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.semester && <span className='input-error'> {errors.semester} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='Section' name='section'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.section && <span className='input-error'> {errors.section} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='CGPA' name='cgpa'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.cgpa && <span className='input-error'> {errors.cgpa} </span>}
                            <br></br>
                        <input type='text' placeholder='Phone no.' name='phno'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.phno && <span className='input-error'> {errors.phno} </span>}
                            <br></br>
                        <input type='email' placeholder='Email ID' name='email'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.email && <span className='input-error'> {errors.email} </span>}
                            <br></br>
                        <input 
                            type='text' placeholder='Enter password' name='password'
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

export default StudentSignup