import React,  { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './adminprofile.css';
import StudentHeading from '../../common/heading/studentheading/StudentHeading.jsx'
import axios from 'axios';

const AdminProfile = () => {
    const { email } = useParams();
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
    try {
        const adminDetails = await axios.get('http://localhost:8081/admin/'+email);
        setAdminData(adminDetails.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };

    return(
        <>
            <StudentHeading/>
            <div class='profile-banner'>
                <div class='profile-image'></div>
                {adminData.map((admin, index) => (
                <div class='profile-heading' key={index}>
                    <p class='profile-title-1'>{admin.institute}</p>
                </div>
                ))}
            </div>
            <div class='student-profile-details'>
                    <div class='student-about'>
                        <p class='profile-title'>About</p>
                        <div class='profile-section-rect'>
                        {adminData.map((admin, index) => (
                            <div className='profile-about-content' key={index}>
                                <p>Mail ID: {admin.email}</p>
                                <p>Phone number: {admin.phno}</p>
                                <p>Website: {admin.web}</p>
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AdminProfile
