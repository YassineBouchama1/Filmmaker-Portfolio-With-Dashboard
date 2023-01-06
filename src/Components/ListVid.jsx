import React from 'react'
import './styleCompAdmin/listImg.css'
import { collection, addDoc ,deleteDoc,doc,getDocs} from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase-config"

import notify from '../hook/useNotifcation'
export default function ListVid({ videos, update, setUpdate }) {

    //Delet Video
    const deletVid  = async(id)=>{
        const pathVids = doc(db, "Videos",id)
        await deleteDoc(pathVids)
        setUpdate(!update)
        notify()
        }
  

  return (
    <div>
    <div className='list-admin'>

    <div className='header-list'>
    <h5>Videos</h5>
    <h5>Category</h5>
    <h5>Options</h5>
    </div>

{videos.map((i)=>{
    return(
<>
<div key={i.id} className='item-list'>
<div className='img-vid'> <img src={i.thumb} style={{width:'70px' ,height:'auto'}}></img>
<span className='dont-break-out'>{i.urlVid}</span>
</div>
<h6>{i.categoryVid}</h6>


<div onClick={()=>deletVid(i.id)} className='remove-admin-btn'><i  class="fa-solid fa-trash"></i> Remove</div>

</div>
<div className='lin-list'></div>
</>

    )
})}

  
    


    </div>
    </div>
  )
}
