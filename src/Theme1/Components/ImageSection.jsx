
import '../style/image.css'
import { filterByCatMainImg } from '../../hook/useFiltercategory'
import Gellery from '../utily/Gellery'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getAllMovies } from '../../Redux/Actions/action'
import { useSelector, useDispatch } from 'react-redux'



import '../style/gellery.css'
import Loading from '../utily/Loading'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgVideo from 'lightgallery/plugins/video';
// import plugins if you need
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { NavLink } from "react-router-dom";
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import BtnCategory from './BtnCategory'

export default function ImageSection() {


  const category = [{ cat: "Portraits" }, { cat: "Product" }, { cat: "Automobile" }, { cat: "Street" }, { cat: "Events" }]
  const [images, setImages] = useState([])
  const [update, setUpdate] = useState(false)
  const dispatchNovies = useDispatch();


  //get data from fireStore using redux
  useEffect(() => {
    // getMovies()
    dispatchNovies(getAllMovies())

  }, [update])


  const PhotosFromFireBaseRedux = useSelector(state => state.DataR.movies)
  
  useEffect(() => {
    // const newAr = 
    setImages(PhotosFromFireBaseRedux.filter((item) => item.Category === "Portraits"))
   

  }, [PhotosFromFireBaseRedux])



  const [toggle, setToggle] = useState(0)


  const filterByCatMainImg = (cat,index) => {
    toggleModal(index)
    const newAr = PhotosFromFireBaseRedux.filter((item) => item.Category === cat)
    setImages(newAr)
    console.log(cat)
  }




  // const toggleAll = (cat,index) => {

  //   filterByCat(cat)
  //   toggleModal(index)

 
  //   }
    
  const toggleModal = (index) => {


  setToggle(index)
    }

  
  return (
    <section className='images' id='Photos'>
      <div className='container '>
        <div className='card-image'>
          <div className='card-body'>
            <h2>Photography </h2>
     
          <div className='category'>{category.map((i,index) => <h3 className={toggle === index? 'active': ''} id={i.cat} onClick={() => filterByCatMainImg(i.cat,index)} key={Math.random()} >{i.cat}</h3>)}</div>

   
           
         
            {images.length >=1?(  <LightGallery
           
              elementClassNames="gallery22"
              plugins={[lgZoom, lgThumbnail]}
              mode="lg-fade" >
            
             {images.map((i) => {
             
                return (
                
                  <a
                    className="gallery-item"
                    data-src={i.image[0]}
                    key={i.id}

                  >
                  
                    <img 
                      style={{ maxWidth: '100%' }}
                      className="video2"

                      alt=""
                      src={i.image[0]}
                    />
             




                  </a>
                
                )
            
              })}
            
             

       

            </LightGallery>) :   <Loading className="loading-images"/>}
         
          </div>
        </div>
      
      </div>
    </section>
  )
}
