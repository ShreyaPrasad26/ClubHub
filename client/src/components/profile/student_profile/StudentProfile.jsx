import React,  { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import './studentprofile.css';
import StudentHeading from '../../common/heading/studentheading/StudentHeading'
import axios from 'axios';

const StudentProfile = () => {
  const { email } = useParams();
  const [studentData, setStudentData] = useState([]);
  const [formData, setFormData] = useState({
    club: '',
    designation: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const studentDetails = await axios.get('http://localhost:8081/student/'+email);
      setStudentData(studentDetails.data);
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

    axios.post('http://localhost:8081/clubmembers/'+email, formData)
      .then((response) => {
        console.log('Club details updated successfully');
        // Handle any further actions you need after successful update
      })
      .catch((error) => {
        console.error('Error updating club details:', error);
        // Handle error scenarios
      });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <StudentHeading />
      <div className='profile-banner'>
        <div className='profile-image'></div>
        {studentData.map((student, index) => (
          <div className='profile-heading' key={index}>
            <p className='profile-title-1'>{student.fname} {student.lname}</p>
            <p className='profile-student-srn'>{student.srn}</p>
          </div>
        ))}
      </div>
      <div className='student-profile-details'>
        <div>
          <p className='profile-title'>About</p>
          <div className='profile-section-rect'>
            {studentData.map((student, index) => (
              <div className='profile-about-content' key={index}>
                <p>Mail ID: {student.email}</p>
                <p>Phone number: {student.phno}</p>
                <p>CGPA: {student.cgpa}</p>
                <p>Semester: {student.semester}</p>
                <p>Section: {student.section}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='student-about'>
          <p className='profile-title'>Club Membership</p>
          <div className='profile-section-rect2'>
            {!isEditing ? (
                
              <div>
                <p>
                  Club Name: {formData.club}
                </p>
                <p>
                  Designation: {formData.designation}
                </p>
                <button onClick={handleEdit}>Edit</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>
                  Club Name:
                  <input
                    type="text"
                    name="club"
                    value={formData.club}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Designation:
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
   

export default StudentProfile
