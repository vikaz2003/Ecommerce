import { useState } from 'react'
import { NavBar,Footer,Body } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='grow'>
      <NavBar/>
      <Outlet/>
       </div>
      <Footer/>
    </div>
  )
}

export default App
