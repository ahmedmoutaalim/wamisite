import React from 'react'

import emailjs from 'emailjs-com' 
import Swal from 'sweetalert2'

const GetInTouch = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_58rombh', 'template_5rg3c5k', e.target, 'user_L5zb1Ow9DGESymLWYXEsm')
        
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
                })
              }, 
              (error) => {
                console.log(error.text);
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
                })
              });
            e.target.reset()

    }

    return (
        <>
        {/* <!-- Contact Form --> */}
<section className="content-inner">
    <div className="container">
        <div className="row align-items-center">
         
            <div className="col-lg-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <form onSubmit={sendEmail} className="dlab-form style-1 dzForm" >
                    <div className="section-head style-3">
                        <h2 className="contact-center">تواصل معنا</h2>
                        <hr className='hrstl'></hr>
                     
                    </div>
                    <div className="dzFormMsg"></div>
                    <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                    <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="name" type="text" required className="form-control" placeholder="Nom et prénom"/>
                            </div>
                        </div>
                        
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="email" type="email" required className="form-control" placeholder="Adresse Email"/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="phone" type="text" pattern="[0-9]+" required className="form-control" placeholder="Téléphone."/>
                            </div>
                        </div>
                    
                        <div className="col-sm-12">
                            <div className="input-group">
                                <textarea className="form-control" cols="30" rows="8"  name='msg' required type="text" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-corner gradient btn-block btn-primary">ارسال</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      </>
    )
}

export default GetInTouch
