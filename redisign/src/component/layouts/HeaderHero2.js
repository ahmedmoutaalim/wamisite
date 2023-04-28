
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';


function HeaderHero2 () {
    return (
        <>
        <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png),url(images/background/bg2.jpg) , var(--gradient-sec)",}}>
		<div style={{   "background-color": "rgba(102,51,153,0.6)",
                  "position": "absolute",
                  "top": "0",
                  "left": "0",
                  "width": "100%",
                  "height": "100%",}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					{/* <h1>Services 3</h1> */}
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><NavLink to={"/"}><a>Accueil</a></NavLink></li>
							<li className="breadcrumb-item active" aria-current="page">Services</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
				</div>
			</div>
		</div>
    </div>
    </>
    )
  }
  
  export default HeaderHero2;