
import '../style/image.css'
import { filterByCatMainImg } from '../../hook/useFiltercategory'
import Gellery from '../utily/Gellery'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getAllMovies, uploadImgRedux, createImgRedux } from '../../Redux/Actions/action'
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
  const dataPostss = useSelector(state => state.DataR.movies)


  useEffect(() => {
    const newAr = dataPostss.filter((item) => item.categoryImg === "Portraits")
    setImages(newAr)
   

  }, [dataPostss])


  const filterByCat = (cat) => {

    filterByCatMainImg(cat, setImages, dataPostss)

  }


  const [toggle, setToggle] = useState(0)

  const toggleAll = (cat,index) => {

    filterByCat(cat)
    toggleModal(index)

 
    }
  const toggleModal = (index) => {


  setToggle(index)
    }

  
  return (
    <section className='images' id='Photos'>
      <div className='container '>
        <div className='card-image'>
          <div className='card-body'>
            <h2>Photography </h2>
     
          <div className='category'>{category.map((i,index) => <h3 className={toggle === index? 'active': ''} id={i.cat} onClick={() => toggleAll(i.cat,index)} key={Math.random()} >{i.cat}</h3>)}</div>

   
           
         
            {dataPostss.length >=1?(  <LightGallery
           
              elementClassNames="gallery22"
              plugins={[lgZoom, lgVideo, lgThumbnail]}
              mode="lg-fade" >
            
             {images.map((i,index) => {
             
                return (
                
                  <a
                    className="gallery-item"
                    data-src={i.img}
                    key={i.id}

                  >
                  
                    <img loading='lazy'
                      style={{ maxWidth: '100%' }}
                      className="video2"

                      alt=""
                      src={i.img}
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
