/*

import React,  { useEffect, useState } from 'react'
import StudentHeader from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/studentheading/StudentHeading.jsx'
import Footer from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/footer/Footer.jsx'
import {Link, useNavigate} from 'react-router-dom'
import './registration.css'
import Validation from './Validation'
import axios from 'axios'

const Registration = () => {

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
        if (errors.club === "" && errors.event_name === "" && errors.srn === "" && errors.name === ""){
            axios.post('http://localhost:8081/signup/admin', values) 
            .then(res => {
                navigate('/feed');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div>
        <StudentHeader/>
        <br></br>
        <br></br>
          <h1>Event Registration</h1>
        <form className='reg-form' action ='' onSubmit={handleSubmit}>
          <br></br>
          <input type='text' placeholder='Club' name='club' onChange={handleInput} required></input>
          <br></br>
          {errors.club && <span className='input-error'> {errors.club} </span>}
          <br></br>
          <input type='text' placeholder='Event Name' name='event_name' onChange={handleInput} required></input>
          <br></br>
                            {errors.event_name && <span className='input-error'> {errors.event_name} </span>}
                            <br></br>
          <input type='text' placeholder='SRN' name='srn' onChange={handleInput} required></input>
          <br></br>
          {errors.srn && <span className='input-error'> {errors.srn} </span>}
          <br></br>
          <input type='text' placeholder='Name' name='name' onChange={handleInput} required></input>
          <br></br>
          {errors.name && <span className='input-error'> {errors.name} </span>}
          <br></br>
          
        </form>
        <button class='login-submit-btn'>Submit</button>
        <Footer/>
    </div>
  )
}

export default Registration

*/

/*
import React,  { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/signup/admin_signup/adminsignup.css'
import Validation from './Validation'
import axios from 'axios'

function eventRegistration() {
    const [values,setValues] = useState({
        srn: '',
        event_name: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.club === "" && errors.event_name === "" && errors.srn === "" && errors.name === ""){
            axios.post('http://localhost:8081/eventRegistration', values) 
            .then(res => {
                navigate('/feed');
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
                        <h2>Event Registration</h2>
                        <button type='submit' className='admin-signup-submit-btn'>REGISTER</button>
                    </div>

                    <div className='admin-signup-form-right'>
                        <input type='text' placeholder='Name of Club' name='club'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.club && <span className='input-error'> {errors.club} </span>}
                            <br></br>
                        <input type='text' placeholder='Event name' name='event_name'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.event_name && <span className='input-error'> {errors.event_name} </span>}
                            <br></br>
                        <input type='text' placeholder='SRN' name='srn'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.srn && <span className='input-error'> {errors.srn} </span>}
                        <br></br>
                        <input type='text' placeholder='Student name' name='name'
                            onChange={handleInput} requried/>
                            <br></br>
                            {errors.name && <span className='input-error'> {errors.name} </span>}
                            <br></br>
                        <br></br>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default eventRegistration

*/
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentHeader from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/studentheading/StudentHeading.jsx'
import '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/signup/admin_signup/adminsignup.css'
import Validation from './Validation';
import axios from 'axios';

function EventRegistration() {
  const [values, setValues] = useState({
    srn: '',
    event_name: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      errors.club === '' &&
      errors.event_name === '' &&
      errors.srn === '' &&
      errors.name === ''
    ) {
      axios
        .post('http://localhost:8081/eventRegistration', values)
        .then((res) => {
          navigate('/feed');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <StudentHeader/>
      <div className='admin-signup-flex-container'>
        <form action='' onSubmit={handleSubmit} className='admin-signup-form'>
          <div className='admin-signup-form-left'>
            <h2>Event Registration</h2>
            <button type='submit' className='admin-signup-submit-btn'>
              REGISTER
            </button>
          </div>

          <div className='admin-signup-form-right'>
            <input
              type='text'
              placeholder='Name of Club'
              name='club'
              onChange={handleInput}
              required
            />
            <br />
            {errors.club && (
              <span className='input-error'> {errors.club} </span>
            )}
            <br />
            <input
              type='text'
              placeholder='Event name'
              name='event_name'
              onChange={handleInput}
              required
            />
            <br />
            {errors.event_name && (
              <span className='input-error'> {errors.event_name} </span>
            )}
            <br />
            <input
              type='text'
              placeholder='SRN'
              name='srn'
              onChange={handleInput}
              required
            />
            <br />
            {errors.srn && <span className='input-error'> {errors.srn} </span>}
            <br />
            <input
              type='text'
              placeholder='Student name'
              name='name'
              onChange={handleInput}
              required
            />
            <br />
            {errors.name && <span className='input-error'> {errors.name} </span>}
            <br />
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventRegistration;
