import React from 'react'

import {Link, BrowserRouter} from 'react-router-dom'

const Features = () => {
    return (
        <>
        {/* <!-- Our Fetures --> */}
		<section className="content-inner bg-white">
			<BrowserRouter>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Notre processus</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<Link to="#!" className="icon-cell text-white"><i className="flaticon-idea"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Idée et analyse</h4>
										<p>Diagnostic général de projet  et  analyse des points sur lesquels notre intervention est la plus pertinente.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<Link to="#!" className="icon-cell text-white"><i className="flaticon-vector"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Conception</h4>
										<p>Après avoir réalisé des analyses approfondies des besoins et des objectifs, nous créons une conception spécifique plus détaillée.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src={img5} className="move-1" alt=""/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<Link to="#!" className="icon-cell text-white"><i className="flaticon-coding"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Développement</h4>
										<p>Transformation les fonctionnalités et autres exigences techniques définies lors de la conception en un langage de programmation.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius gradient-sec shadow-primary m-b20"> 
										<Link to="#!" className="icon-cell text-white"><i className="flaticon-rocket"></i></Link> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Test et lancement</h4>
										<p>L'exécution de test unitaire pour nous assurons que le projet est qualifié en qualité , puis la livraison de produit finale et de sa mise en service.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</BrowserRouter>
		</section>
      </>
    )
}

export default Features
