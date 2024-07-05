import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/login_main/Login'
import LoginForgot from './components/login/login_forgot/LoginForgot'
import Signup from './components/signup/SignupMain'
import StudentSignup from './components/signup/student_signup/StudentSignup'
import ClubSignup from './components/signup/club_signup/ClubSignup'
import AdminSignup from './components/signup/admin_signup/AdminSignup'
import StudentProfile from './components/profile/student_profile/StudentProfile'
import ClubProfile from './components/profile/club_profile/ClubProfile'
import AdminProfile from './components/profile/admin_profile/AdminProfile'
import ClubByStudent from './components/views/club_by_student/ClubByStudent'
import Feed from './components/feed/Feed'
import Venue from './components/event/venue/Venue'
import GoogleCalendar from './components/calendar/GoogleCalendar'
import Dummy from './components/Dummy'
import Registration from './components/event/registration/Registration'

/*switch is now routes*/
function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login/forgot' element={<LoginForgot/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signup/student' element={<StudentSignup/>}/>
          <Route path='/signup/club' element={<ClubSignup/>}/>
          <Route path='/signup/admin' element={<AdminSignup/>}/>
          <Route path='/student/:email' element={<StudentProfile/>}></Route>
          <Route path='/club/:email' element={<ClubProfile/>}></Route>
          <Route path='/:club' element={<ClubByStudent/>}></Route>
          <Route path='/admin/:email' element={<AdminProfile/>}></Route>
          <Route path='/feed' element={<Feed/>}></Route>
          <Route path ='/venue' element={<Venue/>}></Route>
          <Route path='/calendar' element={<GoogleCalendar/>}></Route>
          <Route path='/eventarchive/dummy' element={<Dummy/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App