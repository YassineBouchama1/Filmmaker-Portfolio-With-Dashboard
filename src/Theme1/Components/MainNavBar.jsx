import React, { useState } from 'react'
import '../style/navbar.css'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function MainNavBar() {


  const [toggle, setToggle] = useState(true)


  // classes apply when user click on humbergur icon
  const toggleModal = () => {
    setToggle(!toggle);
    console.log(toggle)
    if (toggle) {
      document.getElementById("bar1").classList.add("active")
      document.getElementById("bar2").classList.add("active")
      document.getElementById("bar3").classList.add("active")

      document.querySelector(".links").classList.add("showMobile")
      document.querySelector(".blure-navbar").classList.add("offcanvas-mobile")
      document.querySelector(".Logo-sidebar").classList.add("Logo-sidebar-active")
      document.querySelector(".contact-mobile").classList.add("contact-mobile-active")

    
      document.querySelector(".icon-navbar-mobile-ig").classList.add("main-ig-fb-active")
      document.querySelector(".Logo").classList.add("main-ig-fb-active")
      // document.querySelector(".rightBar").style.display = ("flex")

    } else {
      document.getElementById("bar1").classList.remove("active")
      document.getElementById("bar2").classList.remove("active")
      document.getElementById("bar3").classList.remove("active")


      document.querySelector(".links").classList.remove("showMobile")
      document.querySelector(".blure-navbar").classList.remove("offcanvas-mobile")
      document.querySelector(".Logo-sidebar").classList.remove("Logo-sidebar-active")
      document.querySelector(".contact-mobile").classList.remove("contact-mobile-active")

     
      document.querySelector(".icon-navbar-mobile-ig").classList.remove("main-ig-fb-active")
      document.querySelector(".Logo").classList.remove("main-ig-fb-active")
      // document.querySelector(".rightBar").style.display = ("none")
    }

  };



  // take you to seaction
  const clickTo = (id) => {
    let hero = document.getElementById(id);
    // Stop Page Reloading
    hero && hero.scrollIntoView();
  }


  return (
    <header>
      <nav className='nav-mobile nav-mobile-active '>

        <div className='Logo'><a href='/'><img src={logo}></img></a></div>

        <div className='links'>
          <div className='Logo-sidebar Logo-sidebar-active'><Link to='/'><img src={logo}></img></Link></div>
          <div className='links-mobile'><a href="/">Home</a>
            <Link  to="/Videos">Filmmaking</Link>
            <Link to="/Photos">Photography</Link>
        
            <Link to="/">About</Link>
            <Link to="/Contact">Contact</Link></div>
          <div className='contact-mobile'>
            <a href="mailto:#" className="link-body">hello@noaman.info</a>
            <p> +212 6 26 85 94 49 </p>
            <div className='socail-icons-mobile'>
              <a href='https://www.instagram.com/noamaane/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div onClick={toggleModal} className='blure-navbar'></div>
        <div className='socail-icons'>
        
          <a className='icon-navbar-mobile-ig' href='https://www.instagram.com/noamaane/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <div className="hamburger-menu" onClick={toggleModal} id="btnMobile">
            <div id='bar1' className="bar-top"></div>
            <div id='bar2' className="bar-middle "></div>
            <div id='bar3' className="bar-bottom"></div>
          </div>
        </div>
      </nav>

    </header>
  )
}
