import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentHeading from './common/heading/studentheading/StudentHeading';
import { useParams } from 'react-router-dom';
import './dummyPage.css'

const Dummy = () => {
    const { club } = useParams();
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({
        club: '',
        clubsList: [],
    });

    useEffect(() => {
        // Fetch the list of clubs when the component mounts
        fetchClubs();
    }, []);
    
    const fetchClubs = async () => {
        try {
            const response = await axios.get('http://localhost:8081/eventarchive/clubsList');
            setFilter((prevFilter) => ({ ...prevFilter, clubsList: response.data }));
        } catch (error) {
            console.error('Error fetching clubs:', error);
        }
    };

    const fetchData = async () => {
        console.log("Inside Fetch Data");
        const clubName = filter.club
        try {
            const response = await axios.get('http://localhost:8081/eventarchive/dummy/'+clubName);
            console.log("Value:", response.data);
            setData(response.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        }
    };
    

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    return (
        <>
            <StudentHeading />
            <div>
                <h1 className='titleEvent'>Event Archives</h1>
                <div className='Heading'>
                    <label>Club Name:</label>
                    <select className='custom-select' name="club" value={filter.club} onChange={handleFilterChange}>
                        <option value="">Select a Club</option>
                        {filter.clubsList.map((club) => (
                            <option key={club.id} value={club.club}>
                                {club.club}
                            </option>
                        ))}
                    </select>
                    <button onClick={fetchData}>Filter</button>
                </div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Club</th>
                            <th>Start Date</th>
                            <th>Start Time</th>
                            <th>End Date</th>
                            <th>End Time</th>
                            <th>Venue</th>
                            <th>No. of registrations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>{row.event_name}</td>
                                <td>{row.club}</td>
                                <td>{row.start_date}</td>
                                <td>{row.start_time}</td>
                                <td>{row.end_date}</td>
                                <td>{row.end_time}</td>
                                <td>{row.venue}</td>
                                <td>{row.No_of_Participants}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Dummy;
