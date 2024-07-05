import React,  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import './loginforgot.css'
import Validation from './LoginForgotValidation';
import axios from 'axios'

const LoginForgot = () => {
    const [values,setValues] = useState({
        userid: '',
        password: '',
        repassword: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if (!errors.email) {
            axios.post('http://localhost:8081/login/forgot', values)
                .then(res => {
                    const { success, user_type } = res.data;
                    if (success) {
                        // Redirect based on user type
                        switch (user_type) {
                            case 'student':
                                console.log("Navigating to student profile");
                                navigate('/student/profile');
                                break;
                            case 'club':
                                console.log("Navigating to club profile");
                                navigate('/club/profile');
                                break;
                            case 'admin':
                                console.log("Navigating to admin profile");
                                navigate('/admin/profile');
                                break;
                            default:
                                navigate('/login');
                        }
                    } else {
                        // Handle unsuccessful login (show an error message, etc.)
                        alert("User not found");
                        console.log('Invalid email');
                    }
                })
                .catch(error => {
                    // Handle any error that occurs during the axios request
                    console.error('Error:', error);
                });
        }
    };

    return (
    <div>
        <Header/>
        <div className='login-flex-container'>  
            <h2>Login</h2>
            <p>Enter to retrieve login access</p>
            <form action="" onSubmit={handleSubmit}>
                <div className='login-form-inputs'>
                    <input type='text' placeholder='User ID' name='userid'
                    onChange={handleInput} requried/>
                    <br></br>
                    {errors.userid && <span className='input-error'> {errors.userid} </span>}
                    <br></br>
                    <input type='text' placeholder='New password' name='password'
                    onChange={handleInput} requried/>
                    <br></br>
                    {errors.password && <span className='input-error'> {errors.password} </span>}
                    <br></br><br></br>
                </div>
                <button type='submit' class='login-submit-btn'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForgot