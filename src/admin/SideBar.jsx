import React from 'react'
import "./sideBar.css"
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route ,NavLink,Link} from "react-router-dom"


export default function SideBar() {

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
   
      <Sidebar breakPoint="md" rootStyles={{
        background:
          'white' ,
      }}>
      <h5 style={{color:'black' ,textAlign:'center'}}>Sisko</h5>
        <Menu className='menu-sidebar'>
        <MenuItem routerLink={<NavLink to="/Dashboard" />}> Dashboard</MenuItem>
        <MenuItem routerLink={<NavLink to="/image" />}> Add Image</MenuItem>
        <MenuItem routerLink={<NavLink to="/video" />}> Add Video</MenuItem>
        </Menu>
      </Sidebar>
      
        
     
      
     
    


  )
}
