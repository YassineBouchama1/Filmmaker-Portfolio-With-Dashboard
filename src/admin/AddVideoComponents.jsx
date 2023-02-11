import React, { useState, useEffect } from 'react'
import "./PagesAdmin/styleAdmin/addvideoAdmin.css"
import SideBar from "./SideBar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, db, storage } from "../firebase/firebase-config"

import NavBar from '../NavBar'
import avatar from '../images/avatar.png'
import { getAllVids,createVidRedux,uploadThumbRedux } from '../Redux/Actions/videoAction'
import {filterByCatMainVid} from '../hook/useFiltercategory'
import NoData from '../Components/NoData'
import { collection, addDoc, arrayUnion, updateDoc, doc, setDoc, Timestamp, getDocs ,serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import notify from '../hook/useNotifcation'
import { useSelector, useDispatch } from 'react-redux'

import ListVid from '../Components/ListVid'
export default function AddVideoComponents() {
   

   const [loading, setLoading] = useState(false);
   const [categoryVid, setCategoryVid] = useState("");

   const [vidUrl, setVidUrl] = useState("");
   const [isPress, setIsPress] = useState(false)
   const [images, setImages] = useState([])
   const dispatchNovies = useDispatch();
   const [videos, setVideos] = useState([])
   const [update, setUpdate] = useState(false)
   const [error, setError] = useState(false)
   const [errorImg, setErrorImg] = useState(false)
  const [imgUpload, setImgUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(avatar);
  const [upload, setUpload] = useState(false)
  const category = [{ cat: "Editorial" }, { cat: "Commercial" }, { cat: "Automobile" }, { cat: "Personal" }]
   
   //get data from fireStore using redux
   useEffect(() => {
     // getMovies()
     dispatchNovies(getAllVids())
 
   }, [update])
 

   const VideoFromFireBaseRedux = useSelector(state => state.Video.VidsUrls)
 
  //  useEffect(() => {
  //   setVideos(dataVideos)
  //    console.log(dataVideos)
  //  }, [dataVideos])
 





  //-=-------  //  //upload all blog to firebase------------ //
  const onUpload = async (e) => {
    e.preventDefault();

    if (categoryVid.length == 0 || images == null || categoryVid == '' ) return setError(true);
  
    e.preventDefault();

    const data = await getDocs(collection(db, "Videos"));
    const id = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).length + 1
    const docRef = await addDoc(collection(db, 'Videos'), {
      id: id,
      Category: categoryVid,
      UrlVideo: vidUrl,
      date: serverTimestamp(),
    })

    await Promise.all(
      setLoading(true),
      setIsPress(true),
      images?.map((image) => {

        //update colication and add image to it {map if theres many images}
        const imgeref = ref(storage, `Videos/${image.name}`);
        uploadBytes(imgeref, image).then(async () => {
          const downUrl = await getDownloadURL(imgeref)
          await updateDoc(docRef, {
            image: arrayUnion(downUrl)
          })
        }

        )

      }),    setError(false),setImages([]),
      notify(),
      setUpdate(!update),
  
      setCategoryVid(""),
      setIsPress(false),
      setLoading(true),

    )




  };
 






    // //fitlter by category
    // const filterByCatVid = (cat) => {

    //   filterByCatMainVid(cat,setVideos,dataVideos)
    // }
  
  

    // <GalleryVid2 videos={videos} setUpdate={setUpdate} update={update}/>


  return (
    <div>
   

 
    <div className='AddVideoAdmin-Main'>

    <div className='imgColAdmin'>
     { /*Part 1 Upload Video */}

        <div className='uploadImg'>
        <div className='status-of-uploading'>
        {
          isPress ? loading ?
            <h4 >Loading...</h4>
            : <h3 className='done-uploaded'>Image Uploaded!</h3> : <h4>Upload Image First</h4>
        }
              </div>
        <label htmlFor="upload-photo">
        <img
        src={avatar}
          alt="fzx"
          height="100px"
          width="120px"
          style={{ cursor: "pointer" }}
        />
      </label>
      <input className='hideinputImg'
        type="file"
        name="photo"
        onChange={(e) => setImages(Object.values(e.target.files))}

        id="upload-photo"
      />
      {error && images == null ?
        <label className='error animate__animated animate__shakeX'>add image Empty</label> : ""}
  
        {images?.map((i) => <img src={URL.createObjectURL(i)}></img>)}


  
        
      
        </div>
    
  



       {   /*Part 2 add category  */}
        <div className='colAddInfo'> 

        {error && vidUrl.length <= 0 ?
          <label className='error animate__animated animate__shakeX'>Url can't be Empty</label> : ""}
        <input value={vidUrl} onChange={(e)=>setVidUrl(e.target.value)} className="css-input" type="text" placeholder='Add url Video'></input>


    <label htmlFor="category">Choose a Category:</label>
    <select className='drop-custom' required name="category" id="cars" value={categoryVid} onChange={(e) => setCategoryVid(e.target.value)}>
    <option className='drop-custom-option' selected disabled value="">--Please choose an Category--</option>
      {category.map((i) => <option>{i.cat}</option>)}

    </select>

     {error && categoryVid.length <= 0 ?
      <label className='error animate__animated animate__shakeX'>Category can't be Empty</label> : ""}
        <div onClick={(e)=>onUpload(e)} className='btnimg'>Add Item </div></div> 
      </div>

</div>

      <div className='col2-items' >
      <div className='list-categoryAdmin'><h6 className='text-black' onClick={() => filterByCat("ALL")}>ALL</h6>{category.map((i) => <h6 className='text-black' onClick={() => filterByCatVid(i.cat)} key={Math.random()} >{i.cat}</h6>)}
      
      </div>
      


      <div className='count-items'> Latest Videos: { VideoFromFireBaseRedux.length}</div>


       <div className='List-items'>
          
<ListVid data={VideoFromFireBaseRedux} videos={videos} setUpdate={setUpdate} update={update}/>

</div>


 
    </div>
    <ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </div>
  )
}
