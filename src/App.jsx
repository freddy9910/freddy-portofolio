import { useState } from 'react'
import React from 'react'
import './App.css'
import './bootstrap.min.css'  
import './bootstrap-icons.css'  
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Courses from './components/Courses/Courses'
import Sidebar from './components/Sidebar/Sidebar'
import MasterLayout from './components/MasterLayout/MasterLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

function App() {
 const routes=createBrowserRouter([{
  path:"/",
  element:<MasterLayout/>,
  children:[
    {index:true,element:<About/>},
    {path:"about",element:<About/>},
    {path:"skills",element:<Skills/>},
    {path:"experience",element:<Experience/>},
    {path:"education",element:<Education/>},
    {path:"courses",element:<Courses/>},
  ]
 }])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
