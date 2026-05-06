import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import { Signup,Login ,About,Contact, OAuthSucess,Logout} from './components'
import { Provider } from 'react-redux'

import {store} from "./store/store"

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<App/>} >
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/oauth-success' element={<OAuthSucess/>}/>
      <Route path='/logout' element={<Logout/>}/>
     </Route>

    </>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
