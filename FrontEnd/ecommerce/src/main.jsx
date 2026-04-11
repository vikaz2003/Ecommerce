import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import { Signup,Login } from './components'
import About from './components/About'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<App/>} >
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
     </Route>

    </>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
