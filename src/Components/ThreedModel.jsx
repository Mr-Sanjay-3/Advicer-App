
import React from 'react'
import './AdvicerThree.scss'
import PowerBot from "@splinetool/react-spline"
import { useState } from 'react'
export const ThreedModel = () => {

const [Loading, SetLoading] = useState(true);

function HandleLoading (){
  SetLoading (false);
};


  return (
<>
<h1 className='Heading'> Welcome To <b>AdviceAlly</b> </h1>
    <div className="PowerBot-Container" >
    {Loading && <p className='loader'>Loading...</p>}
    <PowerBot className='Bot' scene="https://prod.spline.design/QXcXhgAx6fKYbnQc/scene.splinecode" onLoad={HandleLoading} />
    <div className="hero"><small>AdviceAlly</small></div>
  

</div>
</>
  )
}

export default ThreedModel;