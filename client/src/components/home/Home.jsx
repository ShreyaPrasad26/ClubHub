import React from 'react'
import Hero from './hero/Hero'
import Header from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/heading/Header.jsx'
import Footer from '/Applications/XAMPP/xamppfiles/htdocs/planner/client/src/components/common/footer/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home