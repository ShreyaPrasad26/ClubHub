import React,  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import StudentHeading from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/studentheading/StudentHeading.jsx'
import './venue.css'
import FooterFeed from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/footer/FooterFeed.jsx'
import axios from 'axios'

const Venue = () => {
    const [values, setValues] = useState({
        club: '',
        event_name: '',
        start_date:'',
        start_time:'',
        end_data:'',
        end_time:'',
        venue:''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/venue', values)
        .catch(err => console.log(err))
    }    

    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const [num3, setNum3] = useState(2023);
    const [num4, setNum4] = useState(1);
    const [num5, setNum5] = useState(1);
    const [num6, setNum6] = useState(2023);
    const [hourValStart, setNum7] = useState(1);
    const [minValStart, setNum8] = useState(0);
    const [hourValEnd, setNum9] = useState(1);
    const [minValEnd, setNum10] = useState(0);
    const ven1 = "Seminar Hall A";
    const ven2 = "Seminar Hall B";
    const ven3 = "Seminar Hall C";
    const ven4 = "Seminar Hall D";
    const ven5 = "Auditorium 1";
    const ven6 = "Auditorium 2";
    const ven7 = "Auditorium 3";
    const ven8 = "Auditorium 4";
    const [event, setEvent] = useState('');

    function handleVenueChange(e){
      event.venue = e.target.value;
    }


    const incDayStart = () => {
        if (num1<31)
            setNum1(num1 + 1);
    }

    const decDayStart = () => {
        if (num1> 1)
            setNum1(num1 - 1);
    }

    const incMonthStart = () => {
        if (num2<12)
            setNum2(num2 + 1);
    }

    const decMonthStart = () => {
        if (num2> 1)
            setNum2(num2 - 1);
    }

    const incYearStart = () => {
        if (num3<2040)
            setNum3(num3 + 1);
    }

    const decYearStart = () => {
        if (num3> 2023)
            setNum3(num3 - 1);
    }

    const incDayEnd = () => {
        if (num4<31)
            setNum4(num4 + 1);
    }

    const decDayEnd = () => {
        if (num4> 1)
            setNum4(num4 - 1);
    }

    const incMonthEnd = () => {
        if (num5<12)
            setNum5(num5 + 1);
    }

    const decMonthEnd = () => {
        if (num5> 1)
            setNum5(num5 - 1);
    }

    const incYearEnd = () => {
        if (num6<2040)
            setNum6(num6 + 1);
    }

    const decYearEnd = () => {
        if (num6> 2023)
            setNum6(num6 - 1);
    }

    const inchourStart = () => {
        if (hourValStart<24)
            setNum7(hourValStart + 1);
    }

    const dechourStart = () => {
        if (hourValStart> 0)
            setNum7(hourValStart - 1);
    }

    const incminStart = () => {
        if (minValStart<55)
            setNum8(minValStart + 5);
    }

    const decminStart = () => {
        if (minValStart> 0)
            setNum8(minValStart - 5);
    }

    const inchourEnd = () => {
        if (hourValEnd<24)
            setNum9(hourValEnd + 1);
    }

    const dechourEnd = () => {
        if (hourValEnd> 0)
            setNum9(hourValEnd - 1);
    }

    const incminEnd = () => {
        if (minValEnd<55)
            setNum10(minValEnd + 5);
    }

    const decminEnd = () => {
        if (minValEnd> 0)
            setNum10(minValEnd - 5);
    }
  const submitted = () => {
    const start_date = num1+'.'+num2+'.'+num3;
    const start_time = hourValStart+':'+minValStart;
    const end_date = num4+'.'+num5+'.'+num6;
    const end_time = hourValEnd+':'+minValEnd;
    alert("Event Venue Booked");
  }
    return(
    <div>
        <StudentHeading/>
        <p className='title'>Event Venue Booking</p>
        <div className='event-container'>
          <br></br>
          <div className='Carousel'>
          <>
            <form>
              <div className='event-form'>
                <input type='text' placeholder='Club name' name='club'></input>
                <input type='text' placeholder='Enter Event Name' name='event_name'></input>
              </div>
            </form>
            <p className='dt-title'>Start Date and Time</p>
            <div className='start-container'>
            <div className='btn-container-col-1'>
                    <label>Day</label>
                    <div className='btn-div'>
                        <p><button onClick={decDayStart}>-</button>
                        <span>{num1}</span>
                        <button onClick={incDayStart}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Month</label>
                    <div className='btn-div'>
                        <p><button onClick={decMonthStart}>-</button>
                        <span>{num2}</span>
                        <button onClick={incMonthStart}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Year</label>
                    <div className='btn-div'>
                        <p><button onClick={decYearStart}>-</button>
                        <span>{num3}</span>
                        <button onClick={incYearStart}>+</button></p>
                    </div>
                </div>
                <div className='middle-container'></div>
                <div className='btn-container-col-1'>
                    <label>Hour</label>
                    <div className='btn-div'>
                        <p><button onClick={dechourStart}>-</button>
                        <span>{hourValStart}</span>
                        <button onClick={inchourStart}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Min</label>
                    <div className='btn-div'>
                        <p><button onClick={decminStart}>-</button>
                        <span>{minValStart}</span>
                        <button onClick={incminStart}>+</button></p>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <p className='dt-title'>End Date and Time</p>
            <div className='start-container'>
            <div className='btn-container-col-1'>
                    <label>Day</label>
                    <div className='btn-div'>
                        <p><button onClick={decDayEnd}>-</button>
                        <span>{num4}</span>
                        <button onClick={incDayEnd}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Month</label>
                    <div className='btn-div'>
                        <p><button onClick={decMonthEnd}>-</button>
                        <span>{num5}</span>
                        <button onClick={incMonthEnd}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Year</label>
                    <div className='btn-div'>
                        <p><button onClick={decYearEnd}>-</button>
                        <span>{num6}</span>
                        <button onClick={incYearEnd}>+</button></p>
                    </div>
                </div>
                <div className='middle-container'></div>
                <div className='btn-container-col-1'>
                    <label>Hour</label>
                    <div className='btn-div'>
                        <p><button onClick={dechourEnd}>-</button>
                        <span>{hourValEnd}</span>
                        <button onClick={inchourEnd}>+</button></p>
                    </div>
                </div>
                <div className='btn-container-col-1'>
                    <label>Min</label>
                    <div className='btn-div'>
                        <p><button onClick={decminEnd}>-</button>
                        <span>{minValEnd}</span>
                        <button onClick={incminEnd}>+</button></p>
                    </div>
                </div>
            </div>
        </>
          </div>
          <br></br>
          </div>
          <div className='room-container-outer'>
            <label>Seminar hall</label>
            <section className='room-container'>
              <button onClick = {handleInput} className='room-rect' name='seminar-A'><p>A</p></button>
              <button onClick = {handleInput} className='room-rect' name='seminar-B'><p>B</p></button>
              <button onClick = {handleInput} className='room-rect' name='seminar-C'><p>C</p></button>
              <button onClick = {handleInput} className='room-rect' name='seminar-D'><p>D</p></button>
            </section>
          </div>
          <div className='room-container-outer'>
            <label>Auditorium</label>
            <section className='room-container'>
              <button onClick = {handleInput} className='room-rect' name='audi-A'><p>1</p></button>
              <button onClick = {handleInput} className='room-rect' name='audi-B'><p>2</p></button>
              <button onClick = {handleInput} className='room-rect' name='audi-C'><p>3</p></button>
              <button onClick = {handleInput} className='room-rect' name='audi-D'><p>4</p></button>
            </section>
          </div>
          <div className='submit'>
          <button onClick={submitted} onSubmit={handleSubmit} type='submit' class='submit-button'>Submit</button>
          </div>
        <FooterFeed/>
    </div>
  )
}

export default Venue