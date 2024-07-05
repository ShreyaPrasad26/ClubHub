import React from 'react';
import './googlecalendar.css'
import StudentHeading from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/studentheading/StudentHeading.jsx'
import FooterFeed from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/footer/FooterFeed.jsx'

  export default function GoogleCalendar() {
    return (
      <div>
        <StudentHeading/>
        <div className='App'>
        <iframe src="https://calendar.google.com/calendar/embed?src=0f7a0f250b9c2163405f2c0dde2f40f020bcbee9ab3b785bfc1d410ab5d55017%40group.calendar.google.com&ctz=Asia%2FKolkata" style={{border: 0}} width="800" height="600" frameborder="0"></iframe>
        </div>
        <FooterFeed></FooterFeed>
      </div>
    );
  }