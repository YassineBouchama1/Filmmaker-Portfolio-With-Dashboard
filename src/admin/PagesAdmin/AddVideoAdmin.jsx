import React from 'react'
import '../dash.css'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import SideBar from '../SideBar'
import NavBar from '../../NavBar'


import AddVideoComponents from '../AddVideoComponents'

export default function VidAdmin() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (
  <div>
 <NavBar/>

    <div  className='dash' style={{ display: 'flex', height: '100%', minHeight: '400px'  }}>
 
 
  
  

   <SideBar/>
  
      <main  className='bg-light main-class' style={{  padding: 10 }}>
 
        <AddVideoComponents/>
      </main>
    </div>

    </div>

    
  )
}
