import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import thum1 from '../../images/blog/default/thum1.jpg'
import thum2 from '../../images/blog/default/thum2.jpg'
import thum3 from '../../images/blog/default/thum3.jpg'
import thum4 from '../../images/blog/default/thum4.jpg'
import img from '../../images/img5.jpg'
import {useTranslation} from 'react-i18next'

const BlogSection = () => {
    const [t , i18n] = useTranslation();
    return (
        <>
        {/* <!-- Service --> */}
        <section className="content-inner">
            
            <div className="container" >
                <div className="section-head style-3 text-center mb-4">
                    <h4 className="title">{t("team-title")}</h4>
                    <div className="dlab-separator style-2 bg-primary"></div>
                </div>

                
                <div className="row ">
                    <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div  >
                        
                        <article class="card">
        <header class="card-thumb">
            <a href="#"><img src={img}  alt="" /></a>
        </header>
        
        <div class="card-body">
            <div class="card-category">
                <a href="#">الأستاذ :محمد حمد الناصر</a>
            </div>
            <h2 class="card-title">
                <a href="#">{t("member1")}  </a>
            </h2>
            <p class="card-description">
            {t("member-content1")}
            </p>
        </div>

        <footer class="card-footer">
            
        </footer>
    </article>
                        </div>

                    </div>
                    
{/* ///////////////////////////////////////////////////////////////////////////////////// */}

<div className=" wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div  >
                        
                        <article class="card">
        <header class="card-thumb">
            <a href="#"><img src={img}  alt="" /></a>
        </header>
        
        <div class="card-body">
            <div class="card-category">
                <a href="#">اللواء ركن متقاعد : خالد بن زامل الحوشان</a>
            </div>
            <h2 class="card-title">
                <a href="#"> {t("member2")}   </a>
            </h2>
            <p class="card-description">
            {t("member-content2")}
            </p>
        </div>

        <footer class="card-footer">
            
        </footer>
    </article>
                        </div>
                      
                    </div>

{/* ///////////////////////////////////////////////////////////////////////////////////// */}


<div className=" wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div  >
                        
                        <article class="card">
        <header class="card-thumb">
            <a href="#"><img src={img}  alt="" /></a>
        </header>
        
        <div class="card-body">
            <div class="card-category">
                <a href="#">الأستاذ: عبد الله ناصر حمد الناصر </a>
            </div>
            <h2 class="card-title">
                <a href="#"> {t("member3")}</a>
            </h2>
            <p class="card-description">
            {t("member-content3")}
 
            </p>
        </div>

        <footer class="card-footer">
            
        </footer>
    </article>
                        </div>
                      
                    </div>


{/* ///////////////////////////////////////////////////////////////////////////////////// */}       


<div className=" wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div  >
                        
                        <article class="card">
        <header class="card-thumb">
            <a href="#"><img src={img}  alt="" /></a>
        </header>
       
        <div class="card-body">
            <div class="card-category">
                <a href="#">الأستاذ: عبدالرحمن عمر العيسى </a>
            </div>
            <h2 class="card-title">
                <a href="#"> {t("member4")}</a>
            </h2>
            <p class="card-description">  
            {t("member-content4")}
            </p>
        </div>

        <footer class="card-footer">
            
        </footer>
    </article>
                        </div>
                       
                    </div>
                </div>
            </div>
          
        </section>
    </>
    )
}

export default BlogSection
