
import React from 'react'
import '../dash.css'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import SideBar from '../SideBar'
import NavBar from '../../NavBar'

import { Link } from 'react-router-dom';
import DashboardComponent from '../DashboardComponent'

export default function Dashboard() {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (
  <div>
 <NavBar/>

    <div  className='dash bg-light' style={{ display: 'flex', height: '100%', minHeight: '400px'  }}>
 
 
  
  

   <SideBar/>
  
      <main  className='bg-light main-class' style={{  padding: 10 }}>
 
        <DashboardComponent/>
      </main>
    </div>

    </div>

    
  )
}
