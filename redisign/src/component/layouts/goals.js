import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import img56 from '../../images/img56.png'
import {useTranslation} from 'react-i18next'


const Goals = () => {
    const [t , i18n] = useTranslation();
    const [open, setOpen] = useState("p2")
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner">
                
				<div className="container">
                    <h2>{t("goalsTitle")}</h2>
					<div className="section-head style-3 text-center mb-4">
						<h5 className="title">{t("goalsContent")}</h5>
						<div className="dlab-separator style-2 bg-primary"></div>
					</div>

					
			
				</div>
                <div className="contai">
        <div className="row ">
         
            <div className="col-lg-12" data-wow-duration="2s" data-wow-delay="0.4s">
               
            <div >
                <img src={img56} className="move-2  center-I" alt="" />
              </div>
                        
                  
                 
            </div>
        </div>
    </div>
              
			</section>
		</>
    )
}

export default Goals
