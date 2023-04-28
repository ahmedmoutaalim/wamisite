import React from 'react'
import Slider from "react-slick";
import blue1 from '../../images/logo/logo-blue1.png'
import blue2 from '../../images/logo/logo-blue2.png'
import blue3 from '../../images/logo/logo-blue3.png'
import blue4 from '../../images/logo/logo-blue4.png'
import blue5 from '../../images/logo/logo-blue5.png'
import blue6 from '../../images/logo/logo-blue6.png'
import light1 from '../../images/logo/logo-light1.png'
import light2 from '../../images/logo/logo-light2.png'
import light3 from '../../images/logo/logo-light3.png'
import light4 from '../../images/logo/logo-light4.png'
import light5 from '../../images/logo/logo-light5.png'
import light6 from '../../images/logo/logo-light6.png'


const ClientSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
		
    };
    return (
        <>
        {/* <!-- Clients Logo --> */}


        <Slider {...settings}>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue1} alt="" />
                    <img className="logo-hover" src={light1} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue2} alt="" />
                    <img className="logo-hover" src={light2} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue3} alt="" />
                    <img className="logo-hover" src={light3} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue6} alt="" />
                    <img className="logo-hover" src={light6} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue4} alt="" />
                    <img className="logo-hover" src={light4} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue5} alt="" />
                    <img className="logo-hover" src={light5} alt="" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="logo-main" src={blue6} alt="" />
                    <img className="logo-hover" src={light6} alt="" />
                </div>
            </div>
            
        </Slider>
    </>
    )
}

export default ClientSlider
