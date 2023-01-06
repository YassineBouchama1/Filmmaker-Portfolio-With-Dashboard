import React, { useState, useEffect } from 'react'
import "./PagesAdmin/styleAdmin/dashbord.css"
import SideBar from "./SideBar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from '../NavBar'
import avatar from '../images/avatar.png'
import { getAllVids,createVidRedux,uploadThumbRedux } from '../Redux/Actions/videoAction'
import {filterByCatMainVid} from '../hook/useFiltercategory'
import NoData from '../Components/NoData'

import notify from '../hook/useNotifcation'
import { useSelector, useDispatch } from 'react-redux'

import ListVid from '../Components/ListVid'
export default function DashboardComponent() {
   

  return (
    <div>
   

 
    <div className='Admin-Conteiner'>

    <div className='col-1-sisko'>
     { /*Part 1 Upload Video */}

        <div className='sub-col1'>
   
        Part 1
      
        </div>
    
  



       {   /*Part 2 add category  */}
        <div className='sub-col2'> 

 part 2
        </div> 
       {   /*Part 3 add category  */}
       <div className='sub-col3'> 

       part 2
              </div> 

      </div>

</div>


    </div>
  )
}
