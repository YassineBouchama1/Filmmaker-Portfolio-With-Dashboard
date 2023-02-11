 
 

 
   
 
  //fitlter by category
  export const filterByCatMainImg = (cat,setImages,PhotosFromFireBaseRedux) => {

    const newAr = PhotosFromFireBaseRedux.filter((item) => item.Category == cat )
    setImages(newAr)

 
  }





    //fitlter by category
    export  const filterByCatMainVid = (cat,setVideos,dataVideos) => {
  
     
          const newAr = dataVideos.filter((item) => item.Category === cat)
          setVideos(newAr)
    
      }
 
    
    