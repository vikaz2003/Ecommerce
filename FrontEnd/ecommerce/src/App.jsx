import { useState } from 'react'
import { NavBar,Footer,Body } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
