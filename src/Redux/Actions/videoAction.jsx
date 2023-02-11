import { useDispatch } from 'react-redux'


import { auth, db, storage } from "../../firebase/firebase-config"
import { ref, uploadBytes, listAll, list, getDownloadURL } from "firebase/storage";


import { collection, addDoc, Timestamp,getDocs ,arrayUnion, query, orderBy, onSnapshot,  } from "firebase/firestore"; 


import { v4 } from 'uuid';



export const getAllVids  =  ()=> async (dispatch) =>{



 
  try{
    const ordersRef =  collection(db, "Videos");

    const q = query(ordersRef,orderBy('date', 'desc'))
  const unsbscribe = onSnapshot(q,(querySnapshot)=>{
  

    dispatch({type:"VidData" ,data:querySnapshot.docs.map(doc =>({...doc.data(), id: doc.id, Timestamp:doc.data().Timestamp?.toDate().getTime() }))})
  }); return  unsbscribe
  

  }
  catch(e){

   console.log(e)
  
  }
}



//create img to firebase
export const uploadThumbRedux  =  (imgUpload,setImageUrls,setLoading)=>  (dispatch) =>{


 

  const thumbRef = ref(storage, `Thumbnai/${imgUpload.name + v4()}`);
  ;
      uploadBytes(thumbRef, imgUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls([])
          setImageUrls((prev) => [...prev, url]);
  
        });
        setTimeout(setLoading(false), 5000);

        console.log(imgUpload)
      });
  dispatch({type:"uploadThumb" ,})

    }




//create img to firebase
export const createVidRedux  =  (categoryVid,vidUrl,imageUrls)=> async (dispatch) =>{
console.log(categoryVid)
console.log(vidUrl)
console.log(imageUrls)
  const docRef = await addDoc(collection(db, "Videos"), {

    id: auth.currentUser.uid,
    categoryVid: categoryVid,
    urlVid: vidUrl,
    thumb:imageUrls
  }

  );
 

  dispatch({type:"CreateVid" ,})
               


    }


