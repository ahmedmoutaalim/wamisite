import React,{useEffect, useState} from 'react'
import { NavLink , Link } from 'react-router-dom';
import wLogo from '../../images/logo.png'
import hLogo from '../../images/hLogo.png'
import useScrollPosition from "use-scroll-position";



const Header = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");


    const [toggle1, setToggle1] = useState(false);
    const [body_, setbody_] = useState();
    const [layout, setLayout] = useState("wide");
    const [header, setHeader] = useState("fixed");
    const [header_, setHeader_] = useState();
    const [sliderValu, setSliderValu] = useState(20);
  
    useEffect(() => {
      setbody_(document.querySelector("body"));
      setHeader_(document.getElementsByClassName("main-bar-wraper"));
    }, []);
  
    let scrollPosition = useScrollPosition();
    function toggle() {
      setToggle1(!toggle1);
    }
  
    header === "fixed" && scrollPosition > 10
      ? header_ && header_[0].classList.add("is-fixed")
      : header_ && header_[0].classList.remove("is-fixed");


      
    return (
        <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent mo-left">
   
                  
               
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                            <NavLink to="/">
                           <img className="custom-logo-white" src={wLogo} alt="" />
                           <img className="custom-logo" src={wLogo} alt="" />
                            
                            </NavLink>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                     
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <NavLink to="/"><img src={wLogo} alt="" /></NavLink>
                            </div>
                            <ul className="nav navbar-nav navbar ">
                                <li><NavLink to={"/"}><span className={'clr'} >الرئيسية</span></NavLink></li>
                                <li><NavLink to="/Blog"><span className={'clr'}>عن الشركة</span></NavLink></li>
                                <li className={`${open === "blog" ? "open " : ""}`}><a onClick={() => setOpen("blog")}><span className={'clr'}>الاقسام</span><i className="fa fa-chevron-down clr"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-large-left-sidebar"><a>اهدافنا</a></Link></li>
                                        <li><Link href="/blog-details-3"><a>رايتنا</a></Link></li>
                                        <li><Link href="/blog-details-3"><a>ما يميزنا</a></Link></li>
                                        <li><Link href="/blog-details-3"><a>الادارة التنفيدية</a></Link></li>
                                    </ul>
                                </li>
                                <li><NavLink to={"/About"}><span className={'clr'}>اخبارنا</span></NavLink></li>
                              
                                {/* <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/services-3"><a>Services</a></Link></li>
                                        <li><Link href="/services-details-3"><a>Détails des services</a></Link></li>
                                    </ul>
                                </li> */}
                                 <li><NavLink to="/Blog"><span className={'clr'}>عن الشركة</span></NavLink></li>
                                {/* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-large-left-sidebar"><a>Large Left Sidebar</a></Link></li>
                                        <li><Link href="/blog-details-3"><a>Blog Details</a></Link></li>
                                    </ul>
                                </li> */}

                                <li><NavLink to="/contact"><span className={'clr'}>تواصل معنا</span></NavLink></li>

                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                       <li><a className="fa fa-facebook" href="#"></a></li>
								     	<li><a className="fa fa-instagram" href="#"></a></li>
								    	<li><a className="fa fa-linkedin" href="#"></a></li>
								    	<li><a className="fa fa-twitter" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
         
        </header>
        {/* <!-- Header End --> */}

    </>
    )
}

export default Header
