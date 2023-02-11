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

import Lazyig from '../Components/Instgram'
import LazyServices from '../Components/Services'
import LazyFooter from '../Components/Footer'
import MainNavBar from '../Components/MainNavBar'
export default function HomePage() {



  return (
    <div className='container'>
    <div className='homeContainer'  >
    <MainNavBar/>
    <Welcom/>

    <About/>
<LazyServices/>

<Contact/>
<Lazyig/>
<LazyFooter/>

    </div>
    </div>
  )
}
