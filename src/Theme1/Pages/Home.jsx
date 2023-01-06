import React from 'react'
import '../style/home.css'

import Welcom from '../Components/Welcom'

import About from '../Components/About'
import VideosSection from '../Components/VideosSection'
import Services from '../Components/Services'
import ImageSection from '../Components/ImageSection'
import Instgram from '../Components/Instgram'
import Footer from '../Components/Footer'
const Lazyig  =React.lazy(()=>import ('../Components/Instgram'))
const LazyServices  =React.lazy(()=>import ('../Components/Services'))
// const Lazyig  =React.lazy(()=>import ('../Components/Instgram'))
// const Lazyig  =React.lazy(()=>import ('../Components/Instgram'))
export default function Home() {

    //  const myStyle={
    //             backgroundImage: `url(${background})` ,
    //             height:'100vh',
    //         
    //            
    //             backgroundSize: 'cover',
    //             backgroundRepeat: 'no-repeat',

    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    
     
    //     background: "#0a0b0f"
    //         };

  return (

    <div className='homeContainer'  >

    <Welcom/>

 <VideosSection/>
 <ImageSection/>
<LazyServices/>
<About/>
<Lazyig/>
<Footer/>

    </div>
   
  )
}
