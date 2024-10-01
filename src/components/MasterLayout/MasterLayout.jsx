import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
    
    <Sidebar/>
    <div className="container-fluid p-0">
      <Outlet/>
    </div>

  
    
    </>
  )
}
