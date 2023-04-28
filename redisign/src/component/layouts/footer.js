import React from 'react'
import test from '../../images/pngLogoFooter.png'
import Back from '../../images/5166950.jpg'

import { NavLink, Link, BrowserRouter } from 'react-router-dom'

const footer = () => {
    return (
        <>

            <footer className="site-footer style-3" id="footer" >

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <div className="footer-logo">

                                        <NavLink to="/"><img src={test} alt="" /></NavLink>


                                    </div>
                                    <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
               avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années </p>
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
                            <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                <div className="widget widget_services style-1">
                                    <h5 className="footer-title">Nos liens</h5>
                                    <ul>
                                        <li><NavLink to="/">الرئيسية</NavLink></li>
                                        <li><NavLink to={"#"}>عن الشركة</NavLink></li>
                                        <li><NavLink to={"#"}>اهدافنا</NavLink></li>
                                        <li><NavLink to="#">رايتنا</NavLink></li>
                                        <li><NavLink to="#">تواصل معنا</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                         #
                            <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
                                <div className="widget widget_getintuch">
                                    <h5 className="footer-title">Contact</h5>
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone gradient"></i>
                                            <span>966551543724+<br /></span>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope gradient"></i>
                                            <span>info@wami.sa<br /></span>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker gradient"></i>
                                            <span>السعودية</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom part --> */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 text-center">
                                <span className="copyright-text">WAMI © 2023 <NavLink to="#!" target="_blank"></NavLink></span>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default footer
