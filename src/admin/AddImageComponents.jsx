import React, { useState, useEffect } from 'react'
import "./PagesAdmin/styleAdmin/addImageAdmin.css"
import { ToastContainer, toast } from 'react-toastify';
import notify from '../hook/useNotifcation'
import { filterByCatMainImg } from '../hook/useFiltercategory'
import 'react-toastify/dist/ReactToastify.css';
import avatar from '../images/avatar.png'

import { getAllMovies, uploadImgRedux, createImgRedux } from '../Redux/Actions/action'
import { useSelector, useDispatch } from 'react-redux'




import ListImg from '../Components/ListImg'


export default function AddImageComponents() {

  const category = [{ cat: "Portraits" }, { cat: "Product" }, { cat: "Automobile" }, { cat: "Street" }, { cat: "Events" }]
 





  const [loading, setLoading] = useState(false);
  const [categoryImg, setCategoryImg] = useState("");
  const [imgUpload, setImgUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(avatar);
  const [images, setImages] = useState([])
  const [isPress, setIsPress] = useState(false)
  const dispatchNovies = useDispatch();
  const dispatch2 = useDispatch();

  const [update, setUpdate] = useState(false)
  const [error, setError] = useState(false)
  const [errorImg, setErrorImg] = useState(false)
  const [upload, setUpload] = useState(false)



  //get data from fireStore using redux
  useEffect(() => {
    // getMovies()
    dispatchNovies(getAllMovies())

  }, [update])


  const dataPostss = useSelector(state => state.DataR.movies)


  useEffect(() => {
    setImages(dataPostss)
    console.log(dataPostss)
  }, [dataPostss])








  //upload img to firebase using redux
  const uploadImg = () => {
    if (imgUpload == null) {
      setErrorImg(true)

    }
    else {
      setLoading(true)
      setIsPress(true)
      dispatchNovies(uploadImgRedux(imgUpload, setImageUrls, setLoading))

      setUpload(true)
      setTimeout(setLoading(false), 1000);
    }

  }



  //upload all blog to firebase
  const onCreate = async () => {

    if (categoryImg.length == 0 || imgUpload == null || upload == false ||imageUrls == avatar) {
      setError(true)

    }


    else {
      setError(false);

      dispatch2(createImgRedux(imageUrls, categoryImg, setLoading, setCategoryImg, setLoading))
      notify()
      setUpdate(!update)
      // setImgUpload(null)
      setImageUrls(avatar)
      setCategoryImg("")
    }

  }




  //when image change save it 
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {

      setImageUrls(URL.createObjectURL(event.target.files[0]))
      setImgUpload(event.target.files[0])
      setErrorImg(true);
    }
  }

  //fitlter by category
  const filterByCat = (cat) => {

    filterByCatMainImg(cat, setImages, dataPostss)
  }






  ///ui

  // <Gallery images={images} setUpdate={setUpdate} update={update} />

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
              src={imageUrls}
              alt="fzx"
              
              height="100px"
              width="120px"
              style={{ cursor: "pointer" }}
            />
          </label>
          <input className='hideinputImg'
            type="file"
            name="photo"
            onChange={onImageChange}

            id="upload-photo"
          />
          {errorImg && imgUpload == null ?
            <label className='error animate__animated animate__shakeX'>add image Empty</label> : ""}
          {error && upload == false ?
            <label className='error animate__animated animate__shakeX'>upload image</label> : ""}


          <div onClick={uploadImg} className='btnimg'>1: Upload Image </div>

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

           <div onClick={onCreate} className='btnimg'>2: Add To List</div>

         </div>
       </div>
    



       {/* List Of Photos  */}


       <div className='col2-items'>


        
       <div className='list-categoryAdmin'><h6 className='text-black' onClick={() => filterByCat("ALL")}>ALL</h6>{category.map((i) => <h6 className='text-black' onClick={() => filterByCat(i.cat)} key={Math.random()} >{i.cat}</h6>)}
       </div>
        <div className='count-items'> Items: { images.length}</div>
       <div className='List-items'>
       
         
       <ListImg images={images} setUpdate={setUpdate} update={update}/>
 
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
