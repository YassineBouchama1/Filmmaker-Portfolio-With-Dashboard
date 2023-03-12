import React, { useState, useEffect } from 'react'
import "./PagesAdmin/styleAdmin/addImageAdmin.css"
import { ToastContainer, toast } from 'react-toastify';
import notify from '../hook/useNotifcation'
import { filterByCatMainImgADMIN } from '../hook/useFiltercategory'
import 'react-toastify/dist/ReactToastify.css';
import { auth, db, storage } from "../firebase/firebase-config"
import avatar from '../images/avatar.png'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, arrayUnion, updateDoc, doc, setDoc, Timestamp, getDocs ,serverTimestamp } from "firebase/firestore";
import { getAllMovies } from '../Redux/Actions/action'
import { useSelector, useDispatch } from 'react-redux'



import ListImg from '../Components/ListImg'


export default function AddImageComponents() {



  const category = [{ cat: "Portraits" }, { cat: "Product" }, { cat: "Automobile" }, { cat: "Street" }, { cat: "Events" }]
 





  const [loading, setLoading] = useState(false);
  const [imgAdmin, setimgAdmin] = useState([]);
  const [errorImg, setErrorImg] = useState(false);
  const [categoryImg, setCategoryImg] = useState("");
  
  // const [images, setImages] = useState([])
  const [isPress, setIsPress] = useState(false)
  const dispatchNovies = useDispatch();


  const [update, setUpdate] = useState(false)
  const [error, setError] = useState(false)


  const [images, setImages] = useState([])


  //get data from fireStore using redux
  useEffect(() => {
    // getMovies()
    dispatchNovies(getAllMovies())
  
  }, [update])

  const PhotosFromFireBaseRedux = useSelector(state => state.DataR.movies)


  useEffect(() => {
    setimgAdmin(PhotosFromFireBaseRedux)

  }, [PhotosFromFireBaseRedux])




// filter
  const filterByCatMainImgADMIN = (cat) => {
    if (cat === 'ALL') {
      setimgAdmin(PhotosFromFireBaseRedux)
    }
    else {
      const newAr = PhotosFromFireBaseRedux.filter((item) => item.Category === cat)
      setimgAdmin(newAr)
    }
    console.log(cat)
  }



  //-=-------  //upload all blog to firebase------------- //
  const onUpload = async (e) => {
    e.preventDefault();

    if (categoryImg.length == 0 || images == null || categoryImg == '' ) return setError(true);
  
    e.preventDefault();

    const data = await getDocs(collection(db, "Images"));
    const id = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).length + 1
    const docRef = await addDoc(collection(db, 'Images'), {
      id: id,
      Category: categoryImg,

      date: serverTimestamp(),
    })

    await Promise.all(
      setLoading(true),
      setIsPress(true),
      images?.map((image) => {

        //update colication and add image to it {map if theres many images}
        const imgeref = ref(storage, `Images/${image.name}`);
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
  
      setCategoryImg(""),
      setIsPress(false),
      setLoading(true),

    )




  };












  return (


   
   
    

       
 
   
         <div className='AddImageAdmin-Main'>




         <div className='imgColAdmin'>



        { /*Part 1 Upload Img */}

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
          {errorImg && images == null ?
            <label className='error animate__animated animate__shakeX'>add image Empty</label> : ""}
          

            {images?.map((i) => <img src={URL.createObjectURL(i)}></img>)}
 
       
        </div>



     {   /*Part 2 add category  */}


         <div className='colAddInfo'>
      
           <label htmlFor="category">Choose a Category:</label>
           <select  required name="category" id="cars" value={categoryImg} onChange={(e) => setCategoryImg(e.target.value)}>
           <option  selected disabled value="">--Please choose an Category--</option>
             {category.map((i) => <option>{i.cat}</option>)}

           </select>
           {error && categoryImg.length <= 0 ?
             <label className='error animate__animated animate__shakeX'>Choose Category</label> : ""}

           <div onClick={onUpload} className='btnimg'>2: Add To List</div>

         </div>
       </div>
    



       {/* List Of Photos  */}


       <div className='col2-items'>


        
       <div className='list-categoryAdmin'><h6 className='text-black' onClick={() => filterByCatMainImgADMIN("ALL")}>ALL</h6>{category.map((i) => <h6 className='text-black' onClick={() => filterByCatMainImgADMIN(i.cat)} key={Math.random()} >{i.cat}</h6>)}
       </div>
        <div className='count-items'> Items: { imgAdmin.length}</div>
       <div className='List-items'>
       
         
       <ListImg data={imgAdmin} setimgadmin={setimgAdmin} images={images} setUpdate={setUpdate} update={update}/>
 
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
