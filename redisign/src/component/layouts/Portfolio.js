import React from 'react'
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
// import {Link, BrowserRouter} from 'react-router-dom'
import Image from 'next/image'
import pic1 from '../../images/projects/project-1/pic1.jpg'
import pic2 from '../../images/projects/project-1/po7.png'
import pic3 from '../../images/projects/project-1/port3.png'
import pic4 from '../../images/projects/project-1/por2.png'
import pic5 from '../..//images/projects/project-1/por3.png'
import pic6 from '../../images/projects/project-1/por8.png'


const Portfolio = () => {
    const portfolio = [
        {
            title: "Software Landing Page Design",
            category: ["all", "web_development"],
            img: (
             
                <img  src={pic1} /> 
                 
            ),
            author: "Jhone Doe",
        },
        {
            title: "Software Landing Page Design",
            category: ["all", "app desktop"],
            img: (
               
                <img src={pic2}
                 />
                   
            ),
            author: "Jhone Doe",
        },
        
        {
            title: "Software Landing Page Design",
            category: ["all", "web_development"],
            img: (
              
                <img src={pic3}
                 />
            ),
            author: "Jhone Doe",
        },
        {
            title: "Software Landing Page Design",
            category: ["all", "web_development"],
            img: (
            
                <img src={pic4}
                 />
            ),
            author: "Jhone Doe",
        },
        {
            title: "Software Landing Page Design",
            category: ["all", "mobile_app"],
            img: (
              
                <img src={pic5}
               />
            ),
            author: "Jhone Doe",
        },
        {
            title: "Software Landing Page Design",
            category: ["all", "web_development"],
            img: (
            
                <img src={pic6}
               />
            ),
            author: "Jhone Doe",
        },
    ];

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map((p) => ({
            ...p,
            filtered: p.category.includes(filter),
        }));
        setProjects(filtered);
    }, [filter]);
    return (
        <>
            <div className="site-filters style-3 clearfix center m-b40">
                <ul className="filters">
                    <li className={`btn ${filter === "all" ? "active" : ""}`}>
                        <a active={filter === "all"} onClick={() => setFilter("all")}>
                            All
                        </a>
                    </li>
                    <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
                        <a
                            active={filter === "web_design"}
                            onClick={() => setFilter("web_design")}
                        >
                            Web Design
                        </a>
                    </li>
                    <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
                        <a
                            active={filter === "web_development"}
                            onClick={() => setFilter("web_development")}
                        >
                            Web Development
                        </a>
                    </li>
                    <li className={`btn ${filter === "app desktop" ? "active" : ""}`}>
                        <a
                            active={filter === "app desktop"}
                            onClick={() => setFilter("app desktop")}
                        >
                           app desktop
                        </a>
                    </li>
                    <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
                        <a
                            active={filter === "mobile_app"}
                            onClick={() => setFilter("mobile_app")}
                        >
                            Mobile App
                        </a>
                    </li>
                    <li className={`btn ${filter === "seo" ? "active" : ""}`}>
                        <a active={filter === "seo"} onClick={() => setFilter("seo")}>
                            SEO
                        </a>
                    </li>
                </ul>
            </div>
            <SimpleReactLightbox>
                <SRLWrapper >
                    <div className="clearfix">
                        <ul id="masonry" className="row" data-column-width="3">
                            {projects.map((item) =>
                                item.filtered === true ? (
                                    <>
                                        <li
                                            className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                                            data-wow-duration="2s"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="dlab-box  style-3 m-b30">
                                                <div className="dlab-m ">{item.img}</div>
                                                {/* <div className="dlab-info">
                                <h5 className="title">
                                  <a href="javascript:void(0);">{item.title}</a>
                                </h5>
                                <p className="post-author">
                                  By <a href="javascript:void(0);">{item.author}</a>
                                </p>
                                  </div> */}
                                            </div>
                                        </li>
                                    </>
                                ) : (
                                    ""
                                )
                            )}
                        </ul>
                    </div>
                </SRLWrapper >
            </SimpleReactLightbox>

        </>
    )
}

export default Portfolio
