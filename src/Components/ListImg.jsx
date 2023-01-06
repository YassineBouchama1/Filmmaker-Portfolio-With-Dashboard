import React from 'react'
import './styleCompAdmin/listImg.css'
import { collection, addDoc ,deleteDoc,doc,getDocs} from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase-config"
import img from '../images/about.jpg'
import notify from '../hook/useNotifcation'
export default function ListImg({ images, update, setUpdate }) {

    //Delet Video
    const deletImg = async (id) => {
        const pathimg = doc(db, "Images", id)
        await deleteDoc(pathimg)
        setUpdate(!update)
        notify()
    }
  

  return (
    <div>
    <div className='list-admin'>

    <div className='header-list'>
    <h5>Photos</h5>
    <h5>Category</h5>
    <h5>Options</h5>
    </div>

{images.map((i)=>{
    return(
<>
<div key={i.id} className='item-list'>
<div> <img src={i.img} style={{width:'70px' ,height:'auto'}}></img></div>
<h6>{i.categoryImg}</h6>
<div onClick={()=>deletImg(i.id)} className='remove-admin-btn'><i  class="fa-solid fa-trash"></i> Remove</div>

</div>
<div className='lin-list'></div>
</>

    )
})}

  
    


    </div>
    </div>
  )
}
