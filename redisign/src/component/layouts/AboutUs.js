import React from 'react'

import {NavLink} from 'react-router-dom'
import img5 from '../../images/img5.jpg'
import {useTranslation} from 'react-i18next'

const AboutUs = () => {
  const [t , i18n] = useTranslation();
    return (
        <>
      {/* <!-- About Us --> */}
      <section className="content-inner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src={img5} className="move-2 militaryBottom" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">
                   {t("AboutTitle")}
                </h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
            
             <br/>
            
              <h4>
              Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
               avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 
              </h4>
              <br/>
              <NavLink to={"/service"} className="btn btn-outline-primary"><p className="center-t ">المزيد</p></NavLink>
            
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default AboutUs
