import React from 'react'
import Portfolio from './Portfolio'

const Projects = () => {
    return (
        <>
        {/* <!-- Projects --> */}
		<section className="content-inner bg-gray">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Notre portfolio</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>		
				<Portfolio/>
			</div>
		</section>
      </>
    )
}

export default Projects
