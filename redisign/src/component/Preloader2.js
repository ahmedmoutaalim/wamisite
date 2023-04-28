import React, { useEffect, useState } from "react";
import Home from '../component/pages/Home';

// import Service from './component/layouts/Service';
import Service from '../component/pages/Service';

import '../../src/App.css';
import {Helmet} from 'react-helmet'
import { BrowserRouter ,  Route, Switch } from 'react-router-dom';
import Button  from '../component/elements/Button';
import * as location from '../images/earth.json'
import Lottie from 'react-lottie'



const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

function PreLoader2() {
  const [data, setData] = useState([]);
  const [Loding, setLoading] = useState(undefined);
  const [Completed, setCompleted] = useState(undefined);  

  useEffect(() => {
  
     

          setTimeout(() => {
                setCompleted(true);
          }, 0);

  }, []);

  return (
    <>
 
      {!Completed ? (
    
      <header>
      <Lottie options={defaultOptions}
      height={400}
      width={400}
     />
      </header>
  
    
      
  
      ) : (
          <>
        <BrowserRouter>
        <Helmet>
           <title> WAMI | Military industries</title>
           <meta name="description" content="AlgoDev.net Agence de Marketing Digital à Youssoufia, fournissant des services numériques frais et créatifs." />
        </Helmet>
            <div>
            
                <Switch>
                 <Route path="/" component={Home} exact/>
                 <Route path="/Service" component={Service}/>
         
                {/* <Route component={Error}/> */}

               </Switch>
               <Button/>
               
            </div> 
          </BrowserRouter>
            
        </>
       )} 
    </>
  );
}

export default PreLoader2;