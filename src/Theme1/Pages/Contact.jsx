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
import Lazyig from '../Components/../Components/Instgram'


export default function ContactPage() {



  return (
    <div className='container'>
    <div className='homeContainer'  >
    <MainNavBar/>



<Contact/>
<Lazyig/>
<LazyFooter/>

    </div>
    </div>
  )
}
