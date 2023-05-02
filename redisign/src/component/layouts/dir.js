
import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
const Dir = () => {
const [t,i18n] = useTranslation()
    return (
        <>
			{/* <!-- Service --> */}
			<section className="content-inner">
                
				<div className="container">
                    <h2>{t("dirTitle")}</h2>
                    <h2 className='clr3'> {t("dirp")}  </h2>
					<div className="section-head style-3 text-center mb-4">
					<div className="dlab-separator style-2 bg-primary"></div>
						<h5 className="title">{t("dirContent")} </h5>
						
					</div>

					
			
				</div>
              
   
              
			</section>
		</>
    )
}

export default Dir
