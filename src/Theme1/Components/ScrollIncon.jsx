
import React,{ useState,useEffect } from 'react'
export default function ScrollIncon() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    // {isAuth?  <NavBar />:null}
    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 1000) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (

    

  

    
    <div className="top-to-btm" onClick={()=>goToTop()}>
 
    <i className="fa-duotone icon-position icon-style fa-up-to-line"></i>
    
    
    </div>
  )
}
