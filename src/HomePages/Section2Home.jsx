import { Modal } from 'bootstrap'
import React, { useState, useEffect } from 'react'


import '../style/galleryvid.css'



import 'react-html5video/dist/styles.css';

import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase-config"

import LightGallery from 'lightgallery/react';
import '../style/galleryvid.css'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import lgZoom from 'lightgallery/plugins/zoom';



import lgVideo from 'lightgallery/plugins/video';





export default function GalleryVid2({ images, update, setUpdate }) {











  //Delet Video
  const deletImg = async (id) => {
    const pathimg = doc(db, "Videos", id)
    await deleteDoc(pathimg)
    setUpdate(!update)

  }

  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <section id="services">
    <div class="container pt-7 pb-15">
      <div class="card">
        <div class="card-bodyFALSE">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-12 position-relative order-lg-2">
 <div className='listVideo'>
    <LightGallery        onInit={onInit}  elementClassNames="gallery22" plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade" >
      {images.map((i,index) => {
        return (
<>
   

   

        
<a
            className="gallery-item"
            data-src={i.img}
            key={index}
        
          >  
          
            <img
              // style={{ maxWidth: '100%' }}
              className="video2"

              alt="sdd"
              src={i.img}
            />
          
         


          </a>
     
          </>
         
        )

      })}

    </LightGallery>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
