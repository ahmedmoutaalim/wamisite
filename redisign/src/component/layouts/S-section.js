import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Ssection = () => {
   
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner bac-i">
                
				<div className="container">
					<div className="section-head style-3 text-center mb-4">
						<h4 className="title">Lorem ipsum dolo</h4>
						<div className="dlab-separator style-2 bg-primary"></div>
					</div>

					
					<div className="row">
						<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				

						<p className="txtstyle">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
               avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années </p>

					</div>
				</div>

				<div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
              </div>
			</section>
		</>
    )
}

export default Ssection
