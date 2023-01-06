import React from 'react'
import '../style/instagram.css'
import img1 from '../images/ig/i1.jpg'
import img2 from '../images/ig/i2.jpg'
import img3 from '../images/ig/i3.jpg'
import img4 from '../images/ig/i4.jpg'
// const img1  =React.lazy(()=>import ('../images/ig/i1.jpg'))
// const img2  =React.lazy(()=>import ('../images/ig/i2.jpg'))
// const img3  =React.lazy(()=>import ('../images/ig/i3.jpg'))
// const img4  =React.lazy(()=>import ('../images/ig/i4.jpg'))
export default function Instgram() {


  return (
    <section className='instagram' id='Contact'>
<div className='card'>
<div className='card-body'>
<div> <h3>Follow Me on instagram</h3> </div>
<div className='img-ig'> 

<img loading='lazy' src={img1}></img>
<img loading='lazy' src={img2}></img>
<img loading='lazy' src={img3}></img>
<img loading='lazy' src={img4}></img>

</div>
<a href='https://www.instagram.com/noamaane/' target="_blank" rel="noopener noreferrer" className='btn-ig'><i class="fa-brands fa-instagram"></i>Follow</a>
</div>
</div>

    </section>
  )
}
