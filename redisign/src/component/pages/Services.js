import React from 'react'
import Footer from '../layouts/footer'
import Header from '../layouts/Header'
import HeaderHero from '../layouts/HeaderHero'
import Service from '../layouts/Service'
import Ssection from '../layouts/S-section'
import Client from '../layouts/Client'


const services = () => {
    return (
        <>
      
            <Header/>
            <HeaderHero/>
            <Service/>
            <Ssection/>
            <Client/>  
            <Footer/> 
           
        </>
    )
}

export default services
