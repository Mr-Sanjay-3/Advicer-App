
import React,{ useState } from 'react'
import './AdvicerThree.scss'

import { Link} from 'react-router-dom'


// const Spline = lazy(() => import("@splinetool/react-spline"))


function Advicer() {
 const [GetAdvice, setGetAdvice] = useState ("Pleas Click for Advice");
const [Loading , SetLoading] = useState(false);
const [Count , setCount] = useState(0);
 async function AdviceCl () {
 try{
  SetLoading(true)

  const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
  const data = await response.json();
  setGetAdvice(data.slip.advice)

 }
 catch (error) {
  console.log("Error on Generating Advice. Please Try Again" + error) 
 }
finally{
  SetLoading(false)
  setCount(Count + 1)
  }   
} 

  return (
    <main>
   
      <div className="Advice-Container">
   <p className='Advice-Para' >{ Loading ? 'Loading...' : GetAdvice}</p>
   
   <button className='Advice-button' onClick={AdviceCl}  disabled={Loading}>Get Advice</button>
   <p
   className='Advice-Count'
   >Advices Count: {Count}</p>
   </div> 

   <Link
   className='footer'
   to={"https://sanjay-kumar-web.vercel.app"} 
     rel = "noreferrer, noopener "
     target = "_blank" 
   >
    Designed By<small> Sanjay</small>
   </Link>
    </main>
  );
}

export default Advicer;
