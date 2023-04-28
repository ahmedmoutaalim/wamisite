import React from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/Header'
import HeaderHero from '../layouts/HeaderHero'
import Service from '../layouts/Service'
import AboutUs from '../layouts/AboutUs'

import BlogSection from '../layouts/BlogSection'

import Client from '../layouts/Client'
import GetInTouch from '../layouts/GetInTouch'

import Ssection from '../layouts/S-section'



const Home = () => {
    return (
        <>    

            <Header/>    
            <HeaderHero/>
            <Service/>
            <Client/> 
            <AboutUs/>     
            <BlogSection/>  
            <GetInTouch/>
            <Ssection/>
            <Footer/> 
              
        </>
    )
}

export default Home
