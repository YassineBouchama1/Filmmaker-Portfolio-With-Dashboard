import React from 'react'
import ReactCompareImage from 'react-compare-image';
import '../style/EditSec.css'
import img0origin from '../images/img-original.jpg'
import imgModifn from '../images/img-modified.jpg'

export default function EditSec() {
  return (

    <section className='editor'>
    <div className='container '>
    <div className='card'>
    <div className='card-body'>

<div className='editor-text'>
<h2>Play With The Slider to See Some Magic.</h2>

</div>

<ReactCompareImage rightImageLabel="after" leftImageLabel="before" className='comapreimage' leftImage={img0origin} rightImage={imgModifn} />;


    </div>
    </div>
    </div>
    </section>
  )
}
