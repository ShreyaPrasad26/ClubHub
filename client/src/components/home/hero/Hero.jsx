import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = ()=>{
    return (
        <>
            <section className='hero'></section>
            <Title title='One place for student clubs' subtitle='ClubHub'/>
            <section className='feature-grid'>
                <section className='feature-gallery'>
                    <section className='top-row'>
                        <div className='grid-img-big'></div>
                        <div className='top-right'>
                            <h2>Features</h2>
                            <p>Optimize student club operations with our intuitive management software</p>
                            <div className='top-small'>
                                <div className='grid-img-small'></div>
                                <div className='grid-img-small'></div>
                            </div>
                        </div>
                    </section>
                    <section className='bottom-row'>
                        <div className='grid-img-small'></div>
                        <div className='grid-img-small'></div>
                        <div className='grid-img-small'></div>
                        <div className='grid-img-small'></div>
                    </section>
                </section>
            </section>

            <section id='about-us-section'>
                <Title title='Get to know us'/>
                <section className='about-row'>
                    <div className='about-card'></div>
                    <div className='about-content'>
                        <h2>Founder name</h2>
                        <p className='founder-content'>As an entrepreneurial innovator, she propels ClubHub, leading with vision, expertise, and unwavering commitment to excellence.</p>
                    </div>
                </section>

                <section className='about-row'>
                    <div className='about-content'>
                        <h2>Founder name</h2>
                        <p className='founder-content'>As an entrepreneurial innovator, she propels ClubHub, leading with vision, expertise, and unwavering commitment to excellence.</p>
                    </div>
                    <div className='about-card'></div>
                </section>
            </section>
        </>
    )
}

export default Hero