import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './clubbystudent.css';
import StudentHeading from '../../common/heading/studentheading/StudentHeading';
import axios from 'axios'

const ClubProfileStudent = () => {
    const { club } = useParams();

    const [clubData, setClubData] = useState([]);
    const [clubEventData, setClubEventData] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const clubDetails = await axios.get('http://localhost:8081/'+club);
            const eventDetails = await axios.get('http://localhost:8081/event/'+club);
            setClubData(clubDetails.data);
            setClubEventData(eventDetails.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div>
            <StudentHeading />
            <div className='profile-banner'>
                <div className='profile-image'></div>
                {clubData.map((club, index) => (
                <div className='profile-heading' key={index}>
                    <p className='profile-title-1'>{club.club}</p>
                    <p className='profile-club-domain'>{club.domain}</p>
                </div>
                ))}
            </div>
            <div className='profile-content'>
                <p className='title'><center>About Us</center></p>
                <p><center>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aut fugit reiciendis officiis voluptatem quas? Dicta voluptas deleniti, saepe doloribus consequatur, alias nesciunt possimus officia, doloremque reiciendis cupiditate facere dolores.</center></p>
                <div className='club-head'>
                    <p className='title'><center>Meet The Club Leads!</center></p>
                    <div className='profile-cards'>
                    {clubData.map((club, index) => (
                        <div className='profile-card-text' key={index}>
                            <section className='circular-card'></section>
                            <section><p className='club-head-name'>{club.name}</p></section>
                            <section><p className='club-head-srn'>{club.srn}</p></section>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='events'>
                    <p className='title'><center>Upcoming Events</center></p>
                </div>
                
            </div>
            <section className='event-banner'></section>
            <div className='event-registration'>
            {clubEventData.map((club, index) => (
                <div className='event-registration-left'>
                    <p className='profile-title-event'>{club.event_name}</p>
                    <Link to='/registration'><button type='submit' className='register-button'>Register</button></Link>
                </div>
            ))}
            {clubEventData.map((club, index) => (
                <div className='event-registration-right'>
                    <p className='event-element'>An event hosted by {club.club}</p>
                    <br></br>
                    <p className='event-element'>Date: {club.start_date} - {club.end_date}</p>
                    <p className='event-element'>Timings: {club.start_time} - {club.end_time}</p>
                    <p className='event-element'>Venue: {club.venue}</p>
                    <br></br><br></br>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ClubProfileStudent