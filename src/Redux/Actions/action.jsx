import { useDispatch } from 'react-redux'
import { collection, getDocs ,addDoc} from "firebase/firestore";
import { auth, db, storage } from "../../firebase/firebase-config"
import { ref, uploadBytes, listAll, list, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import notify from '../../hook/useNotifcation'





//get images from firebase
export const getAllMovies  =  ()=> async (dispatch) =>{

try{
  const data = await getDocs(collection(db, "Images"));
  dispatch({type:"YesData" ,data:data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))})

}
catch(e){
  dispatch({type:"NoData" ,data:"error"+e,})

}
}





//create img to firebase
export const uploadImgRedux  =  (imgUpload,setImageUrls,setLoading)=>  (dispatch) =>{


 

  const imageRef = ref(storage, `images/${imgUpload.name + v4()}`);
  ;
      uploadBytes(imageRef, imgUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls([])
          setImageUrls((prev) => [...prev, url]);
  
        });
        setTimeout(setLoading(false), 5000);


      });
  dispatch({type:"uploadImg" ,})

    }








//create img to firebase
export const createImgRedux  =  (imageUrls,categoryImg,setLoading)=> async (dispatch) =>{


  const docRef = await addDoc(collection(db, "Images"), {

    id: auth.currentUser.uid,
    categoryImg: categoryImg,
    img: imageUrls

  }

  );
 

  dispatch({type:"CreateImg" ,})
  setLoading(false)     
  notify()

    }



