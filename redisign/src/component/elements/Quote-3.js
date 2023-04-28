import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import emailjs from 'emailjs-com' 
import Swal from 'sweetalert2'







function Quote3 (){



  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_58rombh', 'template_5rg3c5k', e.target, 'user_L5zb1Ow9DGESymLWYXEsm')
.then((result) => {
  console.log(result.text);
  Swal.fire({
    icon: 'success',
    title: 'Message Sent Successfully'
  })
}, (error) => {
  console.log(error.text);
  Swal.fire({
    icon: 'error',
    title: 'Ooops, something went wrong',
    text: error.text,
  })
});
e.target.reset()
    };
  


	return (
		<>
			<div className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media">
                  <img src="images/about/img15.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-xl-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <form onSubmit={sendEmail} className="dlab-form dzForm" >
                  <div className="dzFormMsg"></div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="inpgrouput-">
                      
                     
                    
                      </div>
                    
                    </div>
                   
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="lastname"
                          type="text"
                          className="form-control"
                          placeholder="Nom et prénom"
                        required
                        />
                      
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                         name="email"                   
                          type="email"
                          className="form-control"
                          placeholder="adresse email"
                       required
                        />
                       
                      </div>
                      
                    </div>
                     <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="phone"
                   
                          type="text"
                          className="form-control"
                          placeholder="Téléphone"
                          pattern="[0-9]+"
                          required
                        />

                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="project"
                      
                          type="text"
                          className="form-control"
                          placeholder="Titre du projet"
                          required
                        />
                      </div>
                    </div> 
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="service"
                          className="form-control"
                          required
                        >
                          <option selected>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <textarea
                          name="msg"
                          type="text"
                          className="form-control"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>
{/*                
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[estimated_buget]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Buget estimé"
                        />
                      </div>
                    </div> */}
              
                    {/* <div className="col-sm-12">
                      <div className="input-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          className="form-control d-none"
                          style={{ display: "none" }}
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div> */}
					{/* { <ReCAPTCHA
						sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
						onChange={onChange}
					/> } */}
                    <div className="col-sm-12 m-2">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-corner gradient btn-primary"
                      >
                        Envoyé
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
		</>
	)
}

export default Quote3;