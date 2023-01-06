import React,{useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbarhome.css'
import logo from './img/logo.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
export default function NavBarHome() {


    const [toggle, setToggle] = useState(true)



    const toggleModal = () => {
      setToggle(!toggle);
      console.log(toggle)
      if (toggle) {
        document.getElementById("bar1").classList.add("active")
        document.getElementById("bar2").classList.add("active")
        document.getElementById("bar3").classList.add("active")
        document.getElementById("contactID").classList.remove("contact")
        document.querySelector(".rightBar").classList.add("showMobile")
        // document.querySelector(".rightBar").style.display = ("flex")
  
      } else {
        document.getElementById("bar1").classList.remove("active")
        document.getElementById("bar2").classList.remove("active")
        document.getElementById("bar3").classList.remove("active")
        document.getElementById("contactID").classList.add("contact")
  
        document.querySelector(".rightBar").classList.remove("showMobile")
        // document.querySelector(".rightBar").style.display = ("none")
      }
  
    };
  

  return (
   
    <div className="header" id='Home'>



    <nav>
      <a onClick={e => {
        let hero = document.getElementById("Home");
        e.preventDefault();  // Stop Page Reloading
        hero && hero.scrollIntoView();
      }} >  <img className='animate__zoomIn  animate__animated logoH' src={logo} alt="Pyxel" /> <img /></a>



      <div className="hamburger-menu" onClick={toggleModal} id="btnMobile">
        <div id='bar1' className="bar-top"></div>
        <div id='bar2' className="bar-middle "></div>
        <div id='bar3' className="bar-bottom"></div>
      </div>
 
        <div className="rightBar " id='rightBarID'  >
          <a onClick={() => clickTo("Home")} to="Home"  >Home</a>
          <a onClick={() => clickTo("Projects")} to="Projects" >Projets</a>
          <a onClick={() => clickTo("Services")} to="Services" >Services</a>
          <a onClick={() => clickTo("Contact")} id='contactID' className="contact" to="Contact" >Hire Me</a>
          <a className='freebie'  >Freebie</a>


        </div>

 
    </nav>
 
  </div>

    
  )
}
