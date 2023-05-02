import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Service = () => {
	const [t , i18n] = useTranslation();
    const [open, setOpen] = useState("p2")
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner">
                
				<div className="container">
					<div className="section-head style-3 text-center mb-4">
						<h4 className="title"> {t("service-content")}  </h4>
						<div className="dlab-separator style-2 bg-primary"></div>
					</div>

					
					<div className="row">
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t "> {t("s-1")}</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">{t("btn-m")}</p></NavLink>
						</div>
						
	{/* ///////////////////////////////////////////////////////////////////////////////////// */}

	<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-2 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-2 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t ">{t("s-2")}</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">{t("btn-m")}</p></NavLink>
						</div>

	{/* ///////////////////////////////////////////////////////////////////////////////////// */}


	<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-3 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-3 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t ">{t("s-3")}</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">{t("btn-m")}</p></NavLink>
						</div>
					</div>
				</div>
              
			</section>
		</>
    )
}

export default Service
