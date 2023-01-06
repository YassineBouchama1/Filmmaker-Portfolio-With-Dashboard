

import '../style/gellery.css'

import img1 from '../images/about2.jpg'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgVideo from 'lightgallery/plugins/video';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';





export default function Gellery({images}) {


    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (

 
    <LightGallery       
     onInit={onInit} 
      elementClassNames="gallery22" 
      plugins={[lgZoom, lgVideo, lgThumbnail]} 
      mode="lg-fade" >

 

 
      
<a
          className="gallery-item"
          data-src='https://youtu.be/c0_27_YHie4?list=RDc0_27_YHie4'
          key="1"
      
        >  
        
          <img
            style={{ maxWidth: '100%' }}
            className="video2"

            alt="sdd"
            src={img1}
          />
        
       


        </a>
   
        <a
        className="gallery-item"
        data-src='https://youtu.be/c0_27_YHie4?list=RDc0_27_YHie4'
        key="1"
    
      >  
      
        <img
          style={{ maxWidth: '100%' }}
          className="video2"

          alt="sdd"
          src={img3}
        />
      
     


      </a>
      <a
          className="gallery-item"
          data-src='https://youtu.be/c0_27_YHie4?list=RDc0_27_YHie4'
          key="1"
      
        >  
        
          <img
            style={{ maxWidth: '100%' }}
            className="video2"

            alt="sdd"
            src={img2}
          />
        
       


        </a>
        <a
          className="gallery-item"
          data-src='https://youtu.be/c0_27_YHie4?list=RDc0_27_YHie4'
          key="1"
      
        >  
        
          <img
            style={{ maxWidth: '100%' }}
            className="video2"

            alt="sdd"
            src={img4}
          />
        
       


        </a>
       
        <a
          className="gallery-item"
          data-src={img4}
          key="1"
      
        >  
        
          <img
            style={{ maxWidth: '100%' }}
            className="video2"

            alt="sdd"
            src={img4}
          />
        
       


        </a>
       
        <a
        className="gallery-item"
        data-src={img3}
        key="1"
    
      >  
      
        <img
          style={{ maxWidth: '100%' }}
          className="video2"

          alt="sdd"
          src={img3}
        />
      
     


      </a>

  </LightGallery>


  )
}
