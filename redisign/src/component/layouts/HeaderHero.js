import React from 'react'

import img from '../../images/wowre.png'
import About from '../pages/About'
import { NavLink } from 'react-router-dom'
import * as loti from '../../images/start3.json'
import {useTranslation} from 'react-i18next'



const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loti.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const HeaderHero = () => {
	const [t , i18n] = useTranslation();
    return (
        <>
           	
			<div className="banner-three bg-primary bghero"  >
	  
			<div className="container" >
					<div className="banner-inner">
						<div className="row align-items-center">
							<div className="col-md-12">
								<div className="banner-content text-white">
									

									
									<h1 data-wow-delay="1s" data-wow-duration="3s" className="wow fadeInUp m-b20 ttl">   {t("header-title")}</h1>
								
									
								</div>
							
							</div>
				
							
					
						</div>
					
					</div>
					
				</div>
		
			
				
			</div>
		
		</>
		
    )
}

export default HeaderHero
