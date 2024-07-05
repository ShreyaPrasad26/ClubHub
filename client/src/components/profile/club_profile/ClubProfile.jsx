
import React,  { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/profile/student_profile/studentprofile.css';
import ClubHeading from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/clubheading/ClubHeading.jsx'
import FooterFeed from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/footer/FooterFeed.jsx'
import axios from 'axios';

const ClubProfile = () => {
  const { email } = useParams();

  const [clubData, setClubData] = useState([]);
  const [headData, setHeadData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    srn:'',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const clubDetails = await axios.get('http://localhost:8081/club/'+email);
        const headDetails = await axios.get('http://localhost:8081/head/'+email);
        setClubData(clubDetails.data);
        setHeadData(headDetails.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    formData.email = email;
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

    return(
        <>
            <ClubHeading/>
            <div className='profile-banner'>
                <div className='profile-image'></div>
                {clubData.map((club, index) => (
                <div className='profile-heading' key={index}>
                    <p className='profile-title-1'>{club.club}</p>
                    <p className='profile-student-srn'>{club.domain}</p>
                </div>
                ))}
            </div>
            <div className='student-profile-details'>
                <div>
                <p className='profile-title'>About</p>
                <div className='profile-section-rect'>
                  <div className='profile-about-content' >
                    {clubData.map((club, index) => (
                    <div key={index}>
                        <p>Bio: {club.bio}</p>
                        <p>Email: {club.email}</p>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
                <p className='profile-title'>Club Heads</p>
                <div className='profile-section-rect'>
                  {headData.map((club, index) => (
                    <div key={index}>
                        <p>Name: {club.name}</p>
                        <p>SRN: {club.srn}</p>
                    </div>
                    ))}
                    </div>
                </div>

            <Link to='/venue'><button class='event-button'>Event registration</button></Link>
                         
            <FooterFeed/>
        </>
    )
}



export default ClubProfile