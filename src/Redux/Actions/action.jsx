import { useDispatch } from 'react-redux'

import { auth, db, storage } from "../../firebase/firebase-config"

import { collection, addDoc, Timestamp,getDocs ,arrayUnion, query, orderBy, onSnapshot,  } from "firebase/firestore"; 





//get images from firebase
export const getAllMovies  =  ()=> async (dispatch) =>{




 
      try{
        const ordersRef =  collection(db, "Images");
  
        const q = query(ordersRef,orderBy('date', 'desc'))
      const unsbscribe = onSnapshot(q,(querySnapshot)=>{
      
  
        dispatch({type:"YesData" ,data:querySnapshot.docs.map(doc =>({...doc.data(), id: doc.id, Timestamp:doc.data().Timestamp?.toDate().getTime() }))})
      }); return  unsbscribe
      
    
      }
      catch(e){

       console.log(e)
      
      }


     }


 













//create img to firebase
export const createImgRedux  =  ()=> async (dispatch) =>{



    }



