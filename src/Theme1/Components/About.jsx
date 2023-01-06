import React from 'react'
import '../style/about.css'
import about from '../images/about2.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function About() {


//   <div className='Equipment'>

//   <h3>My Equipment</h3>
//   <ul>
//   <li>canon 250D 4k</li>
//   <li>canon 550D</li>
//   <li>tokina 11-16mm f2.8</li>
//   <li>camon 50m f1.4</li>
//   <li>canon 18-55×2</li>
//   <li>jmary professional tripod</li>


// </ul>

//   </div>
  return (

    <section className='about' id='About'>
    <div className='container '>
    <div className='card'>
    <div className='card-body'>

<div className='img-about'>     <AnimationOnScroll duration={1.2} animateIn="animate__bounceInLeft">   <img loading='lazy' src={about}></img></AnimationOnScroll></div>

    <diV className='text-body'>
    <AnimationOnScroll duration={1.2} animateIn="animate__bounceInRight">
    <div className='text-1'>

    <h2>Deliver a Feeling.</h2>

    

    </div>
    </AnimationOnScroll>
    <AnimationOnScroll duration={1.2} animateIn="animate__bounceInRight">
    <div className='text-2'>
    <div className='About-Me'>
 
    <h3>A Little About Me</h3>


    <p><span class="dropcap">N</span>My name is Noaman El Garrab I’m a filmmaker photographer, my passion is delivering feelings through storytelling and stunning visuals, born in Morocco El Jadida raised in Safi, I started using my smartphone’s camera in 2018 capturing visuals here and there making short videos on social media, I began learning the basics of Filmmaking & Photography watching five to ten tutorials every day, it was my first time caring about an art form I became obsessed.
    People started approaching me on Instagram for jobs I used to do them using only my phone and I never failed to satisfy any client, sometimes one of my friends would lend me their camera whenever I have a big job, I got my first camera in 2020 that opened a lot of doors and brought opportunities, it’s 2022 now I bought my second camera and equipment that I’ve always dreamed of and I got the chance to work with international clients, youtubers and Moroccan business owners which made me gather a tremendous amount of knowledge and experience in a short amount of time, I love what I do and I’ll keep doing it for the rest of my life, welcome to my website I hope you enjoy your stay ! 
    </p>

    </div>
   

    </div>
    </AnimationOnScroll>
    </diV>
    </div>
    </div>
    </div>
    </section>

  )
}
