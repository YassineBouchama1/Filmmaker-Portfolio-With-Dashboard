import React from 'react'
import { useEffect } from 'react';
import '../style/backgroundslider.css'
import mbg1 from '../images/bg/mb/1.jpg'
import mbg2 from '../images/bg/mb/2.jpg'
import mbg3 from '../images/bg/mb/3.jpg'
import mbg4 from '../images/bg/mb/4.jpg'
import bg1 from '../images/bg/1.jpg'
import bg2 from '../images/bg/3.jpg'
import bg4 from '../images/bg/4.jpg'




import { useState } from 'react';


export default function BackGroundSlider() {

  const [currentState,setCurrentState]=useState(0)

  const [width,setWidth]=useState(window.innerWidth)


  const [bg,setBg]=useState([])









useEffect(()=>{

  setWidth(window.innerWidth)


      


},[window.innerWidth])


    
useEffect(() => {

  if(width <= 800){
  
    const imgMapMobile =[
      mbg1,
      mbg2,
      mbg3,
      mbg4,
    
    ];
 
    setBg(imgMapMobile)
      }
      if(width > 800){

      const imgMap =[
        bg1,
        bg2,
        bg4,
      
      ];


      setBg(imgMap)
    }
   
  const timer = setTimeout(() => {

  if(currentState===bg.length -1){
    setCurrentState(0)
  }
  else{
    setCurrentState(currentState + 1)
  }
   

  }, 5300);

  return () => clearTimeout(timer);
}, [currentState]);




// const backgroundStyle = {
//   // backgroundImage: `url( /src/Theme1${imgMap[currentState]})`,
//   // backgroundImage: `url( /src/Theme1${imgMap[currentState]})`,

//   // transitionDuration: '.4s'
//   transition: 'all .5s linear',
//   backgroundPosition: "center",
//   zIndex: "-1",
//   backgroundSize: "cover",
//   position: "fixed",
//   backgroundRepeat: "no-repeat",
//   width: "100%",
//   height: "100vh"
// }

// <div className='bg-image img-1' style={backgroundStyle}>

// </div>
// <img className='bg-main' preload="yes" loading='lazy' src={bg[currentState]} ></img>
  return (

 <img className='bg-main' preload="yes"  src={bg[0]} ></img>


  )
}
