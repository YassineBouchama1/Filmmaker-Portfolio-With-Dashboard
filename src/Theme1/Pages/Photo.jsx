import React from 'react'
import '../style/home.css'

import Welcom from '../Components/Welcom'

import About from '../Components/About'
import VideosSection from '../Components/VideosSection'
import Services from '../Components/Services'
import ImageSection from '../Components/ImageSection'
import Instgram from '../Components/Instgram'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import MainNavBar from '../Components/MainNavBar'


import LazyFooter from '../Components/Footer'

export default function Photo() {



  return (
    <div className='container'>
    <div className='homeContainer'  >
    <MainNavBar/>



 <ImageSection/>



<LazyFooter/>

    </div>
    </div>
   
  )
}
