import React from 'react'
import '../style/services.css'
import img1 from '../images/services/s1.jpg'
import img2 from '../images/services/s2.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link} from "react-router-dom"
export default function Services() {
  return (

    <section className='services' id='Services'>
    <div className='card'>
    
    <div className='card-body'>
  <div className='text-body'>
  <AnimationOnScroll duration={1.2} animateIn="animate__bounceIn">
  <div><h3>My Services</h3>
  <h4>  </h4>
  </div>
  </AnimationOnScroll>
  <div className=' list-service'>
  
  <AnimationOnScroll duration={1.2} animateIn="animate__bounceIn">
  <div className='services-item'>
  <i className="fa-solid fa-film"></i>
  <div className='text-services'>
  <h4>Filming </h4>
  
  </div>
  </div>
  </AnimationOnScroll>
  <AnimationOnScroll duration={1.2} animateIn="animate__bounceIn">
 <div className='services-item'>
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 <div className='text-services'>
 <h4>Editing</h4>
 </div>
 </div>
 </AnimationOnScroll>
 <AnimationOnScroll duration={1.2} animateIn="animate__bounceIn">
 <div className='services-item'>
 <i className="fa-regular fa-image"></i> 
 <div className='text-services'>
 <h4>Photography</h4>
 </div>
 </div>
 </AnimationOnScroll>
  </div>
  </div>
    <div className='img-body'>
    <div className='img-services'>
    <AnimationOnScroll duration={1.2} animateIn="animate__bounceIn">
<div className='item'>    <img loading='lazy' src={img1}></img></div>

<div className='item'>    <img loading='lazy' src={img2}></img></div>
</AnimationOnScroll>
    </div>
    </div>
    </div>
    </div>
    
    
    
    </section>
  
  )
}
