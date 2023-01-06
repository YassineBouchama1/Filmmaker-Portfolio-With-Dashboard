import React from 'react'
import "./style/NavBar.css"
import { signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useProSidebar } from 'react-pro-sidebar';
export default function NavBar() {


  const [isAuth2, setIsAuth2] = useState(localStorage.getItem("isAuth"));
  const dispatchNovies = useDispatch();

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  const signUserOut = (e) => {
   
  
    console.log(isAuth2)
    localStorage.clear();
    setIsAuth2(false);
    signOut(auth).then(() => {
 


   
     
      window.location.pathname = "/login";
      dispatchNovies({ type: 'notLog' })

    });

  };

  return (

  
<div className='header-admin'>
    <div className='NavBar-admin'>
  
    <a href='/'>Home</a>
   
    {!isAuth2 ? (
      <Link to="/login"> Login </Link>
    ) : (
      <>

      
        <Link to='/login' onClick={signUserOut} > Log Out</Link>

        
        <button className='toggle-admin' onClick={() => toggleSidebar()}>Menu</button>
      </>



    )}
   
    </div>
    </div>
  )
}
