import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import img56 from '../../images/img56.png'
const Goals = () => {
    const [open, setOpen] = useState("p2")
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner">
                
				<div className="container">
                    <h2>الأقسام/أهدافنا</h2>
					<div className="section-head style-3 text-center mb-4">
						<h5 className="title">دعم القطاع العسكري واألمني باإلمكانات المتاحة، ودفع عجلة التنمية بشكل مباشر والمساهمة 
في زيادة الناتج المحلي اإلجمالي بحلول العام 2030م، وذلك لتعزز قدرات القوات المسلحة 
واألجهزة األمنية في المملكة من استقالليتها وجاهزيتها ، من خالل المساعدة في بناء قطاع 
صناعات عسكرية وأمنية محلية</h5>
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
