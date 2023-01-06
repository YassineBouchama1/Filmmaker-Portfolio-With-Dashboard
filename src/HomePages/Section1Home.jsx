import { Modal } from 'bootstrap'
import React from 'react'
import { useState } from 'react'

import '../style/gallery.css'
import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase-config"
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NoData from '../Components/NoData'
import notify from '../hook/useNotifcation'
import './seaction1home.css'
export default function Section1Home({ images, }) {


    //Delet Video
    const deletImg = async (id) => {
        const pathimg = doc(db, "Images", id)
        await deleteDoc(pathimg)
        setUpdate(!update)
        notify()
    }





    const [modul, setModel] = useState(false)
    const [tempImg, setTempImg] = useState("")

    //open img
    const getImg = (img) => {
        setTempImg(img)
        setModel(true)
    }
    return (
        <section id="services">
        <div class="container pt-7 pb-15">
          <div class="card cardSisko">
            <div class="card-body cardSisko">
              <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-lg-6 position-relative order-lg-2">
                  <div class="overlap-grid overlap-grid-2">
                    <div class="item">
                      <figure class="rounded shadow"><img src="./assets/img/photos/s1.jpg" srcset="./assets/img/photos/s1@2x.jpg 2x" alt=""/></figure>
                    </div>
                    <div class="item">
                      <figure class="rounded shadow"><img src="./assets/img/photos/s2.jpg" srcset="./assets/img/photos/s2@2x.jpg 2x" alt=""/></figure>
                    </div>
                  </div>
                </div>
          
                <div class="col-lg-6">
                  <h2 class="mb-3">My Services</h2>
                  <p class="lead mb-7">I'd like to give you a unique photography experience, capture your products with excellent composition.</p>
                  <div class="d-flex flex-row mb-5">
                    <div>
                      <div class="icon fs-44 text-white mt-1 me-5"><i class="si-photo_camera"></i></div>
                    </div>
                    <div>
                      <h3 class="h4 mb-1">Photography</h3>
                      <p class="mb-0">Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.</p>
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-5">
                    <div>
                      <div class="icon fs-44 text-white mt-1 me-5"><i class="si-photo_magic-tools"></i></div>
                    </div>
                    <div>
                      <h3 class="h4 mb-1">Retouch</h3>
                      <p class="mb-0">Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.</p>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <div>
                      <div class="icon fs-44 text-white mt-1 me-5"><i class="si-seo_video-marketing"></i></div>
                    </div>
                    <div>
                      <h3 class="h4 mb-1">Filming</h3>
                      <p class="mb-0">Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
