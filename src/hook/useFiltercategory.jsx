 
 

 
   
 
  //fitlter by category
  export const filterByCatMainImg = (cat,setImages,dataPostss) => {
    if (cat === 'ALL') {
        setImages(dataPostss)
    }
    else {
      const newAr = dataPostss.filter((item) => item.categoryImg === cat)
      setImages(newAr)
    }
    console.log(cat)
  }





    //fitlter by category
    export  const filterByCatMainVid = (cat,setVideos,dataVideos) => {
        if (cat === 'ALL') {
            setVideos(dataVideos)
        }
        else {
          const newAr = dataVideos.filter((item) => item.categoryVid === cat)
          setVideos(newAr)
        }
        console.log(cat)
      }
 
    
    