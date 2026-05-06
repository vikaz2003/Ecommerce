import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function OAuthSucess() {

    const location=useLocation()
    const navigate=useNavigate()
    const dispatch=useDispatch() 
   
     useEffect(()=>{
         const params=new URLSearchParams(location.search);
         const token=params.get("token");

         console.log(token)

         if(!token){
            navigate("/signup")
            return;
         }

         dispatch(login({
            user:null,
            token
         }));

         navigate("/")
     },[location.search,dispatch,navigate]


     )

  return (
      <div className='min-h-screen flex items-center justify-center'>
           Logging you in...
      </div>
    
  )
}

export default OAuthSucess