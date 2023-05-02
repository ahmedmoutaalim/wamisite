import React,{useEffect, useState} from 'react'
import { NavLink , Link } from 'react-router-dom';
import wLogo from '../../images/logo.png'
import {useTranslation} from 'react-i18next'
import useScrollPosition from "use-scroll-position";



const Header = () => {
    const [t , i18n] = useTranslation();
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
                                <li><NavLink to={"/"}><span className={'clr'} >{t('title')}</span></NavLink></li>
                                <li><NavLink to="/services"><span className={'clr'}>عن الشركة</span></NavLink></li>
                                <li className={`${open === "blog" ? "open " : ""}`}><a onClick={() => setOpen("blog")}><span className={'clr'}>الاقسام</span><i className="fa fa-chevron-down clr"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link to="/ourgoals"><a>اهدافنا</a></Link></li>
                                        <li><Link href="/"><a>رايتنا</a></Link></li>
                                        <li><Link href="/"><a>ما يميزنا</a></Link></li>
                                        <li><Link to="/Direction"><a>الادارة التنفيدية</a></Link></li>
                                    </ul>
                                </li>
                                <li><NavLink to={"/About"}><span className={'clr'}>اخبارنا</span></NavLink></li>
                              
                        
                                 
                               

                                <li><NavLink to="/contact"><span className={'clr'}>تواصل معنا</span></NavLink></li>

                                <div class="switch">
	    <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"/>
	    <label for="language-toggle"></label>
	    <button onClick={()=>{i18n.changeLanguage('ar')}} class="on">AR</button>
	    <button onClick={()=>{i18n.changeLanguage('en')}} class="off">EN</button>
  	</div>

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
