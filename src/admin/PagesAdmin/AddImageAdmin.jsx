import React from 'react'
import '../dash.css'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import SideBar from '../SideBar'
import NavBar from '../../NavBar'

import { Link } from 'react-router-dom';
import AddImageComponents from '../AddImageComponents'

export default function ImgAdmin() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (
  <div>
 <NavBar/>

    <div  className='dash ' style={{ display: 'flex', height: '100%', minHeight: '400px'  }}>
 
 
  
   

    <SideBar/>
   
  
      <main  className='bg-light main-class' style={{ padding: 10 }}>
 
        <AddImageComponents/>
      </main>
    </div>

    </div>

    
  )
}
