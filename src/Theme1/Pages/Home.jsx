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
import EditSec from '../Components/EditSec'
const Lazyig  =React.lazy(()=>import ('../Components/Instgram'))
const LazyServices  =React.lazy(()=>import ('../Components/Services'));
const LazyFooter   =React.lazy(()=>import ('../Components/Footer'))

export default function Home() {



  return (

    <div className='homeContainer'  >

    <Welcom/>
<EditSec/>
 <VideosSection/>
 <ImageSection/>
<LazyServices/>
<About/>
<Contact/>
<Lazyig/>
<LazyFooter/>

    </div>
   
  )
}
