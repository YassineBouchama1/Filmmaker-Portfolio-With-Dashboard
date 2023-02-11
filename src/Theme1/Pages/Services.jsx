import React from 'react'
import '../style/home.css'

import Welcom from '../Components/Welcom'

import VideosSection from '../Components/VideosSection'

import MainNavBar from '../Components/MainNavBar'
import LazyServices from '../Components/Services'
import LazyFooter from '../Components/Footer'
// const LazyFooter   =React.lazy(()=>import ('../Components/Footer'))

export default function Services() {



  return (
    <div className='container'>
    <div className='homeContainer'  >
    <MainNavBar/>
<LazyServices/>

<LazyFooter/>

    </div>
    </div>
   
  )
}
