import React from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/Header'

import Service from '../layouts/Service'

import AboutUs from '../layouts/AboutUs'
import BlogSection from '../layouts/BlogSection'
import HeaderAbout from '../layouts/HeaderHeroAbout'


const About = () => {
    return (
        <>

            <Header/>
            <HeaderAbout/>
            <AboutUs/>
            <Service/>
            <BlogSection/>
            <Footer/> 
           
        </>
    )
}

export default About
