import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import thum1 from '../../images/blog/default/thum1.jpg'
import thum2 from '../../images/blog/default/thum2.jpg'
import thum3 from '../../images/blog/default/thum3.jpg'
import thum4 from '../../images/blog/default/thum4.jpg'
import img from '../../images/img5.jpg'

const BlogSection = () => {
    return (
        <>
        {/* <!-- Service --> */}
        <section className="content-inner">
            
            <div className="container" >
                <div className="section-head style-3 text-center mb-4">
                    <h4 className="title">مجلس الأدارة</h4>
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
                <a href="#">األستاذ :محمد حمد الناصر</a>
            </div>
            <h2 class="card-title">
                <a href="#">رئيس مجلس لإلدارة</a>
            </h2>
            <p class="card-description">يمتلك خبرة تزيد عن 30 سنة في المجال التجاري واإلداري حاصل على البكالوريوس 
في العلوم العسكرية ومدير تنفيذي في عدة شركات وله العديد من االستثمارات في 
المجال التجاري و التطوير العقاري والصناعي وشريك في عدة شركات
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
                <a href="#">نائب رئيس مجلس االدرة </a>
            </h2>
            <p class="card-description">يمتلك خبرة تتجاوز 30سنة بالمجال العسكري واإلستراتيجي والدبلوماسي حاصل على 
درجة البكالوريوس و الماجستير في العلوم العسكرية ولديه الكثير من الدورات في هذه 
المجاالت 
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
                <a href="#">الستاذ عبده للا ناصر حمد الناصر</a>
            </div>
            <h2 class="card-title">
                <a href="#">عضو</a>
            </h2>
            <p class="card-description">يعمل بإدارة المحافظ العقارية واالستثمار بعدة مجاالت ولدية خبرة بإدارة المحافظ 
الخاصة وإدارة األصول وتنميتها تتجاوز ال 25 سنة وحاصل على درجة الدبلوم في 
إدارة االعمال و على العديد من الدورات اإلدارية والتنظيمية ودورات في إدارة األصول 
وتنميتها ومهتم بالقطاع السكني والسياحي والصناعي ولديه العديد من االستثمارات بها 
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
