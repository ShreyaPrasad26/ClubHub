import React,  { useEffect, useState } from 'react'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import './login.css';
import Validation from './LoginValidation';
import axios from 'axios'

const Login = () => {
    const [values,setValues] = useState({
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

        if (!errors.email && !errors.password) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    const { success, user_type } = res.data;
                    if (success) {
                        switch (user_type) {
                            case 'student':
                                navigate('/student/'+values.email);
                                break;
                            case 'club':
                                navigate('/club/'+values.email);
                                break;
                            case 'admin':
                                navigate('/admin/'+values.email);
                                break;
                            default:
                                navigate('/login');
                        }
                    } else {
                        alert("User not found");
                        console.log('Invalid email or password');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };
    
    /*
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values) 
            .then(res => {
                if (res.data === "Success"){
                    if (res.data.user_type === "student"){
                        navigate('/student/profile');
                    }
                    else if (res.data.user_type === "club"){
                        navigate('/club/profile');
                    }
                    else if (res.data.user_type === "admin"){
                        navigate('/admin/profile');
                    }
                    else{
                        alert("User not found");
                    }
                }
            })
            .catch(err => console.log(err));
        }
    }
    */

    return (
    <div>
        <Header/>
        <div className='login-flex-container'>
            <h2>Login</h2>
            <p>Welcome back!</p>
            <p>Did you <Link to='/login/forgot'><span class='forgot-password'>forget your password?</span></Link></p>
            <form action="" onSubmit={handleSubmit}>
                <div className='login-form-inputs'>
                    <input type='email' placeholder='Email ID' name='email'
                        onChange={handleInput} requried/>
                        <br></br>
                        {errors.email && <span className='input-error'> {errors.email} </span>}
                        <br></br>
                        
                    <input type='text' placeholder='Password' name='password'
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

export default Login