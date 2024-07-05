import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './feed.css';
import StudentHeading from '../common/heading/studentheading/StudentHeading.jsx'
import FooterFeed from '../../components/common/footer/FooterFeed'

const Feed = () => {
    const colors = ['rgb(0,0,0,0.3)', 'rgb(0,0,0,0.3)', 'rgb(0,0,0,0.3)', 'rgb(0,0,0,0.3)'];
    const techClubLinks = [
        { name: 'Nexus' },
        { name: 'Embrione' },
        { name: 'GDSC' },
        { name: 'Apex' },
        { name: 'Aura' },
        { name: 'ADG' },
        { name: 'Shunya' },
        { name: 'Cognitive' }
    ]
    const culturalClubLinks = [
        { name: 'Sanskriti' },
        { name: 'Encore' },
        { name: 'Trance' },
        { name: 'Ninaada' },
        { name: 'MCoP' },
        { name: 'Meraki' },
    ]

    const developmentClubLinks = [
        { name: 'Kannadakoota' },
        { name: 'Enactus' },
        { name: 'Minerva' },
        { name: 'Pixelloid' },
        { name: 'MUNSoc' },
        { name: 'DebSoc' },
        { name: 'Pixels' },
        { name: 'ECell' },
    ]

    const commserviceClubLinks = [
        { name: 'CSR' },
        { name: 'Aikya' },
        { name: 'Ira' },
        { name: 'Rotaract' },
        { name: 'Dazzling Stars' },
        { name: 'Grow' },
        { name: 'Weal' },
        { name: 'Psychology club' }
    ];

    return (
        <div>
            <StudentHeading />
            <section className='slideshow'>
                <section className='slideshowSlider'>
                    {/* s */}
                    {colors.map((backgroundColor, index) => (
                        <section className="slide" key={index} style={{ backgroundColor }}>
                            <section className='slideshowButtons'>
                                {colors.map((_, idx) => (
                                    <section key={idx} className='slideshowButton'></section>
                                ))}
                            </section>
                        </section>
                    ))}
                </section>
            </section>
            <section className='title'>Club Domains</section>
            <section className='domains'>
                <div className='domain-container'>
                    <a href='#domain-container-spec-1'><button className='domain' id='domain-tech'/></a>
                    <p><a href='#domain-container-spec-1'>Tech</a></p>
                </div>
                <div className='domain-container'>
                    <a href='#domain-container-spec-3'><button className='domain' id='domain-cultural'></button></a>
                    <p><a href='#domain-container-spec-3'>Cultural</a></p>
                </div>
                <div className='domain-container'>
                    <a href='#domain-container-spec-2'><button className='domain'id='domain-dev'/></a>
                    <p><a href='#domain-container-spec-2'>Development</a></p>
                </div>
                <div className='domain-container'>
                    <a href='#domain-container-spec-4'><button className='domain' id='domain-comm'/></a>
                    <p><a href='#domain-container-spec-4'>Community Service</a></p>
                </div>
            </section>
            <div className='domain-container-specific-1' id='domain-container-spec-1'>
                <section className='domain-text-1'>
                    <section className='domain-title-1'>Tech</section>
                    <p>Tech clubs serve as incubators for creativity, offering workshops, hackathons, and collaborative projects. Tech clubs bridge the gap between theory and practice, empowering students to thrive in the ever-evolving world of technology.</p>
                </section>
                <section className='domain-clubs-1'>
                    <section className='domain-club-names-1'>
                        <section className='domain-club-names-row'>
                            {techClubLinks.map((club, index) => (
                                    <Link to={`/${club.name}`} key={index}><p>{club.name}</p></Link>
                                ))}
                        </section>
                    </section>
                </section>
            </div>
            <div className='domain-container-specific-2' id='domain-container-spec-3'>
                <section className='domain-text-2'>
                    <section className='domain-title-2'>Cultural</section>
                    <p>
Cultural student clubs ignite diversity on campus, celebrating a vibrant tapestry of traditions, languages, and customs. These clubs provide a platform for students to share and embrace their cultural heritage through events, performances, and collaborative projects. Fostering unity and understanding, cultural clubs enrich the academic experience by promoting cross-cultural dialogue and appreciation.</p>
                </section>
                <section className='domain-clubs-2'>
                    <section className='domain-clubs-row'>
                        {culturalClubLinks.map((club, index) => (
                            <Link to={`/${club.name}`} key={index}><p>{club.name}</p></Link>
                        ))}
                    </section>
                </section>
            </div>
            <div className='domain-container-specific-1' id='domain-container-spec-2'>
                <section className='domain-clubs-3'>
                    <section className='domain-club-names-3'>
                        <section className='domain-club-names-row'>
                            {developmentClubLinks.map((club, index) => (
                                <Link to={`/${club.name}`} key={index}><p>{club.name}</p></Link>
                            ))}
                        </section>
                    </section>
                </section>
                <section className='domain-text-1'>
                    <section className='domain-title-3'>Development</section>
                    <p>These clubs create dynamic spaces where students develop invaluable skills, shaping future leaders, orators, and entrepreneurs, ready to navigate the complexities of the global landscape.</p>
                </section>
            </div>
            <div className='domain-container-specific-2' id='domain-container-spec-4'>
                <section className='domain-text-2'>
                    <section className='domain-title-2'>Community Service</section>
                    <p>Student clubs focused on community service are catalysts for positive change. These groups empower students to address real-world challenges, fostering practical skills and a sense of empathy. Engaging in hands-on projects, from environmental initiatives to educational outreach, students actively contribute to building stronger and more cohesive communities. These clubs, promoting inclusivity and diversity, serve as platforms for leadership development and prepare students to be socially responsible leaders in the future.</p>
                </section>
                <section className='domain-clubs-2'>
                    <section className='domain-clubs-row'>
                        {commserviceClubLinks.map((club, index) => (
                            <Link to={`/${club.name}`} key={index}><p>{club.name}</p></Link>
                        ))}
                    </section>
                </section>
            </div>
        <FooterFeed/>
        </div>
    )
}

export default Feed