import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Service = () => {
    const [open, setOpen] = useState("p2")
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner">
                
				<div className="container">
					<div className="section-head style-3 text-center mb-4">
						<h4 className="title">شركة سعودية ناشئة بهدف خلق فرص الستيراد وتصنيع كافة المنتجات الدفاعية واألمنية لدعم 
القوات المسلحة السعودية، بقيادة فريق عمل متخصص في األمور الدفاعية واألمنية وفريق اداري 
مميز وله الكثير من اإلنجازات في القطاع ين العسكري والتجاري وخبرة تتجاوز الربع قرن بهذه 
المجاالت ، وتعمل الشركة على التفاهم مع الشركات العالمية المتخصصة في الدفاع واألمن 
 التقنية واألجهزة الثقيلة والخفيفة ، 
الستيراد كافة المنتجات الدفاعية واألمنية بجميع أنواعها سوا 
والراد ارات بجميع أنواعها والطائرة بدون طيار، و توريد الذخائر الذكية، والذخائر الموجهة 
وتوريد القنابل اليدوية والصواريخ مضاد ات الدبابات </h4>
						<div className="dlab-separator style-2 bg-primary"></div>
					</div>

					
					<div className="row">
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t ">ما يميزنا</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">المزيد</p></NavLink>
						</div>
						
	{/* ///////////////////////////////////////////////////////////////////////////////////// */}

	<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-2 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-2 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t ">رؤيتنا</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">المزيد</p></NavLink>
						</div>

	{/* ///////////////////////////////////////////////////////////////////////////////////// */}


	<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<div  className={`${open === "p1" ? "icon-bx-wraper style-5 mili-3 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 mili-3 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							
								<div className="n-content">
									<h4 className="center-t ">أهدافنا</h4>	
								</div>
							</div>
							<NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">المزيد</p></NavLink>
						</div>
					</div>
				</div>
              
			</section>
		</>
    )
}

export default Service
